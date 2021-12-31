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
    about:{
        marginTop: 48,
        marginLeft: 70,
        color: '#3C3A36',
        fontWeight: 'bold',
        fontSize: 24
    },
    content:{
        marginTop: 158
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
    }
 


})

export default styles