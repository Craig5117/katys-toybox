import React, { useState, useContext, createContext } from 'react';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
  
} from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';

const authContext = createContext()

export function AuthProvider({ children }) {
  const auth = useProvideAuth()

  return (
    <authContext.Provider value={auth}>
      <ApolloProvider client={auth.createApolloClient()}>
        {children}
      </ApolloProvider>
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const [authToken, setAuthToken] = useState(null)

  const isSignedIn = () => {
    if (authToken) {
      return true
    } else {
      return false
    }
  }

  const getAuthHeaders = () => {
    if (!authToken) return null

    return {
      authorization: `Bearer ${authToken}`,
    }
  }

  // let uriLink;

  // if (process.env.NODE_ENV === "development") {
  //   uriLink = 'http://localhost:3000/api/graphql'
  // } else{
  //   uriLink = 'https://katys-toybox.vercel.app/api/graphql'
  // }

  const createApolloClient = () => {
    const link = new HttpLink({
      uri: '/api/graphql',
      headers: getAuthHeaders(),
    })

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    })
  }

  const signIn = async ({ username, password }) => {
    try{const client = createApolloClient()
    // const LoginMutation = gql`
    //   mutation login($username: String!, $password: String!) {
    //     login(username: $username, password: $password) {
    //         token
    //         user {
    //             id
    //         }
    //     }
    // }
    // `

    const result = await client.mutate({
      mutation: LOGIN_USER,
      variables: { username, password },
    })

    console.log(result)

    if (result?.data?.login?.token) {
      setAuthToken(result.data.login.token)
    }
  }catch (e) {console.log(e)} }

  const signOut = () => {
    setAuthToken(null)
  }

  return {
    setAuthToken,
    isSignedIn,
    signIn,
    signOut,
    createApolloClient,
  }
}
