import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Linking from 'expo-linking';

export default function App() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL || '';

  function handleButtonPress() {
    Linking.openURL(apiUrl);
  }

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <Button title="Click me" onPress={handleButtonPress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
