import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    loginContainer:{
        position: 'relative',
        alignSelf:"center",
        alignItems:'center',
        top: 258,
    },
    loginText:{
        color: '#3C3A36',
        fontSize: 32,
        alignSelf:"center",
        paddingBottom: 16
    },
    input:{
        width: 343,
        height: 53,
        borderRadius: 12,
        borderColor: '#BEBAB3',
        borderWidth: 1,
        height: 40,
        margin: 12,
        padding: 8,
    },
    passwordText:{
        color: '#78746D',
        alignSelf: 'center',
        paddingTop: 16,
        fontSize: 14
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
        bottom: -16
      },
  })


export default styles