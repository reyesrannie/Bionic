import { StyleSheet, StatusBar } from 'react-native';


export default StyleSheet.create({
    container: {
      alignItems: 'center',
        flex: 1,
       paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0
      },
      viewFormat: {
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
    
      image1: {
        margin: 0,
        flex: 1,
      },
textDec: {
  alignSelf: 'center',
}
    });

  