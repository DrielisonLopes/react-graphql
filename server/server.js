import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const users = [
  { id: "1", name: "Alice Johnson", age: 30, isMarried: true },
  { id: "2", name: "Bob Wilson", age: 25, isMarried: false },
  { id: "3", name: "Charlie Brown", age: 28, isMarried: true },
];

const typeDefs = `
  type Query {
    getUsers: [User!]!
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, age: Int!, isMarried: Boolean!): User!
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    isMarried: Boolean!
}
`;

const resolvers = {
  Query: {
    getUsers: () => users,
    getUserById: (_, { id }) => {
        return users.find(user => user.id === id);
    },
  },
    Mutation: {
    createUser: (_, { name, age, isMarried }) => {
      const newUser = {
        id: String(users.length + 1),
        name,
        age,
        isMarried,
      };
      users.push(newUser);
      return newUser;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`Server ready at ${url}`);