import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native'
import { installTwicPics } from '@twicpics/components-react-native'
import { getProducts } from './lib/services/commercetools'
import { getBlogPosts } from './lib/services/contentful'
import ProductList from './components/ProductList'
import BlogPostList from './components/BlogPostList'

installTwicPics({
  "domain": "https://7pa5ms8r.twic.pics"
})

export default function App() {
  const [isLoadingProducts, setLoadingProducts] = useState(false)
  const [isLoadingPosts, setLoadingPosts] = useState(false)
  const [products, setProducts] = useState([])
  const [posts, setPosts] = useState([])

  const loadProducts = async () => {
    setLoadingProducts(true)
    try {
      const { body: response } = await getProducts()
      setProducts(response.results)
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingProducts(false)
    }
  }

  const loadBlogPosts = async () => {
    setLoadingPosts(true)
    try {
      const response = await getBlogPosts()
      setPosts(response.items)
      console.log(response.items)
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingPosts(false)
    }
  }

  useEffect(() => {
    loadProducts()
    loadBlogPosts()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Blog Posts</Text>
      {
        isLoadingPosts
          ? <ActivityIndicator />
          : <BlogPostList posts={posts} />
      }
      <Text>Product List</Text>
      {
        isLoadingProducts
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
