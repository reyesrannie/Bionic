import React from 'react';
import {ImageBackground, View, Image, SafeAreaView, Text} from 'react-native';
import CustomText from '../styles/customText';
import styles from '../styles/styles';

function LoginScreen(props) {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background} >
      <View style={styles.logoContainer}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
      <CustomText>Sell What You Don't Need</CustomText>
      </View>
      <View style={styles.loginButton}></View> 
      <View style={styles.registerButton}></View> 
    </ImageBackground>
  );
}

export default LoginScreen;
