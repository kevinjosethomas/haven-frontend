import { Layout } from "../layouts/Default";
import { Footer } from "../components/global/Footer";
import { ValueCards, TargetCards } from "../utility/data";
import { ValueCard } from "../components/index/ValueCard";
import { TargetCard } from "../components/index/TargetCard";
import { FeatureSection } from "../layouts/sections/Feature";

const Index = props => {

  return (
    <Layout>
      <div className="flex flex-row items-center justify-center md:justify-end py-20 md:py-5 2xl:py-10 3xl:py-14 3xl:pb-10 bg-blue-400 md:bg-transparent">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-start justify-center">
            <i className="fas fa-key text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl 3xl:text-11xl text-dark-200" />
            <h1 className="max-w-min font-acumin font-bold text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl 3xl:text-11xl text-dark-200">Express yourself.</h1>
          </div>
        </div>
        <div className="hidden md:flex flex-row items-center justify-center 3xl:min-w-max">
          <img
            draggable="false"
            className="xl:w-xl-illustration 3xl:w-full"
            alt="Really cool header image... why is it not here"
            src="/images/home-landing-illustration.svg"
          />
        </div>
        <div className="hidden md:block bg-home absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-400" />
      </div>
      <div className="flex flex-col items-center justify-center px-4 md:px-0 pt-5 py-7 w-full bg-light-100">
        <h2 className="font-acumin font-semibold text-center text-2xl lg:text-4xl 3xl:text-5xl text-gray-700">community developed; your data doesn't go for dimes</h2>
      </div>
      <div className="flex flex-col items-center justify-center py-10 md:py-0 w-full md:h-section lg:h-section-lg-alt 3xl:h-section bg-dark-100">
        <div className="flex flex-row items-center justify-center flex-wrap lg:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl">
          { ValueCards.map(card => (
            <ValueCard 
              key={card.title}
              icon={card.icon}
              title={card.title}
              content={card.content}
            />
          )) }
        </div>
      </div>
      <FeatureSection
        title="Descriptive Profiles."
        description="Show yourself the way you want to be seen, all with one short link."
        image="/images/home-profile-illustration.svg"
        background="bg-light-200"
      />
      <FeatureSection
        title="Custom Links."
        description="Create short, easily-accessible vanity links for events, profiles and more!"
        image="/images/home-social-illustration.svg"
        background="bg-light-100"
      />
      <div className="flex flex-col items-center justify-center w-full py-16 lg:py-0 lg:h-section-lg-alt 3xl:h-section bg-light-200">
        <h1 className="mb-5 font-acumin font-bold text-8xl md:text-9xl text-gray-800 tracking-tight">For...</h1>
        <div className="flex flex-col md:flex-row items-center justify-center mt-5 space-y-10 md:space-y-0 md:space-x-6 xl:space-x-12 w-full">
          { TargetCards.map(card => (
            <TargetCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              color={card.color}
              content={card.content}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full py-16 lg:py-0 lg:h-mini-section text-center bg-dark-100">
        <div className="flex flex-row items-center justify-center mb-2">
          <i className="fas fa-rocket-launch mr-2 text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-gray-300" />
          <span className="ml-2 font-acumin font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-gray-300">Get Started</span>
        </div>
        <p
          className="my-3 max-w-xl lg:max-w-2xl xl:max-w-3xl font-inter font-medium text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-400"
        >Create your profile to start meeting new people and showing off your work!</p>
        <a
        className="flex flex-col items-center justify-center mt-3 md:mt-5 py-3 lg:py-5 px-8 bg-blue-500 rounded cursor-pointer transform transition duration-500 hover:scale-105"
          href="https://discord.haven.bio/"
          target="_blank"
        >
          <span className="font-inter font-medium text-2xl xl:text-3xl text-gray-100">Join our Discord</span>
        </a>
      </div>
      <Footer />
    </Layout>
  );

}

export default Index;
