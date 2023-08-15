export default function HeaderComponent() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div>
        <h1 className="text-3xl font-semibold">
          Notes
        </h1>
      </div>
      <div className="p-2 rounded-lg cursor-pointer hover:scale-90">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-black">
          <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  )
}