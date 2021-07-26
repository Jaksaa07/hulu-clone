import requests from '../utils/requests'
import { useRouter } from 'next/router'

function Nav() {
  const router = useRouter()

  return (
    <nav className="relative">
      <div className="scrollbar-hide flex px-10 whitespace-nowrap text-2xl overflow-x-scroll space-x-10 sm:px-20 sm:space-x-20">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 active:text-red-500 hover:text-white cursor-pointer transform hover:scale-125 transition duration-100"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="from-[#06202A] absolute right-0 top-0 w-1/12 h-10 bg-gradient-to-l" />
    </nav>
  )
}

export default Nav
