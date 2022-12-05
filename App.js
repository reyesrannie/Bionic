import { 
  Dimensions,
  StyleSheet,
  Text, 
  View, 
  SafeAreaView, 
  StatusBar, 
  Alert, 
  Platform
} from 'react-native';

export default function App() {
  console.log(Dimensions.get('screen'));
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.viewFormat}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
   paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0
  },
  viewFormat: {
    backgroundColor: 'dodgerblue',
    width: "50%",
    height: 70
  }
});
