import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    home:{
        width:'100%',
        height: '100%',
        justifyContent: 'center',
        marginLeft: 7,
    },
    filters:{
        marginTop: 12,
        width:"auto",
        height: 24,
        flexDirection:"row",
        justifyContent:"flex-start",
        marginLeft: 8
    },
    buttonQuery:{
        width: 'auto',
        height: 24,
        backgroundColor:"#65AAEA",
        borderRadius:12,
        alignItems:"center",
        justifyContent:"center",
        marginLeft: 8
    },
    textButtonQuery:{
        color:"#F2F2F2",
        fontWeight:"normal",
        fontSize:12,
        paddingVertical: 3,
        paddingHorizontal: 11
    },
    hello:{
        marginTop: 52,
        marginLeft: 16,
        color: '#3C3A36',
        fontSize: 16
    },
    name:{
        marginTop: 4,
        marginLeft: 16,
        color: '#333333',
        fontSize: 32,
        fontWeight: 'bold',
    },
    pesquisa:{
        paddingLeft: 16,
        marginTop: 12,
        marginLeft: 16,
        width: 343,
        height: 56,
        borderColor: '#BEBAB3',
        borderWidth: 1,
        borderRadius: 12,
        alignItems:'center'
    },
    icon:{
        position:'absolute',
        top: 150,
        left: 325,
        zIndex: -1
    },
    listaQuiz:{
        marginTop: 10,
        marginLeft: 16,
        width: 345,
    }

})

export default styles