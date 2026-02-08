export default function WhyChooseMe() {
  const reasons = [
    {
      icon: '🎯',
      title: 'Proven Track Record',
      description: '15+ years delivering complex solutions across diverse industries. Over 50 successful projects spanning enterprise applications, mobile solutions, and cloud platforms.'
    },
    {
      icon: '🚀',
      title: 'Modern Technology Stack',
      description: 'Early adopter of latest .NET technologies. Expertise in .NET MAUI, Xamarin, Azure Cloud, and cutting-edge development frameworks that drive business innovation.'
    },
    {
      icon: '💡',
      title: 'Problem-Solving Excellence',
      description: 'Strong analytical skills to tackle complex challenges. Transform business requirements into elegant, scalable technical solutions with proven architectural patterns.'
    },
    {
      icon: '🏆',
      title: 'Award-Winning Solutions',
      description: 'Developed applications recognized at international expos. Built systems managing billions in transactions and serving millions of users with high reliability.'
    },
    {
      icon: '🤝',
      title: 'End-to-End Ownership',
      description: 'Full-cycle development expertise from requirements analysis to deployment. Experienced in leading teams, mentoring developers, and ensuring project success.'
    },
    {
      icon: '⚡',
      title: 'Performance Focused',
      description: 'Specialized in optimizing application performance and scalability. Expert in database design, API architecture, and building systems that handle high-volume operations.'
    }
  ];

  return (
    <div id="why-choose-me" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Me?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Combining technical excellence with business acumen to deliver solutions that make a real impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </div>
  );
}
