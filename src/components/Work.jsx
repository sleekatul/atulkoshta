import { useEffect, useState } from 'react';

export default function Work() {
  const projects = [
    {
      title: 'LightMode - Smart Helmet',
      category: 'IoT & Mobile',
      description: 'Revolutionary mobile app that transforms ordinary helmets with LED hardware kits. Complex hardware-software integration delivered seamlessly.',
      details:
        'Mobile app for controlling LED hardware kits on helmets. Built to handle real-time Bluetooth communication, device configuration, and a smooth UX for riders.',
      fullDetails: [
        'A configurable mobile app that pairs with LED hardware kits to make helmets glow.',
        'The concept began with Thomas’s idea to turn standard helmets into illuminated gear through a companion app.',
        'This was a challenging hardware + mobile integration project delivered successfully.',
        'Available on the App Store and Play Store.'
      ],
      technologies: ['Xamarin Forms', 'C#', 'IoT', 'Bluetooth'],
      image: './assets/lightmode.gif'
    },
    {
      title: 'Journey Planner - LB Foster',
      category: 'Transportation',
      description: 'Railway journey planner for UK stations with real-time updates, cancellations, platform changes, and interactive maps.',
      details:
        'Deployed on station totem machines across UK platforms. Includes planner, arrivals/departures, service alerts, maps, and branding variants per client needs.',
      fullDetails: [
        'Railway journey planner used across UK stations on platform totem machines.',
        'Modules include planner, arrivals, departures, feedback, and maps.',
        'Passengers can search stations, plan journeys, and view real-time service updates.',
        'Supports multiple branding variants and shows bus replacement notices.',
        'Provides links to web pages for additional journey information.'
      ],
      technologies: ['Xamarin Forms', 'C#', 'Web API'],
      image: './assets/work-2.png'
    },
    {
      title: 'Run America',
      category: 'Sports & Fitness',
      description: 'Comprehensive running platform connecting runners nationwide. Search from 500,000+ race events and connect with running friends.',
      details:
        'Designed by runners for runners. Discover races, read and leave reviews, and connect with the running community around upcoming events.',
      fullDetails: [
        'Created by runners for runners to find and review races.',
        'Helps users connect with running friends, leave feedback, and discover upcoming events.',
        'Searches a catalog approaching 500,000 races.'
      ],
      technologies: ['Xamarin Forms', 'C#', 'REST API'],
      image: './assets/work-3.png'
    },
    {
      title: 'ECNL Player App',
      category: 'Sports Management',
      description: 'End-to-end sporting solutions app for colleges and universities in the US. Part of TGS ecosystem.',
      details:
        'Built for Total Global Sports (US). An integral part of their athletics ecosystem for colleges and universities.',
      fullDetails: [
        'Developed for Total Global Sports in the US.',
        'TGS provides end-to-end sporting solutions for colleges and universities.',
        'The ECNL Player App is a core part of that ecosystem.'
      ],
      technologies: ['Xamarin Forms', 'Azure', 'Push Notifications'],
      image: './assets/work-4.png'
    },
    {
      title: 'Gate Check',
      category: 'Security',
      description: 'Smart security system for gated communities. One-click security management with thoughtful UX design.',
      details:
        'Resident and security-friendly workflow to manage entry, approvals, and daily security operations with a streamlined UI.',
      fullDetails: [
        'A simple app-based system for gated community security at the tap of a button.',
        'Designed for both residents and security personnel with thoughtful, hassle-free workflows.'
      ],
      technologies: ['Xamarin Forms', 'C#', 'Real-time'],
      image: './assets/work-1.png'
    },
    {
      title: 'OIS - London Tube',
      category: 'Infrastructure',
      description: 'iPad app managing informational messages on display screens across London Tube Stations.',
      details:
        'L.B. Foster UK iPad app to create and manage station display messages across the London Tube network.',
      fullDetails: [
        'iPad app for L.B. Foster UK to create and manage informational messages on display screens across London Tube stations.',
        'Built for iOS iPad deployments across station environments.'
      ],
      technologies: ['Xamarin Forms', 'iOS', 'Web API'],
      image: './assets/work-2.png'
    },
    {
      title: 'City - Travel Companion',
      category: 'Travel & Social',
      description: 'Connect with local people from cities worldwide. Discover authentic local experiences globally.',
      details:
        'Taritas product for travelers and explorers to connect with locals and discover city-specific experiences.',
      fullDetails: [
        'Taritas product that connects users with local people in cities around the world.',
        'A companion app for explorers and travelers who want authentic local insights.'
      ],
      technologies: ['Xamarin Forms', 'Social', 'Geolocation'],
      image: './assets/work-3.png'
    },
    {
      title: 'Expenses Mobile',
      category: 'Business',
      description: 'Complete expense management solution. Record, submit, track, and approve business expenses on-the-go.',
      details:
        'Capture receipts on the go, submit claims instantly, and keep approvals moving without a desktop.',
      fullDetails: [
        'Record, submit, track, and approve business expenses without needing a desktop.',
        'Add expense claims as they happen so receipts are never missed.'
      ],
      technologies: ['Xamarin Forms', 'Azure', 'CI/CD'],
      image: './assets/work-4.png'
    },
    {
      title: 'LBF RailTex Expo',
      category: 'Exhibition',
      description: '🏆 Award-winning iPad app that won first prize for best innovative design at RailTex Expo Europe.',
      details:
        'Showcased L.B. Foster services at RailTex Europe 2015 and 2016, collected contact details, and powered newsletter subscriptions.',
      fullDetails: [
        'iPad app for L.B. Foster to showcase products and services at Railtex Expo Europe 2015 and 2016.',
        'Captured participant contact details and newsletter subscriptions on-site.',
        'Won first prize at the expo for best and innovative design using technology.'
      ],
      technologies: ['Xamarin Forms', 'iOS', 'Offline Sync'],
      image: './assets/work-1.png'
    },
    {
      title: 'Curry Pizza Company',
      category: 'Food & Restaurant',
      description: 'Mobile ordering platform for Utah-based Indian restaurant chain serving signature curry-source pizzas.',
      details:
        'Multi-location restaurant app with a focus on easy ordering and customer experience.',
      fullDetails: [
        'Utah-based Indian restaurant serving customers for over 10 years.',
        'Known for curry sauces on pizzas and available across four locations in Utah.',
        'A popular choice for customers seeking distinctive, flavorful pizza.'
      ],
      technologies: ['Xamarin Forms', 'Payments', 'Loyalty'],
      image: './assets/work-2.png'
    },
    {
      title: 'Tobi - Timber Management',
      category: 'Business',
      description: 'Order management solution for UK timber merchant trade. Streamlines wood cutting business operations.',
      details:
        'Android app for timber merchants to manage orders and day-to-day operations in the wood cutting business.',
      fullDetails: [
        'Built for a UK timber merchant trade client.',
        'Helps wood cutting businesses manage orders directly from Android devices.'
      ],
      technologies: ['Xamarin Android', 'C#', 'SQL Server'],
      image: './assets/work-3.png'
    },
    {
      title: 'New Doors',
      category: 'Project Management',
      description: 'Enterprise project management platform handling tasks, budgets, meetings, and expenditure tracking.',
      details:
        'Project management suite for tasks, budgets, meetings, users, and expenditure tracking.',
      fullDetails: [
        'Project management suite covering tasks, budgets, meetings, users, and expenditure tracking.',
        'Built to streamline day-to-day coordination and visibility across teams.'
      ],
      technologies: ['Xamarin Forms', 'C#', 'Web API'],
      image: './assets/work-4.png'
    },
    {
      title: 'Swasth Bharat',
      category: 'Healthcare',
      description: 'Medical assessment tool for doctors. Manage complaints, examinations, fitness assessments, and patient history.',
      details:
        'Doctor-focused assessment app for complaints, prioritization, fitness evaluations, lifestyle checks, and family history.',
      fullDetails: [
        'Doctor assessment app for capturing medical complaints and prioritizing cases.',
        'Supports fitness evaluations, lifestyle review, and family history-based health checks.'
      ],
      technologies: ['Xamarin Forms', 'C#', 'Azure'],
      image: './assets/work-1.png'
    },
    {
      title: 'ADR Reporting',
      category: 'Healthcare',
      description: 'Adverse drug reaction reporting app officially launched by AIMS for government medical colleges nationwide.',
      details:
        'Reporting app for adverse drug reactions with admin reporting. Officially launched by AIMS for medical colleges.',
      fullDetails: [
        'ADR reporting app for logging adverse drug reactions with an admin web portal for reports.',
        'Officially launched by AIMS for use across government medical colleges.'
      ],
      technologies: ['Xamarin Forms', 'Web API', 'Azure'],
      image: './assets/work-2.png'
    },
    {
      title: 'Smart Form Designer',
      category: 'Enterprise',
      description: 'Dynamic form builder with validation, version control, and automatic mobile distribution. PDFs on completion.',
      details:
        'Create interactive forms with validation, targeted publishing, version control, and PDF exports after submission.',
      fullDetails: [
        'Build interactive, dynamic forms that are automatically distributed to mobile teams.',
        'Includes validation, targeted publishing, version control, and dynamic questioning.',
        'Completed forms are submitted and available online for review and PDF export.'
      ],
      technologies: ['Xamarin Forms', 'HTML', 'JavaScript'],
      image: './assets/work-3.png'
    },
    {
      title: 'Benefit Expressway',
      category: 'HR & Benefits',
      description: 'Platform to manage and search benefit elections for customers, family members, and beneficiaries.',
      details:
        'Benefit elections and enrollment management for employees, families, and beneficiaries.',
      fullDetails: [
        'Manage and search benefit elections for employees, families, and beneficiaries.',
        'Designed to simplify enrollment choices and access to benefit details.'
      ],
      technologies: ['Xamarin Forms', 'C#', 'Web API'],
      image: './assets/work-4.png'
    },
    {
      title: 'Timesheet',
      category: 'Productivity',
      description: 'Mobile timesheet app for tracking daily work hours with billable, non-billable, time-off, and overtime entries.',
      details:
        'Daily time tracking by project with billing classifications and approval workflows.',
      fullDetails: [
        'Tracks daily working hours by project with billable, non-billable, time-off, and overtime entries.',
        'Helps teams capture accurate time data without friction.'
      ],
      technologies: ['Xamarin Forms', 'C#'],
      image: './assets/work-1.png'
    },
    {
      title: 'Cyber Truck',
      category: 'Automotive',
      description: 'Mobile application project showcased in the Taritas portfolio.',
      details:
        'Concept/project showcased in the Taritas portfolio.',
      fullDetails: ['Concept app showcased in the Taritas portfolio.'],
      technologies: ['Xamarin Forms', 'C#'],
      image: './assets/work-2.png'
    },
    {
      title: 'Trips',
      category: 'Travel',
      description: 'Trip-focused mobile app concept showcased in the Taritas portfolio.',
      details:
        'Travel-focused app concept showcased in the Taritas portfolio.',
      fullDetails: ['Travel app concept showcased in the Taritas portfolio.'],
      technologies: ['Xamarin Forms', 'C#'],
      image: './assets/work-3.png'
    },
    {
      title: 'App for Music Lovers',
      category: 'Entertainment',
      description: 'Music community app showcased in the Taritas portfolio.',
      details:
        'Music-focused community app showcased in the Taritas portfolio.',
      fullDetails: ['Music community app concept showcased in the Taritas portfolio.'],
      technologies: ['Xamarin Forms', 'C#'],
      image: './assets/work-4.png'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [selectedProject, setSelectedProject] = useState(null);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => document.removeEventListener('keydown', handleEsc);
  }, [selectedProject]);

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
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedProject(project);
              }
            }}
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

      {selectedProject && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl p-6 relative max-h-[75vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-9 h-9 rounded-full border border-gray-300 dark:border-white/30 flex items-center justify-center"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              <span className="text-xl leading-none text-gray-700 dark:text-gray-200">×</span>
            </button>

            <div className="flex items-start gap-4 mb-4">
              <img src={selectedProject.image} alt="" className="w-20 h-20 rounded-lg object-cover" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{selectedProject.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{selectedProject.category}</p>
              </div>
            </div>

            <div className="mb-5 space-y-2 text-gray-700 dark:text-gray-300">
              {[selectedProject.description, selectedProject.details, ...selectedProject.fullDetails]
                .filter(Boolean)
                .map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
