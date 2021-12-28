import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    home:{
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
        justifyContent:'center'
    },
    header:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 0,
    },
    config:{
        marginTop: 48,
        marginLeft: 65,
        color: '#3C3A36',
        fontWeight: 'bold',
        fontSize: 24
    },
    content:{
        marginLeft: 16,
        marginTop: 28,
    },
    info:{
        color:'#3C3A36',
        fontSize: 20,
        fontWeight: 'bold',
    },
    optionsWraper:{
        width: 343,
        height:82,
        marginTop: 16,
        borderColor: '#BEBAB3',
        borderWidth: 1,
        borderRadius: 16,
    },
    title:{
        position:'absolute',
        left: 60,
        color:'#3C3A36',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 17.16,
        lineHeight:26,
    },
    title2:{
        position:'absolute',
        left: 60,
        color:'#3C3A36',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 28,
        lineHeight:26,
    },
    subtitle:{
        position:'absolute',
        left: 60,
        color:'#78746D',
        fontSize: 14,
        marginTop: 43.16,
        lineHeight:21,
    },
    iconCircle:{
        position:'absolute',
        marginLeft: 16,
        marginTop: 25,
        width: 32,
        height: 32,
        borderRadius: 48,
        backgroundColor: '#65AAEA',
    },
    userIcon:{
        position:'absolute',
        color:'white',
        marginLeft: 11,
        marginTop: 8,
    },
    mail:{
        position:'absolute',
        color:'white',
        marginLeft: 8.5,
        marginTop: 8,
    },
    lock:{
        position:'absolute',
        color:'white',
        marginLeft: 11,
        marginTop: 8,
    },
    chevron:{
        color: '#BEBAB3',
        position:'absolute',
        right: 24,
        top: 33,
    },

})

export default styles