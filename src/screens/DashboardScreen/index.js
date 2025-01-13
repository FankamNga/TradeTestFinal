import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet,Text } from 'react-native';
import AssetItem from '../../components/assetItem';
import ErrorMessage from '../../components/ErrorMessage';
import { fetchInitialPrices } from '../../services/api';
import useWebSocket from '../../hooks/useWebSocket';
import dashboard from './style';



const popularAssets = ['AAPL', 'GOOGL', 'MSFT', 'TSLA', 'NFLX', 'NVDA', 'AMD', 'INTC'];

const DashboardScreen = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      try {
        const prices = await fetchInitialPrices(popularAssets);
        const initialAssets = popularAssets.map((symbol) => ({
          symbol,
          price: prices['quotes'][symbol]?.ap || 'Unavailable',
        }));
        setAssets(initialAssets);
      } catch (err) {
        setError('Impossible de récupérer les prix initiaux.');
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  // Mise à jour des prix en temps réel via WebSocket
  useWebSocket(popularAssets, (symbol, price) => {
    setAssets((prevAssets) =>
      prevAssets.map((asset) =>
        asset.symbol === symbol ? { ...asset, price: price || 'Unavailable' } : asset
      )
    );
  });

  return (
    <View style={dashboard.container}>
      <Text style={dashboard.header}>List of Assets</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <FlatList style={dashboard.flat}
          data={assets}
          
          keyExtractor={(item) => item.symbol}
          renderItem={({ item }) => (<View style={dashboard.flat}> <AssetItem symbol={item.symbol} price={item.price} /></View>)}
        />
      )}
      <Text style={dashboard.trade}>Buy or Sell an asset</Text>
    </View>
  );
};



export default DashboardScreen;
