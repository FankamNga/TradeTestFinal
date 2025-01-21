Popular Assets Application

This project is a React Native application that retrieves and displays the latest prices for popular financial assets, such as stocks and cryptocurrencies, using Alpaca's API. The application also integrates WebSocket functionality for real-time price updates.
the demo is in the VideoTest folder
Features

Initial Data Fetching: Retrieves the latest prices for 10 popular financial assets from Alpaca's API.

Real-Time Updates: Utilizes WebSocket to receive live price updates and display them in the application.

Error Handling: Displays error messages if data fetching fails.

Modular Codebase: Components, hooks, and services are organized for easy maintenance and reusability.

Setup Instructions
Prerequisites

React Native Environment: Follow the React Native CLI setup guide for your platform.

Alpaca Account: Obtain your API keys from Alpaca.
Installation
Clone the repository:
git clone git@github.com:FankamNga/TradeTestFinal.git
cd <repository-folder>

Install Dependencies

npm install

File Structure

src/
├── components/
│   ├── AssetItem.js          # Component to display individual assets
│   └── ErrorMessage.js       # Component to display error messages
├── hooks/
│   └── useWebSocket.js       # Custom hook to manage WebSocket connection
├── services/
│   └── api.js                # API service to fetch initial prices
└── screens/
    └── Dashboard # Main screen for the application
      |__indexjs
    |__ Login
      |__ indexjs
How to Run

Start the Metro bundler:

npx react-native start

Run the application on an emulator or a connected device:

Android:

npx react-native run-android

iOS:

npx react-native run-ios

Usage

The app fetches the initial prices of the 10 predefined assets (e.g., AAPL, GOOGL, etc.) from Alpaca's API.

Real-time updates for these assets are received through a WebSocket connection.

Prices are displayed in a list format, with each row showing the asset's symbol and its current price.

Dependencies

React Native: For building the mobile application.

Axios: For making HTTP requests to Alpaca's API.

isomorphic-ws: For WebSocket support.

Author

Developed by FANKAM NGALEUGNI.

