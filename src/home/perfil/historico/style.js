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
        justifyContent:'center'
    },
    header:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 0,
    },
    historico:{
        marginTop: 48,
        marginLeft: 70,
        color: '#3C3A36',
        fontWeight: 'bold',
        fontSize: 24
    },
    listaHisto:{
        marginLeft: 16,
        marginTop: 16,
    }


})

export default styles