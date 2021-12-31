import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: '100%',
        marginLeft: 7
    },
    goBackButton: {
        position:'relative',
        alignItems:'center',
        borderColor:'#BEBAB3',
        borderRadius: 50,
        borderWidth:1,
        marginTop: 52,
        width: 40,
        height:40,
        marginLeft: 16,
        justifyContent:'center',
        zIndex: 1
    },
    header:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 0,
    },
    content:{
        marginTop: 32,
    },
    image:{
        width: 375,
        height: 257,
        marginTop: 20,
    },
    title:{
        position: 'absolute',
        width: 341,
        textAlign: 'center',
        color:'#3C3A36',
        fontSize: 24,
        fontWeight: 'bold',
        top: 56,
        lineHeight:32,
        left: 17,
        zIndex: -1
    },
    tag:{
        color:"#F2F2F2",
        fontWeight:"bold",
        fontSize:12
    },
    tagCircle:{
        position: 'absolute',
        top: 327,
        right: 16,
        width: 72,
        height:24,
        backgroundColor:"#65AAEA",
        borderRadius:12,
        alignItems:"center",
        justifyContent:"center",
    },
    contentTitle:{
            color:'#3C3A36',
            lineHeight: 32,
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 60,
            marginLeft: 16
    },
    description:{
        lineHeight: 21,
        fontSize: 14,
        marginLeft: 16,
        marginTop: 4,
    },
    contentTitle2:{
        color:'#3C3A36',
        lineHeight: 32,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 24,
        marginLeft: 16
    },
    description2:{
        lineHeight: 21,
        fontSize: 14,
        marginLeft: 16,
        marginTop: 4,
    },
    buttonCircle: {
        width: 343,
        height: 56,
        backgroundColor: '#82327E',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'relative',
        marginLeft: 33,
        margin: 53

      },


})

export default styles