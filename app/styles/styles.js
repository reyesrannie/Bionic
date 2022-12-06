import { StyleSheet, StatusBar } from 'react-native';


export default StyleSheet.create({
    container: {
      alignItems: 'center',
        flex: 1,
       paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0
      },
      logoContainer: {
        marginTop: "10%",
        alignSelf: 'center',
        width: "25%",
        height: "15%",
        alignItems: 'center',
       
      },
      image: {
        width: "100%",
        height: "100%"
      },
    
      logo: {
        margin: 0,
        flex: 1,
      },
textDec: {
  alignSelf: 'center',
},

bottomContainer: {
  flex: 1,
  justifyContent: 'flex-end',
},
signUpContainer: {
  backgroundColor: '#ed5f55',
  width: '100%',
  height: '10%'
},
logInContainer: {
  backgroundColor: '#558aed',
  width: '100%',
  height: '10%'
},
    });

  