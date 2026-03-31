import { useMutation } from '@apollo/client/react'
import { CREATE_USER } from '../graphql/mutations/createUser'
import type { User } from '../types/user'

interface CreateUserVars {
  name: string
  age: number
  isMarried: boolean
}

interface CreateUserResponse {
  createUser: User
}

export const useCreateUser = () => {
  const [createUserMutation, { loading, error }] = useMutation<
    CreateUserResponse,
    CreateUserVars
  >(CREATE_USER, {
    update(cache, { data }) {
      const newUser = data?.createUser
      if (!newUser) return

      cache.modify({
        fields: {
          getUsers(existingUsers = []) {
            return [...existingUsers, newUser]
          },
        },
      })
    },
  })

  const createUser = async (variables: CreateUserVars) => {
    await createUserMutation({ variables })
  }

  return {
    createUser,
    loading,
    error,
  }
}