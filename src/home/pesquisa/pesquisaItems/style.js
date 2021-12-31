import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    card:{
        width:345,
        height: 275,
        flexDirection:"column",
        justifyContent:"space-evenly",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#BEBAB3',
        marginTop: 12,
    },
    tagCircle:{
        position: 'absolute',
        top: 162,
        right: 16,
        width: 72,
        height:24,
        backgroundColor:"#65AAEA",
        borderRadius:12,
        alignItems:"center",
        justifyContent:"center",
    },
    tag:{
        color:"#F2F2F2",
        fontWeight:"bold",
        fontSize:12
    },
    image:{
        width:343,
        height:194,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    title:{
        marginTop:16,
        marginLeft: 16,
        fontSize: 24,
        color: '#3C3A36',
        textAlign: 'left'
    },
    description:{
        marginLeft: 16,
        marginTop: 4,
        fontSize: 14,
        color: '#3C3A36',
        textAlign: 'left'
    },
    textWraper:{
        width:343,
        height: 81,
    }
})

export default styles