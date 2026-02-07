export default function About() {
  const tools = [
    { name: 'vscode', icon: './assets/vscode.png' },
    { name: 'csharp', icon: './assets/csharp.png' },
    { name: 'xamarin', icon: './assets/xamarin.png' },
    { name: 'azure', icon: './assets/azure.png' },
    { name: 'git', icon: './assets/git.png' },
  ];

  const data = [
    {
      name: 'Education',
      icon1: './assets/code-icon.png',
      icon2: './assets/code-icon-dark.png',
      description: 'B.E. in Computer Science & Engineering, GGITS, 2010',
    },
    {
      name: 'Core Technologies',
      icon1: './assets/edu-icon.png',
      icon2: './assets/edu-icon-dark.png',
      description: 'C#, .NET, .NET Core, XAML, Xamarin Forms, .NET MAUI, Entity Framework, SQL Server, Web API',
    },
    {
      name: 'Specialization',
      icon1: './assets/project-icon.png',
      icon2: './assets/project-icon-dark.png',
      description: 'Cross-platform mobile apps (iOS/Android), Enterprise solutions, MVVM architecture, Custom controls, IoT integration',
    },
  ];

  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-0vo">Introduction</h4>
      <h2 className="text-center text-5xl font-0vo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img src="./assets/user-image.png" alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />
          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <img src="./assets/circular-text.png" alt="" className="w-full animate-spin_slow" />
            <img src="./assets/dev-icon.png" alt="" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-0vo">
            With over 15 years of hands-on experience in custom software development, I specialize in creating robust, scalable enterprise solutions using C# and .NET technologies. From the early days of Xamarin Forms to the latest .NET MAUI releases, I've been at the forefront of cross-platform mobile development.
          </p>
          <p className="mb-10 max-w-2xl font-0vo">
            Throughout my career, I've delivered 50+ successful projects across diverse industries including healthcare, transportation, sports, finance, IoT, and enterprise management. From award-winning expo applications to large-scale railway systems deployed across the UK, my work spans innovative consumer apps to mission-critical enterprise solutions.
          </p>
          <p className="mb-10 max-w-2xl font-0vo">
            I'm passionate about writing clean, maintainable code following SOLID principles and MVVM patterns. My approach combines technical excellence with strong problem-solving skills, enabling me to tackle complex challenges and deliver solutions that exceed expectations.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {data.map(({ name, icon1, icon2, description }, index) => (
              <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                <img src={icon1} alt="" className="w-7 mt-3 dark:hidden" />
                <img src={icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{name}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-0vo dark:text-white/80">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {tools.map(({ name, icon }, index) => (
              <li key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                <img src={icon} alt="" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
