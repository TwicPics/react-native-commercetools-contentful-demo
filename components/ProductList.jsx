import { Text, View } from 'react-native'

export default function ProductList({ products }) {
  return (
    <View>
      <Text>ProductList</Text>
      {
        products?.map((product, index) => (
          <Text key={index}>{product.masterData.current.masterVariant.images[0].url}</Text>
        ))
      }
    </View>
  )
}
