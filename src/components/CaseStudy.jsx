export default function CaseStudy() {
  return (
    <section id="case-study" className="w-full px-[12%] py-12 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-0vo">Case study</h4>
      <h2 className="text-center text-5xl font-0vo">Offline Sync Architecture</h2>
      <p className="text-center max-w-3xl mx-auto mt-5 mb-10 font-0vo text-gray-700 dark:text-gray-300">
        For a recent SaaS product, I built the entire cross-platform mobile app and designed an offline-first
        architecture that reuses the existing Entity Framework data layer with SQLite on-device, keeping the same
        business logic for both server and mobile.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-gray-200 dark:border-white/20 p-6 bg-white/70 dark:bg-gray-900/30">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">The Challenge</h3>
          <p className="text-gray-700 dark:text-gray-300">
            The product needed a seamless offline experience with complex data models, zero duplication of business
            rules, and reliable two-way sync once connectivity returned.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 dark:border-white/20 p-6 bg-white/70 dark:bg-gray-900/30">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">What I Built</h3>
          <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
            <li>Shared Entity Framework models and business logic across server and device.</li>
            <li>SQLite-backed local persistence to mirror server data structures.</li>
            <li>Two-way sync engine with conflict-safe updates and incremental changes.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 dark:border-white/20 p-6 bg-white/70 dark:bg-gray-900/30">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Impact</h3>
          <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
            <li>Offline workflows behaved identically to online flows.</li>
            <li>Major reduction in duplicated code and maintenance overhead.</li>
            <li>Faster delivery with consistent performance on iOS and Android.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
