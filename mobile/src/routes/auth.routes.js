import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from './../screens/Auth/SignIn'
import SignUp from './../screens/Auth/SignUp'

const Auth = () => {

  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={ {
        headerShown: false
      } }
    >
      <Stack.Screen name="SignIn" component={ SignIn }/>
      <Stack.Screen name="SignUp" component={ SignUp }/>
    </Stack.Navigator>
  )
}

export default Auth