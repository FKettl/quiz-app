import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      padding: 10,
      justifyContent: 'center',
    },
    titleStyle: {
      padding: 10,
      textAlign: 'center',
      fontSize: 18,
      color: '#3C3A36',
      fontWeight: 'bold',
    },
    paragraphStyle: {
      padding: 20,
      textAlign: 'center',
      fontSize: 16,
    },
    introImageStyle: {
      width: 293,
      height: 206,
    },
    introTextStyle: {
      fontSize: 14,
      color: '#000',
      textAlign: 'center',
      paddingVertical: 10,
    },
    introTitleStyle: {
      fontSize: 24,
      color: '#000',
      textAlign: 'center',
      marginBottom: 8,
      marginTop: 16,
      fontWeight: 'bold',
    },
    buttonCircle: {
      width: 311,
      height: 56,
      backgroundColor: '#82327E',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: 15,
    },
    buttonText: {
      fontSize: 14,
      color: '#fff',
      textAlign: 'center',
      paddingVertical: 10,
    },
    skipButtonCircle: {
      width: 40,
      height: 40,
      backgroundColor: '#fff',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 700,
      left: 300,
      zIndex : 1
    },
    skipButtonText: {
      fontSize: 16,
      color: '#78746D',
      textAlign: 'center',
      paddingVertical: 10,
    },
  })


export default styles