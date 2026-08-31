import Link from "next/link";

const categories = [
  { name: "Software Engineering", count: "1,204 jobs" },
  { name: "Design", count: "356 jobs" },
  { name: "Marketing", count: "512 jobs" },
  { name: "Sales", count: "289 jobs" },
  { name: "Customer Support", count: "174 jobs" },
  { name: "Finance", count: "98 jobs" },
];

const featuredJobs = [
  {
    title: "Senior Frontend Engineer",
    company: "Nexora Labs",
    location: "Dhaka, Bangladesh (Hybrid)",
    type: "Full-time",
    salary: "৳90,000 - ৳130,000",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Product Designer",
    company: "Pixel & Co.",
    location: "Remote",
    type: "Full-time",
    salary: "৳70,000 - ৳100,000",
    tags: ["Figma", "UI/UX", "Design Systems"],
  },
  {
    title: "Backend Developer (Node.js)",
    company: "Cloudforge",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳80,000 - ৳120,000",
    tags: ["Node.js", "MongoDB", "AWS"],
  },
  {
    title: "Marketing Manager",
    company: "Brandwave",
    location: "Chattogram, Bangladesh",
    type: "Full-time",
    salary: "৳60,000 - ৳90,000",
    tags: ["SEO", "Content", "Analytics"],
  },
  {
    title: "DevOps Engineer",
    company: "Stackline",
    location: "Remote",
    type: "Contract",
    salary: "৳100,000 - ৳150,000",
    tags: ["Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "Junior QA Engineer",
    company: "TestPoint",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳35,000 - ৳55,000",
    tags: ["Manual Testing", "Selenium"],
  },
];

const companies = [
  "Nexora Labs",
  "Pixel & Co.",
  "Cloudforge",
  "Brandwave",
  "Stackline",
  "TestPoint",
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Navbar */}
      <header className="w-full border-b border-black/[.06] dark:border-white/[.08]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-black dark:text-zinc-50"
          >
            Job<span className="text-indigo-600 dark:text-indigo-400">Nest</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400 md:flex">
            <Link href="/jobs" className="hover:text-black dark:hover:text-zinc-50">
              Find Jobs
            </Link>
            <Link href="/companies" className="hover:text-black dark:hover:text-zinc-50">
              Companies
            </Link>
            <Link href="/resources" className="hover:text-black dark:hover:text-zinc-50">
              Resources
            </Link>
            <Link href="/about" className="hover:text-black dark:hover:text-zinc-50">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden text-sm font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-zinc-50 sm:block"
            >
              Log in
            </Link>
            <Link
              href="/post-job"
              className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
          <h1 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Find the job that{" "}
            <span className="text-indigo-600 dark:text-indigo-400">fits your life</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Thousands of curated openings from companies actually hiring right
            now. Search, apply, and track it all in one place.
          </p>

          {/* Search bar */}
          <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl border border-black/[.08] bg-white p-3 shadow-sm dark:border-white/[.1] dark:bg-zinc-900 sm:flex-row">
            <input
              type="text"
              placeholder="Job title, keyword, or company"
              className="flex-1 rounded-xl bg-transparent px-4 py-3 text-sm text-black outline-none placeholder:text-zinc-400 dark:text-zinc-50"
            />
            <input
              type="text"
              placeholder="Location"
              className="flex-1 rounded-xl bg-transparent px-4 py-3 text-sm text-black outline-none placeholder:text-zinc-400 dark:text-zinc-50 sm:border-l sm:border-black/[.08] dark:sm:border-white/[.1]"
            />
            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
            >
              Search Jobs
            </button>
          </form>

          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
            Popular: Frontend Developer, UI Designer, Data Analyst, Product Manager
          </p>
        </section>

        {/* Stats */}
        <section className="border-y border-black/[.06] bg-white dark:border-white/[.08] dark:bg-zinc-950">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
            {[
              { label: "Live Job Listings", value: "12,400+" },
              { label: "Companies Hiring", value: "3,200+" },
              { label: "Candidates Placed", value: "48,000+" },
              { label: "New Jobs Today", value: "180+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-semibold text-black dark:text-zinc-50 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
                Browse by category
              </h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Explore jobs across popular fields
              </p>
            </div>
            <Link
              href="/jobs"
              className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/jobs?category=${encodeURIComponent(cat.name)}`}
                className="rounded-2xl border border-black/[.06] bg-white p-6 transition-colors hover:border-indigo-300 dark:border-white/[.08] dark:bg-zinc-900 dark:hover:border-indigo-800"
              >
                <p className="font-medium text-black dark:text-zinc-50">
                  {cat.name}
                </p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {cat.count}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured jobs */}
        <section className="border-t border-black/[.06] bg-white dark:border-white/[.08] dark:bg-zinc-950">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
                  Featured jobs
                </h2>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Hand-picked openings updated daily
                </p>
              </div>
              <Link
                href="/jobs"
                className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
              >
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredJobs.map((job) => (
                <div
                  key={job.title + job.company}
                  className="flex flex-col rounded-2xl border border-black/[.06] bg-zinc-50 p-6 transition-colors hover:border-indigo-300 dark:border-white/[.08] dark:bg-zinc-900 dark:hover:border-indigo-800"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600/10 text-sm font-semibold text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400">
                      {job.company.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-black dark:text-zinc-50">
                        {job.title}
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {job.company}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/[.05] px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-white/[.08] dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-black/[.06] pt-4 dark:border-white/[.08]">
                    <span className="text-sm font-medium text-black dark:text-zinc-50">
                      {job.salary}
                    </span>
                    <Link
                      href="/jobs/1"
                      className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Companies */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-lg font-medium text-zinc-500 dark:text-zinc-400">
            Trusted by teams at
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {companies.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold text-zinc-400 dark:text-zinc-600"
              >
                {name}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-black/[.06] bg-black dark:border-white/[.08] dark:bg-zinc-900">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center">
            <h2 className="max-w-xl text-3xl font-semibold text-white">
              Hiring? Reach thousands of qualified candidates today.
            </h2>
            <p className="max-w-md text-zinc-400">
              Post a job in minutes and start receiving applications from top
              talent.
            </p>
            <Link
              href="/post-job"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              Post a Job — It's Free
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/[.06] bg-white dark:border-white/[.08] dark:bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row">
          <p>© {new Date().getFullYear()} JobNest. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-black dark:hover:text-zinc-50">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-black dark:hover:text-zinc-50">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-black dark:hover:text-zinc-50">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}