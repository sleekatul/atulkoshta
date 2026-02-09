export default function Services() {
  const services = [
    {
      title: 'Cross-Platform Mobile Development',
      description: 'Expert in building native-quality iOS and Android apps using Xamarin Forms and .NET MAUI. 50+ projects delivered across healthcare, transportation, sports, IoT, and enterprise.',
      icon: './assets/web-icon.png',
      iconDark: './assets/web-icon-dark.png'
    },
    {
      title: 'Web API & Backend Development',
      description: 'Designing robust RESTful APIs, backend services, and database architectures. Specialized in offline-first solutions with two-way sync capabilities.',
      icon: './assets/mobile-icon.png',
      iconDark: './assets/mobile-icon-dark.png'
    },
    {
      title: 'Enterprise Solutions',
      description: 'End-to-end development of large-scale applications from planning to deployment. Experience with railway systems, healthcare platforms, and project management tools.',
      icon: './assets/ui-icon.png',
      iconDark: './assets/ui-icon-dark.png'
    },
    {
      title: 'Solution Architecture',
      description: 'Architecting scalable, maintainable software solutions following SOLID principles, MVVM patterns, and industry best practices.',
      icon: './assets/graphics-icon.png',
      iconDark: './assets/graphics-icon-dark.png'
    },
    {
      title: 'Technical Leadership',
      description: 'Leading development teams, mentoring developers, establishing processes, and driving projects to successful completion.',
      icon: './assets/web-icon.png',
      iconDark: './assets/web-icon-dark.png'
    },
    {
      title: 'Custom Control Development',
      description: 'Developed reusable control libraries that accelerate development by months while maintaining optimal performance and superior user experience.',
      icon: './assets/mobile-icon.png',
      iconDark: './assets/mobile-icon-dark.png'
    }
  ];

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-0vo">What I do</h4>
      <h2 className="text-center text-5xl font-0vo">My Expertise</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-0vo">
        Delivering innovative solutions across mobile, backend, and enterprise development with a focus on performance, scalability, and user experience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
            <img src={service.icon} alt="" className="w-10 dark:hidden" />
            <img src={service.iconDark} alt="" className="w-10 hidden dark:block" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
            <a href="" className="flex items-center gap-2 text-sm mt-5">
              Read more{' '}
              <img src="./assets/right-arrow.png" alt="" className="w-4 dark:hidden" />
              <img src="./assets/right-arrow-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
