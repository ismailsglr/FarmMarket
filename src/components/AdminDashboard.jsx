import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ShoppingCart, User } from 'lucide-react';

const AdminDashboard = () => {
    const [orders, setOrders] = useState([]);
    const [topBuyers, setTopBuyers] = useState([]);
    const [stats, setStats] = useState({ totalRevenue: 0, totalOrders: 0 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch all orders
                const ordersRes = await fetch('/api/orders');
                if (!ordersRes.ok) throw new Error('Failed to fetch orders.');
                const ordersData = await ordersRes.json();
                setOrders(ordersData);

                // Calculate statistics
                let totalRevenue = 0;
                let totalOrders = ordersData.length;
                ordersData.forEach(order => {
                    totalRevenue += order.transaction_amount;
                });
                setStats({ totalRevenue, totalOrders });

                // Fetch top buyers
                const topBuyersRes = await fetch('/api/users/stats/top-buyers');
                if (!topBuyersRes.ok) throw new Error('Failed to fetch top buyers.');
                const topBuyersData = await topBuyersRes.json();
                setTopBuyers(topBuyersData);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="relative min-h-screen bg-[#0f172a] flex items-center justify-center">
                <div className="text-center text-gray-300">
                    <div className="text-xl font-semibold">Loading...</div>
                </div>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="relative min-h-screen bg-[#0f172a] flex items-center justify-center">
                <div className="text-center text-red-500">
                    <div className="text-xl font-semibold">Error: {error}</div>
                </div>
            </div>
        );
    }

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
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-cyan-900/5"></div>
                
                {/* Multiple Small Glow Points */}
                <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-purple-500 rounded-full blur-[100px] opacity-[0.15]"></div>
                <div className="absolute top-[30%] right-[20%] w-[350px] h-[350px] bg-cyan-500 rounded-full blur-[90px] opacity-[0.12]"></div>
                <div className="absolute bottom-[20%] left-[25%] w-[380px] h-[380px] bg-purple-400 rounded-full blur-[95px] opacity-[0.1]"></div>
                <div className="absolute bottom-[15%] right-[15%] w-[320px] h-[320px] bg-cyan-400 rounded-full blur-[85px] opacity-[0.13]"></div>
                
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
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 p-8 md:p-12 pt-28 md:pt-32 max-w-7xl mx-auto"
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Admin Dashboard</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:border-cyan-500/30 transition-all duration-300"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-gray-200">Total Revenue</h2>
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-green-500/30">
                                <DollarSign size={24} className="text-green-400" />
                            </div>
                        </div>
                        <p className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                            ${stats.totalRevenue.toFixed(2)}
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:border-blue-500/30 transition-all duration-300"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-gray-200">Total Orders</h2>
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                                <ShoppingCart size={24} className="text-blue-400" />
                            </div>
                        </div>
                        <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {stats.totalOrders}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:border-purple-500/30 transition-all duration-300"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-gray-200">Top Buyers</h2>
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                                <User size={24} className="text-purple-400" />
                            </div>
                        </div>
                        <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {topBuyers.length > 0 ? topBuyers[0].wallet_address.substring(0, 4) + '...' : 'None'}
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">All Orders</h2>
                    <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl overflow-x-auto">
                        <table className="min-w-full text-left">
                            <thead className="border-b border-white/10">
                                <tr>
                                    <th className="p-4 font-semibold text-sm tracking-wide text-gray-300">ID</th>
                                    <th className="p-4 font-semibold text-sm tracking-wide text-gray-300">User</th>
                                    <th className="p-4 font-semibold text-sm tracking-wide text-gray-300">Product</th>
                                    <th className="p-4 font-semibold text-sm tracking-wide text-gray-300">Price (SOL)</th>
                                    <th className="p-4 font-semibold text-sm tracking-wide text-gray-300">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <motion.tr
                                        key={order.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                                        className="border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors duration-200"
                                    >
                                        <td className="p-4 text-sm text-gray-300 font-mono">{order.id.substring(0, 8)}...</td>
                                        <td className="p-4 text-sm text-gray-300 font-mono">{order.user_wallet_address.substring(0, 6)}...</td>
                                        <td className="p-4 text-sm text-gray-200">{order.products.name} <span className="text-cyan-400">(T{order.products.tier})</span></td>
                                        <td className="p-4 text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{order.transaction_amount}</td>
                                        <td className="p-4 text-sm text-gray-400">{new Date(order.created_at).toLocaleDateString()}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AdminDashboard;