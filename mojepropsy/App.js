// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ToastAndroid, Switch } from 'react-native';
// import PoliashKing from './PoliashKing';
// import KingsList from './KingsList';
// import KingChild from './components/KingChild';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import MyRadioButton from './components/MyRadioButton';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

export default function App() {
//     let kings = [
//       {id:1, name:"Bolesław Chrobry", reignDate:"992-1025"},
//       {id:2, name:"Mieszko 2", reignDate:"992-1025"},
//       {id:3, name:"Przemysław Wielki", reignDate:"992-1025"},
//       {id:4, name:"Bolesław Śmiały", reignDate:"992-1025"},
//     ]



// let [childData, setChildData] = useState(null) ;

// const childDataHandler = (data) => {
//   console.log(data) ;
//   setChildData(data);
// }
// const [userChoice, setUserChoice] = useState("")
const [priority, setPriority, isEnabled, setIsEnable] = useState("")
//
function sendDataHandler(){
  console.log(`wysyłam ${priority}`)
  ToastAndroid.show(`wysyłam${priority}`, ToastAndroid.LONG)
}
//
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"column"}}>
     <MyRadioButton label="nie podoba się"
              value="unlike"
              checked={priority}
              onValueChange={setPriority}
     />

      <MyRadioButton label="podoba się"
              value="like"
              checked={priority}
              onValueChange={setPriority}
     />
         
    </View>
    <Switch>
    trackColor={{false: "#675845", true: "#124357"}}
    thumbColor={isEnabled ? "#345678": "#987654"}
    onValueChange={()=>setIsEnable(previous => !previous)}
    value={isEnabled}
    </Switch>
    <Button title='wyślij dane' onPress={sendDataHandler}></Button>
      {/* <Text style={{backgroundColor:"green"}}>
        Data received from a child component: 
      </Text>
      {
        childData && <Text style={{color:"violet"}}> {childData}</Text>
      }
      <KingChild onDataReceiver={childDataHandler}/> */}
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isEnabled ? "black" : "White",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
