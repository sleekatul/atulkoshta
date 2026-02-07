export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <img src="./assets/profile-img.png" alt="" className="rounded-full w-32" />
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-0vo">
        Hi! I'm Atul Koshta
        <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-0vo">
        Senior .NET & Cross-Platform Mobile Developer
      </h1>
      <p className="max-w-2xl mx-auto font-0vo">
        15+ years of crafting high-performance enterprise solutions and cross-platform mobile applications. Specializing in C#, .NET MAUI, Xamarin, and building seamless experiences across iOS and Android.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact" className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
          Get In Touch
        </a>
        <a href="#work" className="px-10 py-2.5 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
          View My Work
          <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
          <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
        </a>
      </div>
    </div>
  );
}
