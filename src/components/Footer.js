export const Footer = (props) => {
  
    return (
      
      <div className="md:px-16 px-4 pb-16 pt-16 text-center">
        <div className="mt-4 flex flex-row items-center justify-center">
          <a target="_blank" href="/github" className="h-16 w-8 flex flex-row items-center justify-center mr-7 fab fa-github text-3xl text-gray-500"></a>
          <a target="_blank" href="/server" className="h-16 w-8 flex flex-row items-center justify-center mr-7 fab fa-discord text-3xl text-gray-500"></a>
          <a target="_blank" href="/twitter" className="h-16 w-8 flex flex-row items-center justify-center mr-7 fab fa-twitter text-3xl text-gray-500"></a>
          <a target="_blank" href="/linkedin" className="h-16 w-8 flex flex-row items-center justify-center mr-7 fab fa-linkedin text-3xl text-gray-500"></a>
        </div>
        <div class="px-2 pt-2 pb-3 flex flex-row items-center justify-center">
          <span className="flex flex-row items-center justify-center cursor-pointer font-lg font-bold text-gray-500 mr-8" href="/team">Team</span>
          <span className="flex flex-row items-center justify-center cursor-pointer font-lg font-bold text-gray-500 mr-8" href="/partners">Partners</span>
          <span className="flex flex-row items-center justify-center cursor-pointer font-lg font-bold text-gray-500 mr-8" href="/privacy">Privacy Policy</span>
          <span className="flex flex-row items-center justify-center cursor-pointer font-lg font-bold text-gray-500 mr-8" href="/terms">Terms</span>
        </div>
        <p className="font-medium text-medium inter text-gray-500 font-bold">developed by <a href="https://codebyte.team/" target="_blank" className="text-gray-600 font-bold">teamcodebyte</a> and our <a href="https://github.com/teamcodebyte" target="_blank" className="text-gray-600 font-bold">opensource community</a></p>
     </div>
    )
  }
