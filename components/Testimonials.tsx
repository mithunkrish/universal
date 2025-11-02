import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonial" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-lime font-semibold mb-2">--- Testimonial</p>
          <h2 className="text-4xl md:text-6xl font-bold">Happy Words From Happy <br/> Customer</h2>
        </div>
        <div className="relative max-w-4xl mx-auto p-8">
            <div className="absolute top-0 left-0">
                <img src="/assets/images/testimonials/testimonial-1.jpg" alt="Customer 1" className="w-24 h-24 rounded-full object-cover" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-[150%] -translate-y-[150%]">
                 <img src="/assets/images/testimonials/testimonial-2.jpg" alt="Customer 2" className="w-20 h-20 rounded-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-1/4">
                 <img src="/assets/images/testimonials/testimonial-3.jpg" alt="Customer 3" className="w-28 h-28 rounded-full object-cover" />
            </div>
            <div className="absolute top-1/4 right-0">
                 <img src="/assets/images/testimonials/testimonial-4.jpg" alt="Customer 4" className="w-32 h-32 rounded-full object-cover" />
            </div>

            <div className="relative z-10 bg-brand-gray/50 backdrop-blur-sm p-8 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                </div>
                <p className="text-xl leading-relaxed max-w-2xl mx-auto">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in middle of text. All the Lorem Ipsum generators
                </p>
                <div className="mt-8">
                    <h4 className="text-2xl font-bold">Nethon Jr</h4>
                    <p className="text-brand-light-gray">Business Owner</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;