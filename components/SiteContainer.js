export default function SectionContainer({ children }) {
  return (
    <div id="sectionHolder">
      <div className="fixed h-screen w-screen bg-gradient-to-r from-indigo-500 via-sky-500 opacity-30 mix-blend-soft-light"></div>
      <div className="z-1 relative mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        {children}
      </div>
    </div>
  )
}
