type Props = {
  title?: string;
}

export default function CardComponent({ title = "Card 1" }: Props) {
  return (
    <div className="relative flex flex-col justify-between p-5 space-y-8 overflow-hidden border cursor-pointer group bg-slate-100 rounded-xl">
      <div>
        <p className="cursor-text font-medium text-md line-clamp-6 min-h-[144px] outline-none" contentEditable>
          {title} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ut, neque iste veniam accusamus sunt!
        </p>
      </div>
      <div className="flex flex-row items-center justify-between opacity-80 group-hover:opacity-100 flex-nowrap">
        <div>
          <p className="text-sm font-semibold">May 21, 2020</p>
        </div>
        <div className=" cursor-pointer flex items-center justify-center rounded-full w-[36px] h-[36px] bg-black">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
            <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
          </svg>
        </div>
      </div>

      <div className="group-hover:opacity-100 transition-all duration-300  absolute flex items-center justify-center w-[30px] h-[30px] group-hover:right-5 right-[-40px] top-[-10px] bg-black rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-yellow-400">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
      </div>

    </div>
  )
}