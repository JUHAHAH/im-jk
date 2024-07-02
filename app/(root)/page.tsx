import { Portrait } from '@/components/api/Spline';
import AboutMe from '@/components/layouts/AboutMe';
import Main from '@/components/layouts/Main';
import Portfolio from '@/components/layouts/Portfolio';
import Statistics from '@/components/layouts/Statistics';

const Home = () => {
  return (
    <div className="flex flex-col items-center overflow-y-scroll h-screen">
      {/* MAIN */}
      <section className="h-screen font-ndgm snap-start">
        <div className="h-24 invisible"></div>
        <div className="flex flex-col xl:flex-row items-center">
          <Portrait />
          <Main />
        </div>
      </section>
      {/* ABOUT ME */}
      <section className="flex flex-col md:p-24 w-full max-w-[80rem]">
        {/* <div className="h-24 invisible snap-start"></div> */}
        <span className="font-ndgm text-4xl">&gt; About Me</span>
        <span className="font-galmuri11 text-[.8rem] leading-[0] pl-6 text-zinc-400 tracking-wide">
          My information
        </span>
        <AboutMe />
      </section>
      {/* PORTFOLIO */}
      <section className="flex flex-col md:p-24 w-full max-w-[80rem] md:mt-0 mt-24">
        {/* <div className="h-24 invisible snap-start"></div> */}
        <span className="font-ndgm text-4xl"> &gt; Portfolio</span>
        <span className="font-galmuri11 text-[.8rem] leading-[0] pl-6 text-zinc-400 tracking-wide">
          My works done so far
        </span>
        <Portfolio />
        <Statistics />
      </section>
    </div>
  );
};

export default Home;
