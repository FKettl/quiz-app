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
        marginTop: 60,
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
    pesquisa:{
        paddingLeft: 16,
        marginTop: 60,
        marginLeft: 16,
        width: 287,
        height: 56,
        borderColor: '#BEBAB3',
        borderWidth: 1,
        borderRadius: 12,
        alignItems:'center',
        zIndex: -1
    },
    content:{
        marginTop: 76
    },
    image:{
        marginLeft: 122.5
    },
    title:{
        textAlign:'center',
        color: '#3C3A36',
        lineHeight: 46,
        fontSize: 40,
        marginTop: 16,
        width: 341,
        marginLeft: 16,
    },
    description:{
        color: '#78746D',
        lineHeight: 21,
        fontSize: 14,
        textAlign: 'center',
        marginTop: 40,
        marginRight: 18
    },
    listaQuiz:{
        marginTop: 10,
        marginLeft: 16,
        width: 345,
    },
    searchButton:{
        position: 'absolute',
        top: 80, 
        left: 330,
        zIndex: 1
    },
    result:{
        position:'absolute',
        top: 128,
        left: 16,
        lineHeight: 32,
        fontSize: 24
    },
    pesquisaTitle:{
        position:'absolute',
        top: 365,
        width: 341,
        left: 16,
        textAlign: 'center',
        color: '#3C3A36',
        lineHeight: 32,
        fontSize: 24,
        fontWeight: 'bold',

    },
    pesquisaSubTitle:{
        position:'absolute',
        top: 410,
        width: 341,
        left: 16,
        height: 42,
        textAlign: 'center',
        color: '#78746D',
        lineHeight: 21,
        fontSize: 14,  
    },
    notFoundImage:{
        alignSelf: 'center',
        marginTop: 25,
    },
    notFoundTitle:{
        marginTop: 32,
        width: 341,
        textAlign: 'center', 
        marginLeft: 17,
        fontWeight: '500',
        lineHeight: 32,
        fontSize: 24,
    },
    notFoundText:{
        marginTop: 8,
        color: '#78746D',
        width: 341,
        textAlign: 'center', 
        marginLeft: 17,
        fontWeight: '500',
        lineHeight: 21,
        fontSize: 14,
    }
 


})

export default styles