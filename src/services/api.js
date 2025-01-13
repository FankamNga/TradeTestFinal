import axios from 'axios';

const API_KEY_ID = 'PK4T27RA14BT1A61TBUJ';
const API_SECRET_KEY = '0oReWmyXDKaLTCzTzlN1ohfwXUeoMKcnnfONvomA';

export const fetchInitialPrices = async (symbols) => {
  try {
    const response = await axios.request({
      method: 'GET',
      url: 'https://data.alpaca.markets/v2/stocks/quotes/latest',
      params: { symbols: symbols.join(',') },
      headers: {
        accept: 'application/json',
        'APCA-API-KEY-ID': API_KEY_ID,
        'APCA-API-SECRET-KEY': API_SECRET_KEY,
      },
    });

    return response.data;
  } catch (err) {
    console.error('Erreur lors de la récupération des prix initiaux :', err);
    throw err;
  }
};
