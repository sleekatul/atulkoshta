import { useState } from 'react';

export default function Work() {
  const projects = [
    {
      title: 'LightMode - Smart Helmet',
      category: 'IoT & Mobile',
      description: 'Revolutionary mobile app that transforms ordinary helmets with LED hardware kits. Complex hardware-software integration delivered seamlessly.',
      technologies: ['Xamarin Forms', 'C#', 'IoT', 'Bluetooth'],
      image: './assets/lightmode.gif'
    },
    {
      title: 'Journey Planner - LB Foster',
      category: 'Transportation',
      description: 'Railway journey planner for UK stations with real-time updates, cancellations, platform changes, and interactive maps.',
      technologies: ['Xamarin Forms', 'C#', 'Web API'],
      image: './assets/work-2.png'
    },
    {
      title: 'Run America',
      category: 'Sports & Fitness',
      description: 'Comprehensive running platform connecting runners nationwide. Search from 500,000+ race events and connect with running friends.',
      technologies: ['Xamarin Forms', 'C#', 'REST API'],
      image: './assets/work-3.png'
    },
    {
      title: 'ECNL Player App',
      category: 'Sports Management',
      description: 'End-to-end sporting solutions app for colleges and universities in the US. Part of TGS ecosystem.',
      technologies: ['Xamarin Forms', 'Azure', 'Push Notifications'],
      image: './assets/work-4.png'
    },
    {
      title: 'Gate Check',
      category: 'Security',
      description: 'Smart security system for gated communities. One-click security management with thoughtful UX design.',
      technologies: ['Xamarin Forms', 'C#', 'Real-time'],
      image: './assets/work-1.png'
    },
    {
      title: 'OIS - London Tube',
      category: 'Infrastructure',
      description: 'iPad app managing informational messages on display screens across London Tube Stations.',
      technologies: ['Xamarin Forms', 'iOS', 'Web API'],
      image: './assets/work-2.png'
    },
    {
      title: 'City - Travel Companion',
      category: 'Travel & Social',
      description: 'Connect with local people from cities worldwide. Discover authentic local experiences globally.',
      technologies: ['Xamarin Forms', 'Social', 'Geolocation'],
      image: './assets/work-3.png'
    },
    {
      title: 'Expenses Mobile',
      category: 'Business',
      description: 'Complete expense management solution. Record, submit, track, and approve business expenses on-the-go.',
      technologies: ['Xamarin Forms', 'Azure', 'CI/CD'],
      image: './assets/work-4.png'
    },
    {
      title: 'LBF RailTex Expo',
      category: 'Exhibition',
      description: '🏆 Award-winning iPad app that won first prize for best innovative design at RailTex Expo Europe.',
      technologies: ['Xamarin Forms', 'iOS', 'Offline Sync'],
      image: './assets/work-1.png'
    },
    {
      title: 'Curry Pizza Company',
      category: 'Food & Restaurant',
      description: 'Mobile ordering platform for Utah-based Indian restaurant chain serving signature curry-source pizzas.',
      technologies: ['Xamarin Forms', 'Payments', 'Loyalty'],
      image: './assets/work-2.png'
    },
    {
      title: 'Tobi - Timber Management',
      category: 'Business',
      description: 'Order management solution for UK timber merchant trade. Streamlines wood cutting business operations.',
      technologies: ['Xamarin Android', 'C#', 'SQL Server'],
      image: './assets/work-3.png'
    },
    {
      title: 'New Doors',
      category: 'Project Management',
      description: 'Enterprise project management platform handling tasks, budgets, meetings, and expenditure tracking.',
      technologies: ['Xamarin Forms', 'C#', 'Web API'],
      image: './assets/work-4.png'
    },
    {
      title: 'Swasth Bharat',
      category: 'Healthcare',
      description: 'Medical assessment tool for doctors. Manage complaints, examinations, fitness assessments, and patient history.',
      technologies: ['Xamarin Forms', 'C#', 'Azure'],
      image: './assets/work-1.png'
    },
    {
      title: 'ADR Reporting',
      category: 'Healthcare',
      description: 'Adverse drug reaction reporting app officially launched by AIMS for government medical colleges nationwide.',
      technologies: ['Xamarin Forms', 'Web API', 'Azure'],
      image: './assets/work-2.png'
    },
    {
      title: 'Smart Form Designer',
      category: 'Enterprise',
      description: 'Dynamic form builder with validation, version control, and automatic mobile distribution. PDFs on completion.',
      technologies: ['Xamarin Forms', 'HTML', 'JavaScript'],
      image: './assets/work-3.png'
    },
    {
      title: 'Benefit Expressway',
      category: 'HR & Benefits',
      description: 'Platform to manage and search benefit elections for customers, family members, and beneficiaries.',
      technologies: ['Xamarin Forms', 'C#', 'Web API'],
      image: './assets/work-4.png'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-0vo">My portfolio</h4>
      <h2 className="text-center text-5xl font-0vo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-0vo">
        Explore my diverse portfolio of 50+ successful projects across healthcare, transportation, sports, IoT, and enterprise solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        {projects.slice(currentIndex, currentIndex + cardsToShow).map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.category}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src="./assets/send-icon.png" alt="" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={prevProject}
          className="p-3 bg-white border border-gray-700 rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:border-white"
          aria-label="Previous project"
        >
          <img src="./assets/right-arrow.png" alt="" className="w-4 dark:hidden" style={{ transform: 'rotate(180deg)' }} />
          <img src="./assets/right-arrow-dark.png" alt="" className="w-4 hidden dark:block" style={{ transform: 'rotate(180deg)' }} />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-white border border-gray-700 rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:border-white"
          aria-label="Next project"
        >
          <img src="./assets/right-arrow.png" alt="" className="w-4 dark:hidden" />
          <img src="./assets/right-arrow-dark.png" alt="" className="w-4 hidden dark:block" />
        </button>
      </div>

      <a
        href="https://www.linkedin.com/in/atul-koshta/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        View LinkedIn
        <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
        <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
      </a>
    </div>
  );
}
