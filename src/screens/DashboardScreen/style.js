import { StyleSheet } from "react-native";
import { COLORS } from "../../outils/constantes";



const dashboard = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: COLORS.main,  
    },
    header: { 
        color: 'white',
        fontSize: 24, 
        marginBottom: 10 
    },
    input: { 
        borderWidth: 1, 

        padding: 20, 
        marginBottom: 15 
    },
  });

  export default dashboard;