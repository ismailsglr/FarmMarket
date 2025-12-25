import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWallet } from '../contexts/WalletContext';
import { ShoppingCart, DollarSign, AlertCircle, CheckCircle, Wallet } from 'lucide-react';

const recipientAddress = '5BN556ekHrkkBxgmGd9BkQMR4HGPDN4e4NfmuJPPyKC2';

const animalTypes = ['Chicken', 'Duck', 'Cow'];

const animalIcons = {
  Chicken: '🐔',
  Duck: '🦆',
  Cow: '🐮',
};

const MarketplacePage = () => {
  const { connected, sendTransaction, publicKey } = useWallet();
  const [products, setProducts] = useState([]);
  const [purchases, setPurchases] = useState({});
  const [loading, setLoading] = useState(false);
  const [claiming, setClaiming] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');
  const [showModal, setShowModal] = useState(false);
  const [userCoins, setUserCoins] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);

  const fetchPurchases = async () => {
    if (!publicKey) return;
    try {
      await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          walletAddress: publicKey.toString(),
          publicKey: publicKey.toString()
        })
      });
      const userRes = await fetch(`/api/users/wallet/${publicKey.toString()}`);
      const userData = await userRes.json();
      setUserCoins(userData.coins || 0);
      const res = await fetch(`/api/orders/wallet/${publicKey.toString()}`);
      const orders = await res.json();
      const newPurchases = {};
      orders.forEach(order => {
        const type = order.products.name;
        const tier = order.products.tier || 1;
        const key = `${type}_${tier}`;
        newPurchases[key] = (newPurchases[key] || 0) + 1;
      });
      setPurchases(newPurchases);
    } catch (e) {
      console.error('Error fetching purchases:', e);
      setPurchases({});
    }
  };

  useEffect(() => {
    fetchPurchases();
  }, [publicKey]);

  const handlePurchase = async (animal) => {
    if (!connected || !publicKey) {
      setMessage('Wallet not connected!');
      setMessageType('error');
      setShowModal(true);
      return;
    }
    setLoading(true);
    setMessage('');
    try {
      const txSignature = await sendTransaction(recipientAddress, animal.price);
      console.log('Transaction successful, sending order to backend...');
      const orderResponse = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: { walletAddress: publicKey.toString(), publicKey: publicKey.toString() },
          productId: animal.id,
          transactionSignature: txSignature,
          amount: animal.price
        })
      });
      console.log('Order response status:', orderResponse.status);
      if (!orderResponse.ok) {
        console.error('Failed to create order:', orderResponse.statusText);
        throw new Error(`Failed to create order: ${orderResponse.statusText}`);
      }
      
      // UPDATE USER STATISTICS
      await fetch(`/api/users/wallet/${publicKey.toString()}/stats`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: animal.price })
      });

      await fetchPurchases();
      
      setMessage(`${animal.name} Tier ${animal.tier || 1} purchased!`);
      setMessageType('success');
      setShowModal(true);
    } catch (e) {
      setMessage('Purchase failed!');
      setMessageType('error');
      setShowModal(true);
    }
    setLoading(false);
  };

  const handleClaimRewards = async () => {
    if (!connected || !publicKey) {
      setMessage('Wallet not connected!');
      setMessageType('error');
      setShowModal(true);
      return;
    }
    setClaiming(true);
    try {
      const res = await fetch(`/api/users/wallet/${publicKey.toString()}/claim-rewards`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ walletAddress: publicKey.toString() }),
      });
      if (!res.ok) {
        throw new Error('Failed to claim rewards.');
      }
      const data = await res.json();
      setUserCoins(data.newCoinBalance);
      setMessage(`You earned ${data.claimedAmount} coins!`);
      setMessageType('success');
      setShowModal(true);
    } catch (e) {
      setMessage('An error occurred while claiming rewards.');
      setMessageType('error');
      setShowModal(true);
    } finally {
      setClaiming(false);
    }
  };

  const getTotal = (type) =>
    Object.entries(purchases)
      .filter(([key]) => key.startsWith(type + '_'))
      .reduce((sum, [, val]) => sum + val, 0);

  return (
    <div className="relative min-h-screen bg-[#0f172a] overflow-hidden">
      {/* Background Effects - Z-Index 0 */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Gradient Overlay - Top to Bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-cyan-900/5"></div>
        
        {/* Multiple Small Glow Points - More Natural Distribution */}
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-purple-500 rounded-full blur-[100px] opacity-[0.15]"></div>
        <div className="absolute top-[30%] right-[20%] w-[350px] h-[350px] bg-cyan-500 rounded-full blur-[90px] opacity-[0.12]"></div>
        <div className="absolute bottom-[20%] left-[25%] w-[380px] h-[380px] bg-purple-400 rounded-full blur-[95px] opacity-[0.1]"></div>
        <div className="absolute bottom-[15%] right-[15%] w-[320px] h-[320px] bg-cyan-400 rounded-full blur-[85px] opacity-[0.13]"></div>
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500 rounded-full blur-[80px] opacity-[0.08]"></div>
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-[20%] right-[10%] w-[250px] h-[250px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-[70px] opacity-[0.1]"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[10%] w-[280px] h-[280px] bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-[75px] opacity-[0.12]"
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5
          }}
        />
      </div>

      {/* Main Content - Z-Index 10 */}
      <div className="relative z-10 max-w-6xl mx-auto py-8 sm:py-12 px-2 sm:px-4 pt-24 sm:pt-32">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-10 text-center bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent drop-shadow-lg">Marketplace</h1>
      
      <div className="flex justify-center items-center gap-4 mb-8">
        <div className="text-xl font-bold text-primary-400 flex items-center gap-2">
          <DollarSign size={24} /> Coins: {userCoins}
        </div>
        <button
          onClick={handleClaimRewards}
          disabled={claiming}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {claiming ? 'Claiming...' : 'Claim Rewards'}
        </button>
      </div>

      <div className="flex flex-col gap-8 sm:gap-12">
        {animalTypes.map((type) => (
          <div key={type}>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-primary-400 flex items-center justify-center gap-2">
              <span className="text-2xl sm:text-3xl">{animalIcons[type]}</span> {type}s 
              <span className="text-xl sm:text-2xl text-secondary-400">({getTotal(type)})</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center">
              {products.filter((a) => a.name === type).map((animal) => {
                const key = `${animal.name}_${animal.tier || 1}`;
                return (
                  <div
                    key={key}
                    className="group relative bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/30 w-full sm:w-[200px] md:w-[220px] lg:w-[240px] flex flex-col items-center justify-between min-h-[280px]"
                  >
                    {/* Icon and Tier */}
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="text-4xl sm:text-5xl mb-2">{animalIcons[animal.name]}</div>
                      <div className="text-lg sm:text-xl font-bold text-cyan-400 mb-1">
                        Tier {animal.tier || 1}
                      </div>
                      <div className="text-sm text-gray-300 font-semibold">
                        {animal.name}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="w-full mb-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-400 mb-1">Price</div>
                        <div className="text-lg font-bold text-cyan-300">
                          {animal.price} SOL
                        </div>
                      </div>
                    </div>

                    {/* Owned and Reward */}
                    <div className="w-full mb-4 space-y-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-400">Owned</div>
                        <div className="text-sm font-semibold text-white">
                          {purchases[key] || 0} pcs
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-400">Reward</div>
                        <div className="text-sm font-bold text-green-400">
                          {animal.reward || 0} coins/hour
                        </div>
                      </div>
                    </div>

                    {/* Buy Button */}
                    <button
                      className="w-full bg-gradient-to-r from-cyan-500/80 to-blue-500/80 hover:from-cyan-500 hover:to-blue-500 text-white px-4 py-3 rounded-xl font-semibold text-sm shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-cyan-400/30"
                      onClick={() => handlePurchase(animal)}
                      disabled={loading}
                    >
                      {loading ? 'Processing...' : 'Buy'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
          <div className={`rounded-2xl p-6 sm:p-8 shadow-2xl w-full max-w-[400px] text-center ${messageType === 'success' ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white' : 'bg-red-700/95 text-white'}`}>
            <div className="text-xl sm:text-2xl font-bold mb-4">
              {messageType === 'success' ? 'Success!' : 'Error!'}
            </div>
            <div className="text-base sm:text-lg mb-6">{message}</div>
            <button
              className="mt-2 px-6 py-2 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-200 transition w-full sm:w-auto"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default MarketplacePage;