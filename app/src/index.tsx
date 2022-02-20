import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './screens/login-screen'
import ChatScreen from './screens/chat-screen'

const Stack = createStackNavigator()
const App = () => {
  
  return (
      <Stack.Navigator initialRouteName='Auth'>
        <Stack.Screen name="Auth" component={LoginScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Main" component={ChatScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    
  )
}

export default App
