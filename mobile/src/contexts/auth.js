import React, { createContext, useContext, useEffect, useState } from 'react'
import { Alert, AsyncStorage } from 'react-native'

import api from './../services/api'

const AuthContext = createContext( {} )

export const AuthProvider = ( { children } ) => {

  const [ user, setUser ] = useState( null )
  const [ loading, setLoading ] = useState( true )

  useEffect( () => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem( '@Tasks:user' )
      const storageToken =  await AsyncStorage.getItem( '@Tasks:token' )

      if( storageUser && storageToken ) {
        setUser( JSON.parse( storageUser ) )
        api.defaults.headers.Authorization = `Bearer ${storageToken}`
        setLoading( false )
      }
      setLoading( false )
    }

    loadStorageData()
  }, [] )

  const signIn = async ( email, password ) => {

    try {
      const response = await api.post( '/login', { email, password } )
      const { token, user } = response.data

      setUser( user )

      api.defaults.headers.Authorization = `Bearer ${token}`

      await AsyncStorage.setItem( '@Tasks:user', JSON.stringify( user ) )
      await AsyncStorage.setItem( '@Tasks:token', token )
    } catch (error) {
      Alert.alert( 'Erro!!', 'Por favor verifique seus dados' )
    }
  }

  const signOut = async () => {
    await AsyncStorage.clear()
    setUser( null )
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext( AuthContext )
  return context
}
