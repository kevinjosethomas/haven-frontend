
export const ValueCard = props => {

  return (
    <div className="flex flex-col items-start justify-center m-4 p-8 w-72 md:w-64 xl:w-80 3xl:w-96 h-72 md:h-64 xl:h-80 3xl:h-96 space-y-2 3xl:space-y-4 bg-dark-200">
      <i className={`${props.icon} text-4xl md:text-2xl xl:text-4xl 3xl:text-5xl text-gray-300`} />
      <h2 className="font-inter font-bold text-2xl md:text-xl xl:text-3xl 3xl:text-4xl text-gray-300">{props.title}</h2>
      <p className="font-inter font-medium text-md xl:text-xl 3xl:text-2xl text-gray-400">{props.content}</p>
    </div>
  )

}
