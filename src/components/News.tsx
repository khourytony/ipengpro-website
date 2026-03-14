import { useEffect, useState } from 'react';
import { Calendar, Tag } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  published_date: string;
  category: string | null;
  author: string | null;
  is_featured: boolean;
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('published_date', { ascending: false })
        .limit(3);

      if (error) throw error;
      setNews(data || []);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="news" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-ipeng-light">Loading news...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest News</h2>
          <p className="text-xl text-ipeng-light max-w-3xl mx-auto">
            Stay updated with our latest projects, innovations, and industry insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="group bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-ipeng-blue/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {item.image_url && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {item.is_featured && (
                    <div className="absolute top-4 right-4 bg-ipeng-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </div>
                  )}
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-ipeng-light">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(item.published_date)}</span>
                  </div>
                  {item.category && (
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      <span>{item.category}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ipeng-blue transition-colors">
                  {item.title}
                </h3>

                <p className="text-ipeng-light leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {item.author && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-sm text-ipeng-light">By {item.author}</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {news.length === 0 && (
          <div className="text-center text-ipeng-light">
            No news items available at this time.
          </div>
        )}
      </div>
    </section>
  );
}
