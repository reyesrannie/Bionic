import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

export default function CustomText(children) {
  return (
    <Text style={[styles.defaultStyle, props.style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  // ... add your default style here
  defaultStyle: {
    fontSize: 20,
    fontFamily: 'Roboto'
  },
});