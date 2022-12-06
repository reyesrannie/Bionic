import { 
    View, 
    SafeAreaView, 
    ImageBackground,
    Image
  } from 'react-native';
  import CustomText from './styles/customText';
  
  import styles from './styles/styles';
  
  
  export default function SelectionScreen() {
    return (
      <SafeAreaView style={styles.container}>
     <View style={styles.logInContainer}></View>
      </SafeAreaView>
    );
  }
  