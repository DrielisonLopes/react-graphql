import { useQuery } from "@apollo/client/react";
import { GET_USERS } from "../graphql/queries/userQueries";
import type { GetUsersData } from "../types/user";

export const useUsers = () => {
  const { loading, error, data } = useQuery<GetUsersData>(GET_USERS);

  return {
    users: data?.getUsers || [],
    loading,
    error,
  };
};
