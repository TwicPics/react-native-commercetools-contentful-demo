import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { installTwicPics } from '@twicpics/components/react-native'
import NavigationStack from './components/NavigationStack'

import { TWICPICS_DOMAIN } from '@env'

installTwicPics({
  "domain": TWICPICS_DOMAIN
})

export default function App() {
  return (
    <NavigationContainer >
      <NavigationStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}
