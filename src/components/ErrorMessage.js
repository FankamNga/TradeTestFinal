import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ message }) => {
  return <Text style={styles.errorText}>{message}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ErrorMessage;
