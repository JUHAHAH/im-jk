import { Portrait } from '@/components/api/Spline';
import Main from '@/components/layouts/Main';
import Portfolio from '@/components/layouts/Portfolio';

const Home = () => {
  return (
    <div className="flex flex-col items-center overflow-y-scroll snap-y snap-proximity h-screen">
      <section className="h-screen font-ndgm snap-start">
        <div className="h-24 invisible"></div>
        <div className="flex flex-col xl:flex-row items-center">
          <Portrait />
          <Main />
        </div>
      </section>

      <section className="snap-start">
        <div className="h-24 invisible"></div>asd
      </section>

      <section className="snap-start">
        <div className="h-24 invisible"></div>
        <Portfolio />
        <p className="h-screen"></p>
      </section>
    </div>
  );
};

export default Home;
