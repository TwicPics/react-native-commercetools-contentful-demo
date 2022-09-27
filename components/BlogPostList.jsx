import { View, FlatList, StyleSheet } from "react-native"
import { TwicImg } from "@twicpics/components-react-native"
import { CONTENTFUL_SPACE_ID } from '@env'

const styles = StyleSheet.create({
  image: {
    width: '200px'
  }
})

const twicpicsURL = (fullUrl) => {
  return fullUrl.replace(
    `//images.ctfassets.net/${CONTENTFUL_SPACE_ID}`, // the source URL
    "bp-contentful" // the path
  )
}

const renderItem = ({ item: post }) => (
  <View>
    <TwicImg
      mode="cover"
      style={styles.image}
      src={twicpicsURL(post.fields.coverImage.fields.file.url)}
    />
  </View>
)

export default function BlogPostList({ posts }) {
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={item => item.sys.id}
        renderItem={renderItem}
      />
    </View>
  )
}