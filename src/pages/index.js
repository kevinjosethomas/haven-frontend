import { Layout } from "../layouts/Default";
import { HomeCard } from "../components/misc/HomeCard";

const Index = (props) => {

  return (
    <Layout>
      <div className="flex flex-row items-center justify-end pb-10">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-start justify-center">
            <i className="fas fa-key text-10xl text-dark-200" />
            <h1 className="max-w-min font-acumin font-bold text-10xl text-dark-200">Express yourself.</h1>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center min-w-max">
          <img
            draggable="false"
            alt="Really cool header image... why is it not here"
            src="/images/home-landing-illustration.svg"
          />
        </div>
        <div className="bg-home absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-400" />
      </div>
      <div className="flex flex-col items-center justify-center pt-5 py-7 w-full bg-light-100">
        <h2 className="font-acumin font-bold text-5xl text-gray-700">community developed; your data doesn't go for dimes</h2>
      </div>
      <div className="flex flex-col items-center justify-center py-20 w-full bg-dark-100">
        <div className="flex flex-row items-center justify-center flex-wrap max-w-7xl">
          <HomeCard
            icon="fas fa-id-card"
            title="Quirky Profiles"
            content="Create descriptive profiles from a range of customizable themes to express yourself and connect your online presence."
          />
          <HomeCard
            icon="far fa-link"
            title="Vanity Links"
            content="Providing free vanity links for your profiles and any websites, blogs or redirects that you want to show on posts and your bio!"
          />
          <HomeCard
            icon="far fa-code-merge"
            title="Opensource"
            content="Developed by the community, we’re as transparent as we can be. Get to know everything that’s going on behind the scenes."
          />
          <HomeCard
            icon="fas fa-plug"
            title="Integrated"
            content="Connect all your social media accounts in one place to make it easier for people to find you where you want to be found."
          />
          <HomeCard
            icon="fas fa-project-diagram"
            title="Connected"
            content="Making it easier to meet other likeminded people from all around the world. Easier to make new friends or get work done!"
          />
          <HomeCard
            icon="fas fa-door-open"
            title="Inclusive"
            content="Building a safe community, inclusive of everyone. Active Trust & Safety team, auto moderation and a lot more for your safety!"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center py-20 w-full bg-light-200">
        <div className="flex flex-col items-start justify-center mr-10 max-w-5xl">
          <h1 className="mb-2 font-acumin font-bold text-10xl text-gray-800 tracking-tight">Descriptive Profiles.</h1>
          <p className="mt-2 max-w-3xl font-inter font-medium text-4xl text-gray-700">Show yourself the way you want to be seen, all with one short link.</p>
        </div>
        <img 
          draggable="false"
          className="ml-10"
          alt="Another cool image that shouldn't be missing"
          src="/images/home-profile-illustration.svg"
        />
      </div>
      <div className="flex flex-row items-center justify-center py-20 w-full bg-light-100">
        <div className="flex flex-col items-start justify-center mr-10 max-w-5xl">
          <h1 className="mb-2 font-acumin font-bold text-10xl text-gray-800 tracking-tight">Concise Vanity URLs.</h1>
          <p className="mt-2 max-w-3xl font-inter font-medium text-4xl text-gray-700">Create short, easily-accessible vanity links for events, profiles, etc.</p>
        </div>
        <img 
          draggable="false"
          className="ml-10"
          alt="Here's another cool image that shouldn't be missing"
          src="/images/home-social-illustration.svg"
        />
      </div>
    </Layout>
  );

}

export default Index;
