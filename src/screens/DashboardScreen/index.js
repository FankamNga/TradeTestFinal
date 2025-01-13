import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadAssets } from '../../redux/slices/assetsSlice';
import { addTrade } from '../../redux/slices/tradesSlice';

import { NewTimeframe } from "@alpacahq/alpaca-trade-api/dist/resources/datav2/entityv2";

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets.list);
  const balance = useSelector((state) => state.trades.balance);

  useEffect(() => {
    dispatch(loadAssets());
  }, [dispatch]);

  const handleBuy = (symbol, price) => {
    const qty = 1; // Acheter 1 unité
    dispatch(addTrade({ symbol, price, qty, type: 'buy' }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actifs Tradables</Text>
      <Text style={styles.balance}>Solde : ${balance.toFixed(2)}</Text>
      <FlatList
        data={assets}
        keyExtractor={(item) => item.symbol}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.symbol}>{item.symbol}</Text>
            <Text>${item.price || 'N/A'}</Text>
            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => handleBuy(item.symbol, item.price)}
            >
              <Text style={styles.buyText}>Acheter</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  balance: { fontSize: 18, marginBottom: 20, color: 'green' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  symbol: { fontSize: 16 },
  buyButton: { backgroundColor: '#3498db', padding: 8, borderRadius: 5 },
  buyText: { color: '#fff', fontWeight: 'bold' },
});

export default DashboardScreen;


