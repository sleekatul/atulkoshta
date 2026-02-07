export default function Testimonials() {
  const testimonials = [
    { quote: "Exceptional developer with deep technical knowledge. Delivered complex solution on time.", author: "Enterprise Client", role: "Technology Director", project: "Railway Management System" },
    { quote: "Atul's .NET MAUI expertise saved months of development. Solutions are elegant and performant.", author: "Technology Startup", role: "CTO", project: "Cross-Platform Mobile App" },
    { quote: "Professional, reliable, highly skilled. Built our entire mobile ecosystem.", author: "Restaurant Owner", role: "Business Owner", project: "Food Ordering Platform" },
    { quote: "The app won first prize at RailTex Expo for best innovative design. Outstanding work.", author: "L.B. Foster", role: "Project Manager", project: "RailTex Exhibition App" }
  ];

  return (
    <div id="testimonials" className="w-full px-[12%] py-10 scroll-mt-20 bg-gray-50 dark:bg-darkHover/20">
      <h4 className="text-center mb-2 text-lg font-0vo">Client Feedback</h4>
      <h2 className="text-center text-5xl font-0vo">What Clients Say</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-0vo">
        Trusted by enterprises, startups, and businesses worldwide to deliver exceptional solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white dark:bg-darkHover border border-gray-200 dark:border-white/20 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl text-gray-300">"</span>
            </div>
            <p className="text-gray-700 dark:text-white/90 mb-6 italic leading-relaxed">
              {testimonial.quote}
            </p>
            <div className="border-t border-gray-200 dark:border-white/20 pt-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
              <p className="text-sm text-gray-600 dark:text-white/70">{testimonial.role}</p>
              <p className="text-xs text-gray-500 dark:text-white/50 mt-1">{testimonial.project}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-6 px-8 py-4 bg-white dark:bg-darkHover border border-gray-200 dark:border-white/20 rounded-full">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">50+</span>
            <span className="text-sm text-gray-600 dark:text-white/70">Projects</span>
          </div>
          <div className="w-px h-8 bg-gray-300 dark:bg-white/20"></div>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">15+</span>
            <span className="text-sm text-gray-600 dark:text-white/70">Years</span>
          </div>
          <div className="w-px h-8 bg-gray-300 dark:bg-white/20"></div>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">100%</span>
            <span className="text-sm text-gray-600 dark:text-white/70">Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  );
}