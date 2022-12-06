import { 
  Dimensions,
  StyleSheet,
  Text, 
  View, 
  SafeAreaView, 
  StatusBar, 
  Alert, 
  Platform,
  ImageBackground,
  Image
} from 'react-native';
import CustomText from './styles/customText';

import styles from './styles/styles';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source={require('./assets/background.jpg')} style={styles.image} >
    
      <View style={styles.viewFormat}>
     <Image source={require('./assets/logo-red.png')} style={styles.image1} resizeMode='contain'/>
     </View>
    <CustomText style={styles.textDec}>Sell What You Don't Need</CustomText>
    <View></View>
    </ImageBackground>
    </SafeAreaView>
  );
}

