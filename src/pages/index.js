import { Layout } from "../layouts/Default";
import { Footer } from "../components/global/Footer";
import { ValueCards, TargetCards } from "../utility/data";
import { ValueCard } from "../components/index/ValueCard";
import { TargetCard } from "../components/index/TargetCard";

const Index = props => {

  return (
    <Layout>
      <div className="flex flex-row items-center justify-end xl:py-14 2xl:pb-10">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-start justify-center">
            <i className="fas fa-key xl:text-10xl 2xl:text-11xl text-dark-200" />
            <h1 className="max-w-min font-acumin font-bold xl:text-10xl 2xl:text-11xl text-dark-200">Express yourself.</h1>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center 2xl:min-w-max">
          <img
            draggable="false"
            className="xl:w-xl-illustration 2xl:w-full"
            alt="Really cool header image... why is it not here"
            src="/images/home-landing-illustration.svg"
          />
        </div>
        <div className="bg-home absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-400" />
      </div>
      <div className="flex flex-col items-center justify-center pt-5 py-7 w-full bg-light-100">
        <h2 className="font-acumin font-semibold text-5xl text-gray-700">community developed; your data doesn't go for dimes</h2>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-section bg-dark-100">
        <div className="flex flex-row items-center justify-center flex-wrap max-w-7xl">
          { ValueCards.map(card => (
            <ValueCard 
              icon={card.icon}
              title={card.title}
              content={card.content}
            />
          )) }
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full h-section bg-light-200">
        <div className="flex flex-col items-start justify-center mr-10 max-w-5xl">
          <h1 className="mb-2 font-acumin font-bold xl:text-9xl 2xl:text-11xl text-gray-800 tracking-tight">Descriptive Profiles.</h1>
          <p className="mt-2 max-w-3xl font-inter font-medium xl:text-3xl 2xl:text-4xl text-gray-700">Show yourself the way you want to be seen, all with one short link.</p>
        </div>
        <img 
          draggable="false"
          className="ml-10"
          alt="Another cool image that shouldn't be missing"
          src="/images/home-profile-illustration.svg"
        />
      </div>
      <div className="flex flex-row items-center justify-center w-full h-section bg-light-100">
        <div className="flex flex-col items-start justify-center mr-10 max-w-5xl">
          <h1 className="mb-2 font-acumin font-bold text-11xl text-gray-800 tracking-tight">Custom Links.</h1>
          <p className="mt-2 max-w-3xl font-inter font-medium text-4xl text-gray-700">Create short, easily-accessible vanity links for events, profiles and more!</p>
        </div>
        <img 
          draggable="false"
          className="ml-10"
          alt="Here's another cool image that shouldn't be missing"
          src="/images/home-social-illustration.svg"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-section bg-light-200">
        <h1 className="mb-5 font-acumin font-bold text-9xl text-gray-800 tracking-tight">For...</h1>
        <div className="flex flex-row items-center justify-center mt-5 w-full">
          { TargetCards.map(card => (
            <TargetCard
              icon={card.icon}
              title={card.title}
              color={card.color}
              content={card.content}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-sm-section text-center bg-dark-100">
        <div className="flex flex-row items-center justify-center mb-2">
          <i className="fas fa-rocket-launch mr-2 text-9xl text-gray-300" />
          <span className="ml-2 font-acumin font-bold text-9xl text-gray-300">Get Started</span>
        </div>
        <p
          className="my-3 max-w-3xl font-inter font-medium text-4xl text-gray-400"
        >Create your profile to start meeting new people and showing off your work!</p>
        <div className="flex flex-col items-center justify-center mt-5 py-5 px-8 bg-blue-500 rounded cursor-pointer transform transition duration-500 hover:scale-105">
          <span className="font-inter font-medium text-3xl text-gray-100">Join Haven</span>
        </div>
      </div>
      <Footer />
    </Layout>
  );

}

export default Index;
