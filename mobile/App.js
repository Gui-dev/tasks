import React from 'react'
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

import { AuthProvider } from './src/contexts/auth'
import { TaskProvider } from './src/contexts/task'
import Routes from './src/routes'

export default function App() {

  return (
      <AuthProvider>
        <TaskProvider>
            <Routes />
        </TaskProvider>
    </AuthProvider>
  )
}