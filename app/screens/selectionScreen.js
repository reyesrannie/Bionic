import React from 'react';
import { Image, View } from 'react-native';
import styles from '../styles/styles';

function ViewImage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <View style={styles.imageContainer}>
    <Image  source={require('../assets/chair.jpg')} style={styles.image} />
    </View>
    </View>
  );
}

export default ViewImage;