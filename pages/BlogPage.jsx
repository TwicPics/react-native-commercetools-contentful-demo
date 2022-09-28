import { useState, useEffect } from "react"
import { View, StatusBar, ActivityIndicator, SafeAreaView, StyleSheet } from "react-native"
import { getBlogPosts } from '../services/contentful'
import BlogPostList from '../components/BlogPostList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    maxWidth: 1024,
    marginHorizontal: 'auto'
  }
})

export default function Contentful() {
  const [isLoading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  const loadPosts = async () => {
    setLoading(true)
    try {
      const response = await getBlogPosts()
      setPosts(response.items)
      console.log(response.items)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {
        isLoading
          ? <ActivityIndicator />
          : <BlogPostList posts={posts} />
      }
    </SafeAreaView>
  )
}