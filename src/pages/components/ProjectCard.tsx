import Link from "next/link"

type ProjectCardProps = {
    title: string
    photo: string
    description: string
    url: string
    link:string
  }
  
  export default function Project({link, title, photo, description, url}: ProjectCardProps) {
    return (
        <div className="container mx-auto flex flex-col items-center px-1 justify-center w-3/4 md:w-full border-emerald-900 border rounded-3xl bg-gradient-to-t from-neutral-100 via-neutral-100 to-emerald-200 hover:shadow-2xl translate-y-3 hover:translate-y-0 transition hover:scale-105 ease-in-out duration-300 pb-4">
            <Link href={link}><span className="text-3xl text-emerald-800 hover:text-emerald-600 font-semibold p-3 cursor-pointer">{title}</span></Link>
            <Link href={link}><img src={`${photo}`} alt={`Image of ${title}`} className="w-full h-2/3 rounded-md" /></Link>
            <p className="mx-2 text-center py-4">{description}</p>
            <a href={`${url}`} target="_blank" className="p-2 text-emerald-900 hover:text-emerald-600 font-medium">Check out this project on github</a>
        </div>
    )
  }

 