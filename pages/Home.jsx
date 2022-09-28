import { Button, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  button: {
    marginBottom: 12
  }
})

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Blog posts from Contentful"
        onPress={() => navigation.navigate('Contentful')}
        style={styles.button}
      />
      <Button
        title="Products from Commercetools"
        onPress={() => navigation.navigate('Commercetools')}
        style={styles.button}
      />
    </View>
  )
}
