import { Portrait } from '@/components/api/Spline';
import Main from '@/components/layouts/Main';
import Portfolio from '@/components/layouts/Portfolio';

const Home = () => {
  return (
    <div className="flex flex-col items-center snap-mandatory snap-y overflow-scroll scroll-smooth">
      <section className="h-screen font-ndgm mb-4 snap-start">
        <div className="flex flex-col xl:flex-row">
          <Portrait />
          <Main />
        </div>
      </section>

      <div className="snap-start">sss</div>

      <section className="h-screen snap-start">
        <Portfolio />
      </section>
    </div>
  );
};

export default Home;
