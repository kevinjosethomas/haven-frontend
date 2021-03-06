import { useRouter } from "next/router";

export const Footer = (props) => {
    const router = useRouter();
    return (
        <div className="md:px-16 px-4 pb-16 pt-16 text-center">
        <div className="mt-4 items-center">
            <a target="_blank" href="/github" className="mr-6 github socialbtn fab fa-github text-3xl text-gray-500"></a>
            <a target="_blank" href="/server" className="socialbtn discord fab fa-discord text-3xl mr-6 text-gray-500"></a>
            <a target="_blank" href="/twitter" className="mr-6 twitter socialbtn  fab fa-twitter text-3xl text-gray-500"></a>
            <a target="_blank" href="/linkedin" className="mr-6 fontawesome socialbtn fab fa-linkedin text-3xl text-gray-500"></a>
        </div>
            <div class="px-2 pt-2 pb-3 space-y-1">
                <span className={`cursor-pointer font-lg font-bold ${router.pathname == "/team" ? "text-gray-500" : "text-gray-500"} mr-6`} >Team</span>
                <span className={`cursor-pointer font-lg font-bold ${router.pathname == "/partners" ? "text-gray-500" : "text-gray-500 "} mr-6`} >Partners</span>
                <span className={`cursor-pointer font-lg font-bold ${router.pathname == "/privacy" ? "text-gray-500" : "text-gray-500"} mr-6`} >Privacy Policy</span>
                <span className={`cursor-pointer font-lg font-bold ${router.pathname == "/terms" ? "text-gray-500" : "text-gray-500"} mr-6`} >Terms</span>
                </div>
        <p className="font-medium text-medium inter text-gray-500 font-bold">developed by <a href="https://codebyte.team/" target="_blank" className="darktext font-bold">teamcodebyte</a> and our <a href="https://github.com/teamcodebyte" target="_blank" className="darktext font-bold">opensource community</a></p>
        <div className="mb-16"></div>
    </div>
    )
  }
