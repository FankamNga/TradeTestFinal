import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AssetItem = ({ symbol, price }) => {
  return (
    <View style={styles.assetItem}>
      <Text style={styles.assetSymbol}>Symbol: {symbol}</Text>
      <Text style={styles.assetPrice}>
        Price: {price !== 'Unavailable' ? `$${price}` : 'Unavailable'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  assetItem: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  assetSymbol: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  assetPrice: {
    fontSize: 14,
    color: '#008000',
  },
});

export default AssetItem;
