import { View, FlatList, StyleSheet, Text } from "react-native"
import { TwicImg } from "@twicpics/components/react-native"
import { TWICPICS_CONTENTFUL_URL, TWICPICS_CONTENTFUL_PATH } from '@env'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  blogPost: {
    marginBottom: 28,
  },
  coverImage: {
    marginBottom: 16
  },
  title: {
    fontWeight: 600,
    fontSize: '2rem',
    marginBottom: 8
  },
  excerpt: {
    fontSize: 16,
    color: 'grey'
  }
})

const twicpicsURL = (fullUrl) => {
  return fullUrl.replace(
    TWICPICS_CONTENTFUL_URL, // the source URL
    TWICPICS_CONTENTFUL_PATH // the path
  )
}

const renderItem = ({ item: post }) => (
  <View style={styles.blogPost}>
    <TwicImg
      mode="cover"
      ratio="16:10"
      style={styles.coverImage}
      focus="auto"
      src={twicpicsURL(post.fields.coverImage.fields.file.url)}
    />
    <Text style={styles.title}>{post.fields.name}</Text>
    <Text style={styles.excerpt}>{post.fields.excerpt}</Text>
  </View>
)

export default function BlogPostList({ posts }) {
  return (
    <FlatList
      style={styles.container}
      data={posts}
      keyExtractor={item => item.sys.id}
      renderItem={renderItem}
    />
  )
}