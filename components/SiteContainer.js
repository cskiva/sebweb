export default function SectionContainer({ children }) {
  return (
    <div id="sectionHolder">
      <div className="fixed h-screen w-screen bg-gradient-to-r from-indigo-500 via-sky-500 opacity-30 mix-blend-soft-light left-0 right-0 top-0 bottom-0"></div>
      <div className="z-1 relative ">{children}</div>
    </div>
  )
}
