import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

import { getProducts } from './lib/services/commercetools'
import ProductList from './components/ProductList'

export default function App() {
  const [isLoading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  const loadProducts = async () => {
    setLoading(true)
    try {
      const { body: response } = await getProducts()
      setProducts(response.results)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <View style={styles.container}>
      {
        isLoading
          ? <ActivityIndicator />
          : <ProductList products={products} />
      }
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
