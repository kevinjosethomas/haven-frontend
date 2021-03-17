
export const ValueCard = props => {

  return (
    <div className="flex flex-col items-start justify-center m-4 p-8 w-80 xl:w-96 h-80 xl:h-96 space-y-2 xl:space-y-4 bg-dark-200">
      <i className={`${props.icon} text-4xl xl:text-5xl text-gray-300`} />
      <h2 className="font-inter font-bold text-3xl xl:text-4xl text-gray-300">{props.title}</h2>
      <p className="font-inter font-medium text-xl xl:text-2xl text-gray-400">{props.content}</p>
    </div>
  )

}
