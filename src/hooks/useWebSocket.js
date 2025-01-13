import { useEffect } from 'react';
import WebSocket from 'isomorphic-ws';

const useWebSocket = (popularAssets, updatePrices) => {
  useEffect(() => {
    const ws = new WebSocket('wss://stream.data.alpaca.markets/v2/iex');

    ws.onopen = () => {
      console.log('WebSocket connecté');

      ws.send(
        JSON.stringify({
          action: 'auth',
          key: 'PK4T27RA14BT1A61TBUJ',
          secret: '0oReWmyXDKaLTCzTzlN1ohfwXUeoMKcnnfONvomA',
        })
      );

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
        updatePrices(message.S, message.ap);
      }
    };

    ws.onclose = () => console.log('WebSocket déconnecté');
    //ws.onerror = (error) => console.error('Erreur WebSocket :', error);

    return () => ws.close();
  }, [popularAssets, updatePrices]);
};

export default useWebSocket;
