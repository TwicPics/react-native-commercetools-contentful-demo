import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { installTwicPics } from '@twicpics/components-react-native'
import NavigationStack from './components/NavigationStack'

installTwicPics({
  "domain": "https://7pa5ms8r.twic.pics"
})

export default function App() {
  return (
    <NavigationContainer >
      <NavigationStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}
