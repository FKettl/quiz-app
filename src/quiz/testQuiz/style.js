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
        width: 343,
        height: 191,
        borderRadius: 8,
    },
    optionsWraper:{
        width: 343,
        height: 58,
        marginTop: 16,
        marginLeft: 16,
        borderColor: '#BEBAB3',
        borderWidth: 1,
        borderRadius: 16,

    },
    pageNumber:{
        marginTop: 47,
        marginLeft: 168.5,
        color: '#78746D',
        lineHeight: 26,
        fontSize: 16,
        fontWeight: '400'
    },
    title:{
        marginTop: 8,
        width: 343,
        lineHeight: 32,
        fontSize: 24,
        textAlign: 'center',
        marginLeft: 16
    },
    card:{
        width:346,
        height: 194,
        flexDirection:"column",
        justifyContent:"space-evenly",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#BEBAB3',
        marginLeft: 16,
        marginTop: 16        
    },
    options:{

    }


})

export default styles