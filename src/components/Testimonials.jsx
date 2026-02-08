import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { 
      quote: "Atul has a highly professional approach and delivers high-end quality work on time. I thoroughly appreciate the thoughtful, fully engaged, and the above and beyond work awareness that Atul brings to the table.", 
      author: "Soumitra", 
      role: "Founder - Never Stop Learning" 
    },
    { 
      quote: "Working with Atul is a great collaborative experience. The skills are excellent and with our technically demanding project he quickly developed new competencies, ensuring that we were delivered a cutting edge application.", 
      author: "Ed Heal", 
      role: "MakeSwift" 
    },
    { 
      quote: "Atul delivered exceptional-quality work for our business mobile app using Xamarin .NET MAUI platform. Experienced, extremely reliable, communicates well, and was able to meet all requirements and timelines.", 
      author: "Sam", 
      role: "Data Sense" 
    },
    { 
      quote: "I was pleasantly surprised with the professionalism, technical expertise as well as the tools and processes. The project was completed ahead of schedule with minimal oversight.", 
      author: "Blake Thornley", 
      role: "Chief Technology Officer, TGS" 
    },
    { 
      quote: "This is our second time using Atul for our mobile development, and the results are stellar every time!", 
      author: "Sam Nameh", 
      role: "President, SPP" 
    },
    { 
      quote: "Atul did an outstanding job. Reliable and consistent in meeting deadlines. I would certainly use the services for Xamarin .NET MAUI mobile development in the future.", 
      author: "Happy Client", 
      role: "Mobile Development Project" 
    },
    { 
      quote: "They deserve six stars, but Upwork limits me to five. Exceptional work on our water app project.", 
      author: "Client Review", 
      role: "Xamarin Water App Project" 
    },
    { 
      quote: "Atul has shown dedication and professional results. I totally recommend hiring especially for those looking for quality results while keeping reasonable budget.", 
      author: "Project Lead", 
      role: "Mobile App Development" 
    },
    { 
      quote: "Excellent work, highly skilled developer, good communication. Will recommend and continue to work on many future projects!", 
      author: "Client", 
      role: "Social Networking App" 
    },
    { 
      quote: "Helpful, always responsive, willing to put effort into solving issues. Clean code, communicating well, regularly updates and professional.", 
      author: "Development Team", 
      role: "Azure Integration Project" 
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="testimonials" className="w-full px-[12%] py-10 scroll-mt-20 bg-gray-50 dark:bg-gray-900">
      <h4 className="text-center mb-2 text-lg font-0v0">Client Feedback</h4>
      <h2 className="text-center text-5xl">What Clients Say</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-0v0">
        Trusted by enterprises, startups, and businesses worldwide to deliver exceptional solutions.
      </p>

      <div className="relative max-w-4xl mx-auto">
        {/* Carousel Container */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 min-h-[300px] flex flex-col justify-center">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-light italic text-gray-700 dark:text-gray-300 mb-8">
              "{testimonials[currentIndex].quote}"
            </p>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {testimonials[currentIndex].author}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {testimonials[currentIndex].role}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-3 p-3 bg-white border-2 border-gray-700 rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <img src="./assets/right-arrow.png" alt="" className="w-4 dark:hidden" style={{transform: 'rotate(180deg)'}} />
            <img src="./assets/right-arrow-dark.png" alt="" className="w-4 hidden dark:block" style={{transform: 'rotate(180deg)'}} />
          </button>
          
          {/* Pagination Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-gray-900 dark:bg-white w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 p-3 bg-white border-2 border-gray-700 rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next testimonial"
          >
            <img src="./assets/right-arrow.png" alt="" className="w-4 dark:hidden" />
            <img src="./assets/right-arrow-dark.png" alt="" className="w-4 hidden dark:block" />
          </button>
        </div>
      </div>
    </div>
  );
}
