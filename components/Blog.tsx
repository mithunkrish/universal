import React from 'react';

const posts = [
  {
    date: 'October 19, 2023',
    title: 'Brand Design That Helps The Company Grow',
  },
  {
    date: 'October 19, 2023',
    title: 'Fresh Design Ideas & Inspiration For 2023',
  },
  {
    date: 'October 19, 2023',
    title: 'Fresh Design Ideas & Inspiration For 2023',
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <p className="text-brand-lime font-semibold mb-2">--- My Blogs</p>
            <h2 className="text-5xl font-bold mb-8">Recent Posts</h2>
            <button className="w-40 h-40 bg-brand-lime rounded-full flex flex-col items-center justify-center text-black font-semibold hover:bg-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                Click More Work
            </button>
          </div>
          <div className="md:col-span-2 space-y-8">
            {posts.map((post, index) => (
              <div key={index} className="flex justify-between items-center border-b border-gray-800 pb-8">
                <div>
                  <p className="text-brand-light-gray mb-2">{post.date}</p>
                  <h3 className="text-3xl font-semibold hover:text-brand-lime transition-colors">
                    <a href="#" onClick={(e) => e.preventDefault()}>{post.title}</a>
                  </h3>
                </div>
                <a href="#" onClick={(e) => e.preventDefault()} className="flex-shrink-0 w-16 h-16 border border-gray-700 rounded-full flex items-center justify-center hover:bg-brand-lime hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;