import React from 'react';
import { Sparkles, BookOpen, Users, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Where Stories Come
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"> Alive</span>
              <svg className="absolute -bottom-2 w-full h-3 text-indigo-200" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,0 Q50,12 100,0" stroke="currentColor" strokeWidth="4" fill="none"/>
              </svg>
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Join a vibrant community of storytellers. Write, share, and discover stories that matter.
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-8 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Start Writing
            </button>
            <button className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 hover:border-gray-400 transition-colors">
              Explore Stories
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: BookOpen, title: '1M+ Stories', desc: 'From emerging to established writers' },
              { icon: Users, title: '500K Writers', desc: 'Active storytelling community' },
              { icon: Trophy, title: 'Weekly Awards', desc: 'Recognition for top stories' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
                <item.icon className="h-8 w-8 text-indigo-600" />
                <h3 className="mt-4 font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80')] opacity-[0.03] mix-blend-multiply pointer-events-none" />
    </div>
  );
}