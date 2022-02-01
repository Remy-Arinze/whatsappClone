import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        position:"absolute",
        bottom:5,
        flexDirection:'row',
        alignItems:"center",
        marginHorizontal:5,
        borderRadius:35
        
    },

    main:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:"center",
        marginRight:5,
        borderRadius:35,
        paddingHorizontal:3

    },

    button:{
        backgroundColor:'green',
        width:50,
        height:50,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        flex:1,
        marginHorizontal:3
    },
    icon:{
        marginRight:3
    }
})