import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ShoppingCart, Zap, Users, TrendingUp, Wallet, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = ({ setActiveSection }) => {
  const navigate = useNavigate();
  
  const goToMarketplace = () => {
    navigate('/marketplace');
  };

  return (
    <div className="w-full bg-dark-900">
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 premium-hero-bg">
        {/* Premium Background Effects */}
        <div className="absolute inset-0">
          {/* Premium Grid */}
          <div className="premium-grid"></div>
          
          {/* Premium Energy Orbs */}
          <div className="premium-energy-orb"></div>
          <div className="premium-energy-orb"></div>
          <div className="premium-energy-orb"></div>
          
          {/* Premium Floating Particles */}
          <div className="premium-particle"></div>
          <div className="premium-particle"></div>
          <div className="premium-particle"></div>
          <div className="premium-particle"></div>
          <div className="premium-particle"></div>
          <div className="premium-particle"></div>
          <div className="premium-particle"></div>
          <div className="premium-particle"></div>
          
          {/* Enhanced Farm Elements with Glow */}
          <div className="farm-tractor-glow" style={{ top: '60%', left: '-100px' }}></div>
          <div className="farm-barn-glow" style={{ bottom: '20%', right: '10%' }}></div>
          
          {/* Two Windmills - Left and Right */}
          <div className="farm-windmill-glow" style={{ top: '30%', left: '5%' }}></div>
          <div className="farm-windmill-glow" style={{ top: '30%', right: '5%' }}></div>
          
          <div className="farm-tree-glow" style={{ bottom: '25%', left: '15%' }}></div>
          <div className="farm-tree-glow" style={{ bottom: '30%', right: '20%' }}></div>
          <div className="farm-cloud-glow" style={{ top: '15%', left: '-150px' }}></div>
          <div className="farm-cloud-glow" style={{ top: '25%', right: '-150px' }}></div>
          <div className="farm-sun-glow" style={{ top: '10%', right: '15%' }}></div>
          
          {/* Premium Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary-500/15 to-primary-500/15 rounded-full blur-3xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-primary-400/12 to-secondary-400/12 rounded-full blur-2xl animate-float delay-500"></div>
          
          {/* Premium Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-400/5 to-transparent transform -skew-x-12 animate-shimmer"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
            >
              Welcome to the Digital Farm
              <br />
              <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">of the Future</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              FarmMarket is revolutionizing farm animal trading by combining the power of blockchain technology 
              with agricultural economics. We offer a secure, fast, and transparent marketplace on the Solana network.
            </motion.p>

            {/* Highlight */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
            >
              We're bringing traditional agricultural trade into the digital age with decentralized finance (DeFi) principles.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center items-center gap-6 text-sm md:text-base"
            >
              <div className="flex items-center space-x-2 text-gray-300">
                <Zap className="w-5 h-5 text-secondary-400" />
                <span>Instant Transactions</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <ShoppingCart className="w-5 h-5 text-primary-400" />
                <span>Secure Payments</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <button
                onClick={goToMarketplace}
                className="group bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Explore Marketplace</span>
              </button>
              <button
                onClick={() => navigate('/about')}
                className="group bg-dark-700/50 hover:bg-dark-600/50 text-gray-300 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 border border-dark-600 hover:border-primary-500/30 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => navigate('/about')}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - İstatistikler Bandı */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-dark-900">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dark-900"></div>
        {/* Animated Gradient Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-purple-500/3 to-cyan-500/3"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {/* Total Users */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  1,234+
                </div>
                <div className="text-sm md:text-base text-gray-400">Total Users</div>
              </motion.div>

              {/* Trading Volume */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold font-orbitron bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  2,890+
                </div>
                <div className="text-sm md:text-base text-gray-400">Transactions</div>
              </motion.div>

              {/* Active Wallets */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
                    <Wallet className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  567+
                </div>
                <div className="text-sm md:text-base text-gray-400">Active Wallets</div>
              </motion.div>

              {/* Success Rate */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                    <CheckCircle2 className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold font-orbitron bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  99.9%
                </div>
                <div className="text-sm md:text-base text-gray-400">Success Rate</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-dark-900">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dark-900"></div>
        {/* Animated Gradient Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-purple-500/3 to-cyan-500/3"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get started in just 3 simple steps
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative"
            >
              <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/30">
                <div className="flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 border border-cyan-500/30">
                    <Wallet className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">Connect Wallet</h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    Connect your Phantom wallet to access the marketplace securely. Your wallet is your identity in the Web3 world.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative"
            >
              <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/30">
                <div className="flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4 border border-purple-500/30">
                    <ShoppingCart className="w-8 h-8 text-purple-400" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">Choose Animal</h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    Browse our selection of high-quality farm animals. Each animal has different tiers with unique rewards.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative"
            >
              <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/30">
                <div className="flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 border border-cyan-500/30">
                    <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">Complete Purchase</h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    Confirm your purchase with SOL. Receive instant confirmation on the Solana blockchain.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-dark-900">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dark-900"></div>
        {/* Animated Gradient Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-purple-500/3 to-cyan-500/3"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/3 to-purple-500/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/4 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/4 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl"
          >
            {/* CTA Content */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6"
            >
              Ready to Start Trading?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Join thousands of farmers trading on the Solana blockchain. Start your journey today!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                onClick={goToMarketplace}
                className="group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 hover:from-cyan-600 hover:via-purple-600 hover:to-cyan-600 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-2 flex items-center space-x-3 mx-auto"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Explore Marketplace</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap justify-center items-center gap-6 text-sm md:text-base text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span>Instant Transactions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                <span>Secure & Decentralized</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wallet className="w-5 h-5 text-cyan-400" />
                <span>Phantom Wallet Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;