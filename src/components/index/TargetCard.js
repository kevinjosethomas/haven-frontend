
export const TargetCard = props => {

  return (
    <div className="TargetCard flex flex-col items-center justify-between mx-12 w-96 w-card-target-large h-card-target-large">
      <div className="flex flex-row items-end justify-start px-10 py-6 w-full h-1/4 bg-light-400 bg-opacity-90">
        <i className={`${props.icon} mr-1 text-5xl text-gray-700`} />
        <h1 className="ml-1 font-acumin font-semibold text-5xl text-gray-700">{ props.title }</h1>
      </div>
      <div className="flex flex-col items-start justify-center px-10 w-full h-3/4 space-y-5 bg-light-400 bg-opacity-50">
        { props.content.map(item => (
          <p className="font-inter font-medium text-2xl text-gray-500">
            <span className="text-gray-600">•</span> <span className={item.decoration}>{ item.text }</span>
          </p>
        ))}
      </div>

    </div>
  )

}
