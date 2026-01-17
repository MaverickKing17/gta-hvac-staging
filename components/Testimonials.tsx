import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Bruce Mckay',
    date: '1 month ago',
    rating: 5,
    text: "Outstanding service and installation of my new furnace and heat pump. I'm very impressed by Furnace King. From explaining all my options, showing me the math how this new equipment will save me money, to a full team of 4 installers who took care of everything the next day. Would highly recommend 10/10"
  },
  {
    name: 'Cindy',
    date: '1 month ago',
    rating: 5,
    text: "I booked this contractor through Home Depot and had an amazing experience. They got back to me immediately, scheduled a same-day appointment, arrived on time, and fixed my heating problem right away. We were freezing without heat, so their quick service made a huge difference. I'll definitely be using their service again!"
  },
  {
    name: 'Wendy Drahovzal',
    date: '4 days ago',
    rating: 5,
    text: "Over the past weekend my furnace failed. On my friends recommendation I called Furnace King. ...Furnace King installed a new furnace and AC the very next day. Nippo and his crew worked long and hard, they did a great job, and only left once the house started to feel warm again. Thank you for an excellent service!"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-red font-semibold tracking-wide uppercase">Customer Stories</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Your Neighbors
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Don't just take our word for it. Here's what Mississauga homeowners are saying about Raami and the team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-8 relative shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-red-100">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 mb-6 relative z-10 line-clamp-6 italic">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center mt-auto">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/maps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-red font-semibold hover:text-brand-dark flex items-center justify-center gap-2"
          >
            Read more reviews on Google
            <Star className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;