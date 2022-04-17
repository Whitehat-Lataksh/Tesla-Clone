import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import CarsList from './Components/CarsList/index';
import Header from './Components/Header/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <CarsList/>
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
  text: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
    backgroundColor: "#e8e8e8"
  },

});
