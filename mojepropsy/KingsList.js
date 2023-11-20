import { Text, View, FlatList } from "react-native";


const KingsList = ({kingsList})=>{
    //const{id, name, reignDate} = props.kingsList[0];

    return(
        <View>
            <FlatList
             data={kingsList}
             renderItem={({item: king})=>(
                <View>
                    <Text>{king.id}, imię: {king.name}
                    panowanie: {king.reignDate}</Text>
                </View>
    )}
                />
        </View>
        )
    }
export default KingsList;