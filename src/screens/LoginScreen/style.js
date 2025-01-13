import { StyleSheet, useWindowDimensions } from "react-native";
import { COLORS } from "../../outils/constantes";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TextInput } from "react-native-gesture-handler";


const login = StyleSheet.create({
    gradiant: {
        backgroundColor: COLORS.first, 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    title: {
        textDecorationStyle: 80,
        color: 'white',
        padding: 30,
        fontSize: 42,
        textAlign: 'center',
    },
    input: {
        width: 300,
        height: 55 * 1,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#ccc',
        textAlign: 'center',
        margin: 10,   
    },
    button: {
        backgroundColor: 'rgba(52, 152, 219, 0.3)',
        width: 300,
        height: 55,
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
    },
   
})
export default login;

