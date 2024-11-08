import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Board } from './components/board/board';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.titleContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: 'https://www.quick.md/wp-content/uploads/Quick-MD_Logo-w-name-right-NO-BG-1-300x79.png',
          }}
        />
        <Text>Tic Tac Toe Easter egg</Text>
      </View>

      <Board />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingBottom: 10,
  },

  image: {
    width: 200,
    height: 60,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
