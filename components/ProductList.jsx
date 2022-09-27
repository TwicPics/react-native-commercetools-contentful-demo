import { Text, View, FlatList, StyleSheet } from 'react-native'
import { TwicImg } from '@twicpics/components-react-native'

const styles = StyleSheet.create({
  image: {
    width: '200px'
  }
})

const cleanUrl = (fullUrl) => {
  return fullUrl.replace(
    "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian", // the source URL
    "bp-commercetools" // the path
  )
}

const renderItem = ({ item: product }) => (
  <View>
    <TwicImg
      mode="cover"
      style={styles.image}
      src={cleanUrl(product.masterData.current.masterVariant.images[0].url)}
    />
  </View>
)

export default function ProductList({ products }) {
  return (
    <View>
      <Text>ProductList</Text>
      <FlatList
        data={products}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
      />
    </View>
  )
}
