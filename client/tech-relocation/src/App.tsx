import './App.css'
import { useQuery } from '@apollo/client/react'
import { gql } from '@apollo/client'

const GET_USERS =  gql`
  query GetUsers {
  getUsers {
    id
    age
    name
    isMarried
  }
}`

function App() {
  const { loading, error, data } = useQuery(GET_USERS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <h1>Users</h1>
      <div>{(data as any).getUsers.map((user: any) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Is Married: {user.isMarried ? 'Yes' : 'No'}</p>
        </div>
      ))}</div>
    </>
  )
}

export default App
