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
    perfil:{
        marginTop: 48,
        marginLeft: 105,
        color: '#3C3A36',
        fontWeight: 'bold',
        fontSize: 24
    },
    content:{
        marginTop: 32,
    },
    image:{
        marginLeft:101.5
    },
    optionsWraper:{
        width: 343,
        height:82,
        marginTop: 16,
        marginLeft: 16,
        borderColor: '#BEBAB3',
        borderWidth: 1,
        borderRadius: 16,
    },
    title:{
        alignSelf:'center',
        color:'#3C3A36',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 24,
        lineHeight:32,
    }


})

export default styles