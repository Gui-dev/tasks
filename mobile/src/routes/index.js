import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { useAuth } from './../contexts/auth'
import Auth from './auth.routes'
import Tasks from './tasks.routes'

const Routes = () => {

  const { signed } = useAuth()

  return (
    <NavigationContainer>
      {
        !signed
          ? <Auth />
          : <Tasks />
      }
    </NavigationContainer>
  )
}

export default Routes