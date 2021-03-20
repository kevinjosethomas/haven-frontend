
export const TargetCard = props => {

  return (
    <div className="TargetCard flex flex-col items-center justify-between w-64 md:w-56 lg:w-card-target-lg 2xl:w-card-target-2xl 3xl:w-card-target h-96 md:h-80 lg:h-96 2xl:h-card-target-2xl 3xl:h-card-target
    cursor-default rounded transform transition duration-500 hover:scale-103">
      <div className="flex flex-row items-end justify-start px-10 py-6 w-full h-1/4 bg-light-300 bg-opacity-50 rounded-t">
        <i className={`${props.icon} mr-1 text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl ${props.color}`} />
        <h1 className="ml-1 font-acumin font-semibold text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl text-gray-700">{ props.title }</h1>
      </div>
      <div className="flex flex-col items-start justify-center px-5 lg:px-10 w-full h-3/4 bg-light-300 bg-opacity-20 space-y-5 rounded-b">
        { props.content.map(item => (
          <div key={item.text} className="font-inter font-medium text-md md:text-xs lg:text-md xl:text-xl 3xl:text-2xl text-gray-500">
            <span className="text-gray-700">•</span> <span className={item.decoration}>{ item.text }</span>
          </div>
        ))}
      </div>
    </div>
  )

}
