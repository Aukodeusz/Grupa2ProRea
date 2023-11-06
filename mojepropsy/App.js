import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PoliashKing from './assets/PoliashKing';
import KingsList from './assets/KingsList';

export default function App() {
    let kings = [
      {id:1, name:"Bolesław Chrobry", reignDate:"992-1025"},
      {id:2, name:"Mieszko 2", reignDate:"992-1025"},
      {id:3, name:"Przemysław Wielki", reignDate:"992-1025"},
      {id:4, name:"Bolesław Śmiały", reignDate:"992-1025"},
    ]
  }



  return (
    <View style={styles.container}>
      <KingsList KingsList={kings}/>
    </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
