import { StyleSheet } from 'react-native';
import colors from './colors';


export default StyleSheet.create({
      //Welcome Screen
      background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      logo: {
        width: 100,
        height: 100,    
      },
      logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 70,
      },
      loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
      },
      registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary
      }, 
      //ViewScreen
      container: {
        backgroundColor: colors.black,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30
      },
      deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30
      },
      imageContainer: {
        width: "100%",
        height: "85%",
      },
      image: {
        width: "100%",
        height: "100%",
      }
    });

  