
export const FeatureSection = props => {

  return (
    <div className={`flex flex-col md:flex-row items-center justify-center py-16 md:py-0 px-5 md:px-0 w-full h-auto md:h-section-lg 3xl:h-section ${props.background}`}>
      <div className="flex flex-col items-center md:items-start justify-center order-2 md:order-none md:mr-4 mt-4 md:mt-0 lg:mr-2 xl:mr-16 max-w-sm lg:max-w-xl 3xl:max-w-5xl">
        <h1 className="w-min mb-2 font-acumin font-bold text-5xl md:text-7xl lg:text-8xl 3xl:text-9xl 3xl:text-11xl text-gray-800 text-center md:text-left tracking-tight">{ props.title }</h1>
        <p className="mt-2 lg:max-w-xl 3xl:max-w-5xl font-inter font-medium text-xl md:text-2xl 3xl:text-3xl 3xl:text-4xl text-gray-700 text-center md:text-left">{ props.description }</p>
      </div>
      <img 
        draggable="false"
        className="order-1 md:order-none md:ml-4 mb-4 md:mb-0 lg:ml-2 xl:ml-16 w-64 lg:w-80 3xl:w-auto"
        alt="Another cool image that shouldn't be missing"
        src={props.image}
      />
    </div>
  )

}
