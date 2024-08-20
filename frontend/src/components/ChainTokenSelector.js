import React, { useState } from 'react';
import '../App.css'; // Ensure your CSS styles are updated for dropdowns

function ChainTokenSelector({ onChange }) {
  const [selectedSourceChain, setSelectedSourceChain] = useState('');
  const [selectedSourceToken, setSelectedSourceToken] = useState('');
  const [selectedDestinationChain, setSelectedDestinationChain] = useState('');
  const [selectedDestinationToken, setSelectedDestinationToken] = useState('');

  const handleSourceChange = (event) => {
    const value = event.target.value;
    if (value) {
      const [chain, token] = value.split(',');
      setSelectedSourceChain(chain);
      setSelectedSourceToken(token);
      onChange(chain, token, true);
    } else {
      setSelectedSourceChain('');
      setSelectedSourceToken('');
      onChange('', '', true);
    }
  };

  const handleDestinationChange = (event) => {
    const value = event.target.value;
    if (value) {
      const [chain, token] = value.split(',');
      setSelectedDestinationChain(chain);
      setSelectedDestinationToken(token);
      onChange(chain, token, false);
    } else {
      setSelectedDestinationChain('');
      setSelectedDestinationToken('');
      onChange('', '', false);
    }
  };

  return (
    <div className="chain-token-selector">
      <div className="selection-block">
        <h3>Source Chain & Token</h3>
        <select value={`${selectedSourceChain},${selectedSourceToken}`} onChange={handleSourceChange}>
          <option value="">Select Source</option>
          <option value="Ethereum,ETH">Ethereum - ETH</option>
          <option value="Binance,BNB">Binance - BNB</option>
          {/* Add more options as necessary */}
        </select>
      </div>
      <div className="selection-block">
        <h3>Destination Chain & Token</h3>
        <select value={`${selectedDestinationChain},${selectedDestinationToken}`} onChange={handleDestinationChange}>
          <option value="">Select Destination</option>
          <option value="Ethereum,ETH">Ethereum - ETH</option>
          <option value="Binance,BNB">Binance - BNB</option>
          {/* Add more options as necessary */}
        </select>
      </div>
    </div>
  );
}

export default ChainTokenSelector;
