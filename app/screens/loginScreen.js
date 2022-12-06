import { 
    View, 
    SafeAreaView, 
    ImageBackground,
    Image
  } from 'react-native';
  import CustomText from '../styles/customText';
  
  import styles from '../styles/styles';
  
  
  export default function LoginScreen() {
    return (
      <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/background.jpg')} style={styles.image} >
        <View style={styles.logoContainer}>
       <Image source={require('../assets/logo-red.png')} style={styles.logo} resizeMode='contain'/>
       </View>
      <CustomText style={styles.textDec}>Sell What You Don't Need</CustomText>
      <View style={styles.bottomContainer}>
      <View style={styles.signUpContainer}></View>
      <View style={styles.logInContainer}></View>
      </View>
      </ImageBackground>
      </SafeAreaView>
    );
  }
  