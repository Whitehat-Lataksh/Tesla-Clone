import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    carContainer:{
        width : '100%',
        height:Dimensions.get("window").height
    },
    title:{
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
    heading: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    subtitle:{
        fontSize: 16,
        color: '#5c5e62',
    },
    image:{
        width : '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    buttonStyles: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
    },
    taglineCTA: {
        textDecorationLine: "underline",
        fontWeight: "700"
    }
})

export default  styles;