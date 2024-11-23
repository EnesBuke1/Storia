import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendingStories from './components/TrendingStories';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <TrendingStories />
      </main>
    </div>
  );
}

export default App;