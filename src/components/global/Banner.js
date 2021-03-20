
export const Banner = props => {
  
  return (
    <div className="flex flex-row items-center justify-between px-10 md:px-24 xl:px-28 2xl:px-32 py-6 w-full bg-blue-500">
      <div className="flex flex-row items-center justify-start">
        <div className="flex flex-col items-center justify-center p-3 mr-2 bg-blue-600 rounded">
          <i className={`${props.icon} text-2xl`} />
        </div>
        <div className="flex flex-row items-center justify-start ml-2">
          <p className="font-inter font-medium text-xl text-gray-100">{ props.message }</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end">
        <a
          className="flex flex-row items-center justify-center mr-2 py-3 px-5 bg-gray-100 rounded transition transform duration-300 hover:scale-105"
          href={props.href}
          target="_blank"
        >
          <p className="font-inter font-semibold text-lg text-blue-500">{ props.label }</p>
        </a>
        <div className="flex flex-col items-center justify-center ml-2 py-2 px-4 transition duration-300 hover:bg-blue-600 rounded cursor-pointer">
          <i className="far fa-times text-2xl text-gray-100" />
        </div>
      </div>
    </div>
  )

}
