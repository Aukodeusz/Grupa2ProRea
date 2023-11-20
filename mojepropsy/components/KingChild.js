import {Text, View, Button} from 'react-native' ;

const KingChild = ({onDataReceiver}) =>{

    function sendChildToApp(){
        
        const data = "Dane do dziecka" 
        onDataReceiver(data) ;
    }
    return(
        <View>
            <Text style={{margin:10}}>Test dziecka</Text>
            <Button title="Wyślij dziecko z rodzica" onPress={sendChildToApp}/>
        </View>
    )
}

export default KingChild;