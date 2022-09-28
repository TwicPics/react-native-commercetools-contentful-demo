import { useState, useEffect } from "react"
import { View, StatusBar, ActivityIndicator, SafeAreaView, StyleSheet } from "react-native"
import { getProducts } from '../services/commercetools'
import ProductList from '../components/ProductList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
})

export default function () {
  const [isLoading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  const loadProducts = async () => {
    setLoading(true)
    try {
      const { body: response } = await getProducts()
      setProducts([...response.results])
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
    <SafeAreaView style={styles.container}>
      {
        isLoading
          ? <ActivityIndicator />
          : <ProductList products={products} />
      }
    </SafeAreaView>
  )
}