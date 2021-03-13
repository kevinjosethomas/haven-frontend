
export const HomeCard = props => {

  return (
    <div className="flex flex-col items-start justify-center m-4 p-8 w-96 h-96 bg-dark-200">
      <i className={`${props.icon} mb-2 text-5xl text-gray-300`} />
      <h2 className="my-2 font-inter font-bold text-4xl text-gray-300">{props.title}</h2>
      <p className="mt-2 font-inter font-medium text-2xl text-gray-400">{props.content}</p>
    </div>
  )

}
