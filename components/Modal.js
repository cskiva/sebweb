export default function Modal({ children, title, showing }) {
  return (
    <div
      className={` absolute right-1 rounded-md min-w-[50%] mr-[-5px] z-50 ${
        !showing ? `hidden` : 'block'
      }`}
    >
      <div className="dark:bg-black/[0.3] backdrop-blur-md rounded-md p-5">
        <h1 className="text-xl">{title}</h1>
        {children}
      </div>
    </div>
  )
}
