import { Text } from "react-native";


const KingsList = (props) =>{
    const{id, name, reignDate} = props
    KingsList[0];

    return (
        <View>
            <text> {id}, {name}, {reignDate} </text>
        </View>
    )
}

export default KingsList