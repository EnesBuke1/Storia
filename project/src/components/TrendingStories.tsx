import React from 'react';
import { Flame, BookMarked, Heart, MessageCircle } from 'lucide-react';

const stories = [
  {
    title: "The Last Lighthouse Keeper",
    excerpt: "In a world where automation ruled, one person chose to guard the ancient ways...",
    author: "Maria Chen",
    image: "https://images.unsplash.com/photo-1507725914440-e1e434774828?auto=format&fit=crop&q=80",
    category: "Science Fiction",
    likes: 2.4,
    comments: 182
  },
  {
    title: "Whispers in the Wind",
    excerpt: "The old oak tree had secrets, centuries of stories trapped within its rings...",
    author: "James Wilson",
    image: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&q=80",
    category: "Fantasy",
    likes: 1.8,
    comments: 156
  },
  {
    title: "Coffee Shop Chronicles",
    excerpt: "Every morning at 7 AM, she ordered the same drink. Today was different...",
    author: "Sophie Taylor",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80",
    category: "Romance",
    likes: 3.2,
    comments: 245
  }
];

export default function TrendingStories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-gray-900">Trending Stories</h2>
          </div>
          <button className="text-indigo-600 hover:text-indigo-700 font-medium">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <article key={i} className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                  {story.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {story.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${story.author}`}
                      alt={story.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {story.author}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-500">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{story.likes}k</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{story.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}