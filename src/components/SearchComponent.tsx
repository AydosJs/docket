export default function SearchComponent() {
  return (
    <div className="flex flex-row items-center w-full p-2 px-4 mb-6 border rounded-lg sm:border-0 sm:p-0 sm:mb-12 flex-nowrap">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-400 sm:w-5 sm:h-5">
        <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
      </svg>
      <input type="text" placeholder="Search" className="w-full p-2 text-lg font-medium bg-transparent rounded-md outline-none sm:text-base placeholder:font-normal" />
    </div>
  )
}