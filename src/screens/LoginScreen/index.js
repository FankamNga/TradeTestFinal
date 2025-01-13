// import React, { useEffect, useState } from 'react';
// import { View, TextInput,  FlatList, ActivityIndicator, Button, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
// import login from './style';
// import LinearGradient from 'react-native-linear-gradient';
// import axios from 'axios';



// const LoginScreen = ({ navigation }) => {
  
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (username === 'user' && password === 'password') {
//       navigation.navigate('Dashboard');
//     } else {
//       Alert.alert('Erreur', 'Identifiants incorrects');
//     }
//   };

//   return (
   
     
//     <LinearGradient
//       colors={['#4c669f', '#3b5998', '#192f6a']} // Dégradé bleu
//       style={login.gradiant} // Style du dégradé
//     >
//       <Text style={login.title}>Welcome</Text>
//       <TextInput style={login.input} placeholder="Nom d'utilisateur" onChangeText={setUsername} />
//       <TextInput style={login.input} placeholder="Mot de passe" secureTextEntry onChangeText={setPassword} />
//       <TouchableOpacity activeOpacity={0.7} style={login.button} onPress={handleLogin} >
//         <Text>Se connecter</Text>
//       </TouchableOpacity>
//     </LinearGradient>

    
//   );
// };



// export default LoginScreen;


// const LoginScreen = ({ navigation }) => {
//   const [assets, setAssets] = useState([]); // Liste complète des assets
//   const [currentPage, setCurrentPage] = useState(1); // Page actuelle
//   const [loading, setLoading] = useState(false); // État de chargement
//   const [error, setError] = useState(null); // Gestion des erreurs

//   const ITEMS_PER_PAGE = 10; // Nombre d'éléments par page

//   // Fonction pour récupérer les données des assets
//   useEffect(() => {
//     const fetchAssets = async () => {
//       setLoading(true);
//       try {
        
//         const tradableAssets = [
//           'BTC-USD',  // Bitcoin
//           'ETH-USD',  // Ethereum
//           'AAPL',     // Apple
//           'GOOGL',    // Google
//           'MSFT',     // Microsoft
//           'AMZN',     // Amazon
//           'TSLA',     // Tesla
//           'META',     // Meta (Facebook)
//           'NVDA',     // NVIDIA
//           'JPM',      // JPMorgan Chase
//         ];
        
//         // Ajouter les prix pour chaque actif et filtrer ceux qui ont des prix valides
//        const assetsWithPrices = [];
//       for (var i=0;i<tradableAssets.length;i++) {
//         try {
//           const priceResponse = await axios.request({
//             method: 'GET',
//             url: 'https://data.alpaca.markets/v2/stocks/quotes/latest',
//             params: { symbols: tradableAssets[i] },
//             headers: {
//               accept: 'application/json',
//               'APCA-API-KEY-ID': 'PK4T27RA14BT1A61TBUJ',
//               'APCA-API-SECRET-KEY': '0oReWmyXDKaLTCzTzlN1ohfwXUeoMKcnnfONvomA',
//             },
//           });

//           const priceData = priceResponse.data[tradableAssets[i]];

//           // Vérifiez si un prix valide est disponible
//           if (priceData && priceData.ap ) {
//             assetsWithPrices.push({
//               ...tradableAssets,
//               price: priceData.ap, // Prix valide
//             });
//           }
//         } catch (err) {
//           console.error(`Erreur pour le symbole ${tradableAssets[i]} :`, err);
//         }

//         // Arrêtez après 10 actifs valides
//         if (assetsWithPrices.length === 10) break;
//       }
      
//         setAssets(assetsWithPrices); // Mettre à jour l'état avec 10 actifs valides
//         console.log('10 actifs tradables avec prix valides :', assetsWithPrices);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des actifs :', error);
//         setError('Impossible de récupérer les actifs.');
//       } finally {
//         setLoading(false);
//       }
//     };
    
  
//     fetchAssets();
//   }, []);
  
  
//   useEffect(() => {
//     if (assets.length > 0) {
//       setCurrentPage(1); // Assurez-vous que la première page est affichée
//     }
//   }, [assets]); // Dépendance sur "assets"

//   // Récupérer les données de la page actuelle
//   const currentData = assets.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );
//   // Fonction pour charger plus de pages
//   const loadMore = () => {
//     if (currentPage * ITEMS_PER_PAGE < assets.length) {
//       setCurrentPage(prevPage => prevPage + 1);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : assets.length === 0 ? (
//         <Text style={styles.errorText}>Aucune donnée disponible.</Text>
//       ) : (
//         <FlatList
//           data={currentData}
//           keyExtractor={(item) => item.symbol} // Utilise 'symbol' comme clé
//           renderItem={({ item }) => (
//               <View style={styles.assetItem}>
//                   <Text style={styles.assetName}>{item.name}</Text>
//                   <Text style={styles.assetSymbol}>Symbol: {item.symbol}</Text>
//                   <Text style={styles.assetPrice}>
//                       Price: {item.ap !== 'N/A' ? `${item.ap}` : 'Unavailable'}
//                   </Text>
//               </View>
//           )}
//           onEndReached={loadMore}
//           onEndReachedThreshold={0.5}
//           ListFooterComponent={
//               currentPage * ITEMS_PER_PAGE < assets.length && (
//                   <ActivityIndicator size="small" color="#0000ff" />
//               )
//           }
//         />

//       )}
//     </View>
//   );
  
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f5f5f5',
//   },
//   assetItem: {
//     backgroundColor: '#fff',
//     padding: 12,
//     marginVertical: 8,
//     borderRadius: 8,
//     elevation: 2,
//   },
//   assetName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   assetSymbol: {
//     fontSize: 14,
//     color: '#555',
//   },
//   assetExchange: {
//     fontSize: 14,
//     color: '#888',
//   },
//   assetStatus: {
//     fontSize: 14,
//     color: 'green',
//   },
//   errorText: {
//     color: 'red',
//     textAlign: 'center',
//   },
// });

// export default LoginScreen;
// import React, { useEffect, useState, useCallback } from 'react';
// import { View, FlatList, ActivityIndicator, StyleSheet, Text } from 'react-native';
// import axios from 'axios';

// const API_KEY = 'PK4T27RA14BT1A61TBUJ';
// const API_SECRET = '0oReWmyXDKaLTCzTzlN1ohfwXUeoMKcnnfONvomA';

// // Liste des symboles populaires que nous voulons certainement inclure
// const POPULAR_SYMBOLS = [
//   'AAPL',  // Apple
//   'GOOGL', // Google
//   'MSFT',  // Microsoft
//   'AMZN',  // Amazon
//   'META',  // Meta (Facebook)
//   'TSLA',  // Tesla
//   'NVDA',  // NVIDIA
//   'JPM',   // JPMorgan Chase
//   'BAC',   // Bank of America
//   'DIS',   // Disney
//   'NFLX',  // Netflix
//   'PYPL',  // PayPal
//   'INTC',  // Intel
//   'AMD',   // AMD
//   'KO',    // Coca-Cola
//   'PEP',   // PepsiCo
//   'WMT',   // Walmart
//   'T',     // AT&T
//   'VZ',    // Verizon
//   'XOM',   // ExxonMobil
// ];

// const TradingAssetsScreen = () => {
//   const [assets, setAssets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [mounted, setMounted] = useState(false);

//   const fetchBatchPrices = async (symbols) => {
//     try {
//       const response = await axios({
//         method: 'GET',
//         url: 'https://data.alpaca.markets/v2/stocks/quotes/latest',
//         params: { symbols: symbols.join(',') },
//         headers: {
//           'APCA-API-KEY-ID': API_KEY,
//           'APCA-API-SECRET-KEY': API_SECRET,
//         }
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching batch prices:', error);
//       return {};
//     }
//   };

//   const fetchAssets = useCallback(async () => {
//     if (!mounted) return;
//     setLoading(true);
//     setError(null);
    
//     try {
//       // 1. Récupérer les assets
//       const assetsResponse = await axios({
//         method: 'GET',
//         url: 'https://paper-api.alpaca.markets/v2/assets',
//         headers: {
//           'APCA-API-KEY-ID': API_KEY,
//           'APCA-API-SECRET-KEY': API_SECRET,
//         }
//       });

//       if (!mounted) return;

//       // 2. Filtrer d'abord les assets populaires
//       const allAssets = assetsResponse.data;
//       const popularAssets = allAssets.filter(asset => 
//         POPULAR_SYMBOLS.includes(asset.symbol) &&
//         asset.tradable &&
//         asset.status === 'active'
//       );

//       console.log('Popular assets found:', popularAssets.length);

//       // 3. Récupérer les prix pour les assets populaires
//       const pricesData = await fetchBatchPrices(popularAssets.map(asset => asset.symbol));

//       if (!mounted) return;

//       // 4. Combiner les assets avec leurs prix
//       const assetsWithPrices = popularAssets
//         .filter(asset => pricesData[asset.symbol] && pricesData[asset.symbol].ap)
//         .map(asset => ({
//           ...asset,
//           price: pricesData[asset.symbol].ap
//         }))
//         .sort((a, b) => b.price - a.price); // Trier par prix décroissant

//       console.log('Assets with prices:', assetsWithPrices.length);

//       setAssets(assetsWithPrices);
      
//       if (assetsWithPrices.length === 0) {
//         setError('Aucun asset disponible. Veuillez réessayer.');
//       }
//     } catch (error) {
//       if (mounted) {
//         console.error('Error fetching assets:', error);
//         setError('Échec du chargement. Veuillez réessayer.');
//       }
//     } finally {
//       if (mounted) {
//         setLoading(false);
//       }
//     }
//   }, [mounted]);

//   useEffect(() => {
//     setMounted(true);
//     fetchAssets();
//     return () => setMounted(false);
//   }, [fetchAssets]);

//   const renderItem = useCallback(({ item }) => (
//     <View style={styles.assetItem}>
//       <Text style={styles.assetName}>{item.name}</Text>
//       <Text style={styles.assetSymbol}>Symbol: {item.symbol}</Text>
//       <Text style={styles.assetPrice}>
//         Price: ${typeof item.price === 'number' ? item.price.toFixed(2) : 'N/A'}
//       </Text>
//       <Text style={styles.assetExchange}>Exchange: {item.exchange}</Text>
//     </View>
//   ), []);

//   if (loading) {
//     return (
//       <View style={styles.centered}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text style={styles.loadingText}>Chargement des actions populaires...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.centered}>
//         <Text style={styles.errorText}>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>Actions Populaires ({assets.length})</Text>
//       <FlatList
//         data={assets}
//         keyExtractor={(item) => item.symbol}
//         renderItem={renderItem}
//         refreshing={loading}
//         onRefresh={fetchAssets}
//         initialNumToRender={10}
//         maxToRenderPerBatch={10}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   headerText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     padding: 16,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   assetItem: {
//     backgroundColor: '#fff',
//     padding: 16,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius: 8,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   assetName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   assetSymbol: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 4,
//   },
//   assetPrice: {
//     fontSize: 14,
//     color: '#2e7d32',
//     fontWeight: '600',
//     marginBottom: 4,
//   },
//   assetExchange: {
//     fontSize: 12,
//     color: '#666',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 16,
//     textAlign: 'center',
//     margin: 16,
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#666',
//   },
// });

// export default TradingAssetsScreen;

// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
// import axios from 'axios';

// const popularAssets = ['AAPL', 'GOOGL', 'AMZN', 'MSFT', 'TSLA', 'META', 'NFLX', 'NVDA', 'AMD', 'INTC']; // Actifs populaires

// const PopularAssetsScreen = () => {
//   const [assets, setAssets] = useState([]); // État pour stocker les actifs avec leurs prix
//   const [loading, setLoading] = useState(true); // État pour gérer le chargement
//   const [error, setError] = useState(null); // État pour gérer les erreurs

//   useEffect(() => {
//     const fetchPopularAssets = async () => {
//       setLoading(true);
//       try {
//         // Récupérer les prix des actifs populaires
//         const response = await axios.request({
//           method: 'GET',
//           url: 'https://data.alpaca.markets/v2/stocks/quotes/latest',
//           params: { symbols: popularAssets.join(',') }, // Regrouper les symboles en une chaîne
//           headers: {
//             accept: 'application/json',
//             'APCA-API-KEY-ID': 'PK4T27RA14BT1A61TBUJ',
//             'APCA-API-SECRET-KEY': '0oReWmyXDKaLTCzTzlN1ohfwXUeoMKcnnfONvomA',
//           },
//         });
//         console.log('Réponse API brute :', response.data);

//         const prices = response.data;

//         // Mapper les actifs avec leurs prix
//         const assetsWithPrices = popularAssets.map((symbol) => ({
//           symbol,
//           price: prices['quotes'][symbol]?.ap || 'Unavailable', // Prix demandé ou 'Unavailable'
//         }));

//         setAssets(assetsWithPrices);
//       } catch (err) {
//         console.error('Erreur lors de la récupération des actifs populaires :', err);
//         setError('Impossible de récupérer les actifs populaires.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPopularAssets();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : error ? (
//         <Text style={styles.errorText}>{error}</Text>
//       ) : (
//         <FlatList
//           data={assets}
//           keyExtractor={(item) => item.symbol}
//           renderItem={({ item }) => (
//             <View style={styles.assetItem}>
//               <Text style={styles.assetSymbol}>Symbol: {item.symbol}</Text>
//               <Text style={styles.assetPrice}>
//                 Price: {item.price !== 'Unavailable' ? `$${item.price}` : 'Unavailable'}
//               </Text>
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f5f5f5',
//   },
//   assetItem: {
//     backgroundColor: '#fff',
//     padding: 12,
//     marginVertical: 8,
//     borderRadius: 8,
//     elevation: 2,
//   },
//   assetSymbol: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   assetPrice: {
//     fontSize: 14,
//     color: '#008000',
//   },
//   errorText: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 16,
//   },
// });

// export default PopularAssetsScreen;
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import WebSocket from 'isomorphic-ws'; // Installez avec `npm install isomorphic-ws`

const popularAssets = ['AAPL', 'GOOGL', 'AMZN', 'MSFT', 'TSLA', 'META', 'NFLX', 'NVDA', 'AMD', 'INTC'];

const PopularAssetsScreen = () => {
  const [assets, setAssets] = useState([]); // État pour stocker les actifs avec leurs prix
  const [loading, setLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs

  useEffect(() => {
    // Fonction pour récupérer les données initiales via l'API
    const fetchInitialPrices = async () => {
      setLoading(true);
      try {
        const response = await axios.request({
          method: 'GET',
          url: 'https://data.alpaca.markets/v2/stocks/quotes/latest',
          params: { symbols: popularAssets.join(',') }, // Regrouper les symboles en une chaîne
          headers: {
            accept: 'application/json',
            'APCA-API-KEY-ID': 'PK4T27RA14BT1A61TBUJ',
            'APCA-API-SECRET-KEY': '0oReWmyXDKaLTCzTzlN1ohfwXUeoMKcnnfONvomA',
          },
        });

        const prices = response.data;

        const initialAssets = popularAssets.map((symbol) => ({
          symbol,
          price: prices['quotes'][symbol]?.ap || 'Unavailable',
        }));

        setAssets(initialAssets);
      } catch (err) {
        console.error('Erreur lors de la récupération des prix initiaux :', err);
        setError('Impossible de récupérer les prix initiaux.');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialPrices();

    // Configuration du WebSocket pour les mises à jour en temps réel
    const ws = new WebSocket('wss://stream.data.alpaca.markets/v2/iex');

    ws.onopen = () => {
      console.log('WebSocket connecté');

      // Authentification
      ws.send(
        JSON.stringify({
          action: 'auth',
          key: 'PK4T27RA14BT1A61TBUJ',
          secret: '0oReWmyXDKaLTCzTzlN1ohfwXUeoMKcnnfONvomA',
        })
      );

      // Souscrire aux mises à jour des symboles populaires
      ws.send(
        JSON.stringify({
          action: 'subscribe',
          quotes: popularAssets,
        })
      );
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('Message WebSocket reçu :', message);

      if (message?.T === 'q') {
        // Mettre à jour l'état des actifs avec les nouveaux prix
        setAssets((prevAssets) =>
          prevAssets.map((asset) =>
            asset.symbol === message.S
              ? { ...asset, price: message.ap || 'Unavailable' }
              : asset
          )
        );
      }
    };

    ws.onclose = () => console.log('WebSocket déconnecté');
    ws.onerror = (error) => console.error('Erreur WebSocket :', error);

    // Nettoyage lors du démontage
    return () => ws.close();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={assets}
          keyExtractor={(item) => item.symbol}
          renderItem={({ item }) => (
            <View style={styles.assetItem}>
              <Text style={styles.assetSymbol}>Symbol: {item.symbol}</Text>
              <Text style={styles.assetPrice}>
                Price: {item.price !== 'Unavailable' ? `$${item.price}` : 'Unavailable'}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default PopularAssetsScreen;
