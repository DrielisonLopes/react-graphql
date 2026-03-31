import { useQuery } from '@apollo/client/react'
import { GET_USER_BY_ID } from '../graphql/queries/userQueries'
import type { GetUserByIdData, GetUserByIdVars } from '../types/user'

export const useUserById = (id: string) => {
  const { loading, error, data } = useQuery<
    GetUserByIdData,
    GetUserByIdVars
  >(GET_USER_BY_ID, {
    variables: { id },
    skip: !id,
  })

  return {
    user: data?.getUserById || null,
    loading,
    error,
  }
}