export default function ProjectsLayout({ children }) {
  return (
    <section className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </div>
    </section>
  )
}
