import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home'
import ProductsPage from "../pages/ProductsPage"
import BlogPage from "../pages/BlogPage"

const Stack = createNativeStackNavigator()

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Contentful"
        component={BlogPage}
        options={{ title: 'Blog Posts from Contentful' }}
      />
      <Stack.Screen
        name="Commercetools"
        component={ProductsPage}
        options={{ title: 'Products from Commercetools' }}
      />
    </Stack.Navigator>
  )
}

export default NavigationStack
