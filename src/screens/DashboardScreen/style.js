import { StyleSheet } from "react-native";
import { COLORS } from "../../outils/constantes";



const dashboard = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: COLORS.main,  
    },
    flat:{
        flex: 1,
        color: COLORS.first,        
    },

    header: { 
        color: 'white',
        fontSize: 24, 
        marginBottom: 10 
    },
    trade: { 
        color: 'white',
        textDecorationLine: 'underline',
        fontSize: 22, 
    },
  });

  export default dashboard;
