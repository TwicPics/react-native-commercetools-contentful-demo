import { View, FlatList, StyleSheet, Text } from 'react-native'
import { TwicImg } from '@twicpics/components/react-native'
import { TWICPICS_COMMERCETOOLS_URL, TWICPICS_COMMERCETOOLS_PATH } from '@env'

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  product: {
    marginBottom: 28
  },
  image: {
    marginBottom: 16,
  },
  title: {
    fontWeight: 600,
    fontSize: 24,
    marginBottom: 8,
  },
  price: {
    color: 'grey',
    fontSize: 16
  }
})

const twicpicsURL = (fullUrl) => {
  return fullUrl.replace(
    TWICPICS_COMMERCETOOLS_URL, // the source URL
    TWICPICS_COMMERCETOOLS_PATH // the path
  )
}

const renderItem = ({ item: product }) => (
  <View style={styles.product}>
    <Text style={styles.title}>{product.masterData.current.name.en}</Text>
    <TwicImg
      mode="cover"
      focus="auto"
      style={styles.image}
      src={twicpicsURL(product.masterData.current.masterVariant.images[0].url)}
    />
    <Text style={styles.price}>0.99 €</Text>
  </View>
)

export default function ProductList({ products }) {
  return (
    <FlatList
      style={styles.container}
      data={products}
      keyExtractor={({ id }, index) => `${id}${index}`}
      renderItem={renderItem}
    />
  )
}
