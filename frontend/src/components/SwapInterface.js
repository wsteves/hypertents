import React, { useState } from 'react';
import '../App.css';
import EthPrice from './EthPrice';

function SwapInterface({ sourceChain, sourceToken, destinationChain, destinationToken }) {
  const [amount, setAmount] = useState(0);
  const [recipient, setRecipient] = useState('');

  const handleSwap = (swapInfoJson) => {
    console.log('Swap Information:', swapInfoJson);

    // Save the JSON data or pass it where you need it here
    const existingSwaps = JSON.parse(localStorage.getItem('swaps')) || [];
    existingSwaps.push(JSON.parse(swapInfoJson));
    localStorage.setItem('swaps', JSON.stringify(existingSwaps));

    // Reset the parameters
    setAmount(0);
    setRecipient('');
  };

  return (
    <div className="swap-interface">
      <h2>Swap Interface</h2>
      <div className="swap-section">
        <div className="swap-block">
          <h3>You Send</h3>
          <div>{sourceChain} - {sourceToken}</div>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="Amount" 
          />
        </div>
        <div className="swap-block">
          <h3>Receive</h3>
          <div>{destinationChain} - {destinationToken}</div>
          <EthPrice 
            sourceToken={sourceToken} 
            destinationToken={destinationToken} 
            amount={amount} 
          />
        </div>
      </div>
      <div className="recipient-section">
        <h3>Recipient</h3>
        <input 
          type="text" 
          value={recipient} 
          onChange={(e) => setRecipient(e.target.value)} 
          placeholder="Recipient Address" 
        />
        <button 
          className="submit-btn" 
          onClick={() => handleSwap(JSON.stringify({ sourceChain, sourceToken, destinationChain, destinationToken, amount, recipient }, null, 2))}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SwapInterface;
