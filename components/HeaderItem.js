function HeaderItem({ Icon, title }) {
  return (
    <div className="group flex flex-col items-center w-12 hover:text-white cursor-pointer sm:w-20">
      <Icon className="mb-1 h-8 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  )
}

export default HeaderItem
