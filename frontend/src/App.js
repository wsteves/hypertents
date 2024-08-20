import React, { useState } from 'react';
import './App.css';
import ChainTokenSelector from './components/ChainTokenSelector';
import SwapInterface from './components/SwapInterface';
import OrderList from './components/OrderList';

function App() {
  const [sourceChain, setSourceChain] = useState('');
  const [sourceToken, setSourceToken] = useState('');
  const [destinationChain, setDestinationChain] = useState('');
  const [destinationToken, setDestinationToken] = useState('');
  const [amount, setAmount] = useState('');
  const [activeTab, setActiveTab] = useState('swap'); // State to handle active tab

  const handleChainTokenChange = (chain, token, isSource) => {
    if (isSource) {
      setSourceChain(chain);
      setSourceToken(token);
    } else {
      setDestinationChain(chain);
      setDestinationToken(token);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="app">
      <header className="page-header">
        <div className="logo">
          <img src="https://via.placeholder.com/150" alt="Placeholder Logo" />
        </div>
        <h1>Chain Intents</h1>
      </header>

      {/* Tab header */}
      <div className="tab-header">
        <button
          className={`tab-button ${activeTab === 'swap' ? 'active' : ''}`}
          onClick={() => setActiveTab('swap')}
        >
          Swap
        </button>
        <button
          className={`tab-button ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          Order List
        </button>
      </div>

      {/* Tab content */}
      {activeTab === 'swap' && (
        <div className="top-container">
          <div className="chain-token-selector">
            <ChainTokenSelector onChange={handleChainTokenChange} />
          </div>
          <div className="swap-interface">
            <SwapInterface
              sourceChain={sourceChain}
              sourceToken={sourceToken}
              destinationChain={destinationChain}
              destinationToken={destinationToken}
              amount={amount}
              onAmountChange={handleAmountChange}
            />
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        // <div className="order-list">
          <OrderList />
        // </div>
      )}
    </div>
  );
}

export default App;
