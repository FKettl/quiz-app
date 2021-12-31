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
    titleHeader:{
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
    contentTitle:{
            color:'#3C3A36',
            lineHeight: 32,
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 232,
            marginLeft: 16,
            width: 341,
            textAlign: 'center',
            lineHeight: 58.8,
            fontSize: 56
    },
    description:{
        lineHeight: 21,
        fontSize: 14,
        marginLeft: 16,
        marginTop: 8,
        textAlign: 'center',
        color: '#78746D',
        width: 341,
    },
    title:{
        color:'#3C3A36',
        lineHeight: 32,
        fontSize: 26,
        width: 341,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 16
    },
    buttonCircle: {
        width: 309,
        height: 56,
        backgroundColor: '#82327E',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 33,
        marginTop: 218
      },


})

export default styles