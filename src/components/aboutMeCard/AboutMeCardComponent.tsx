export default function AboutMeCardComponent() {
  return (
    <div
      className={`
      animate-[wiggle_1s_ease-in-out_infinite]
      bg-cyan-300
      min-h-[236px] relative flex flex-col items-center justify-center p-5 space-y-8 overflow-hidden border cursor-pointer group rounded-xl`}>

      <div className="z-20 flex flex-col items-center justify-center space-y-2 transition-all duration-300 group-hover:scale-90 drop-shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-20 h-20 text-white border-separate">
          <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
        </svg>
        <p className="text-lg font-semibold text-white transition-all ">
          About Me
        </p>
      </div>

    </div>
  )
}