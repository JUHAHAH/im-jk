import Main from '@/components/layouts/Main';
import Portfolio from '@/components/layouts/Portfolio';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="font-ndgm mb-4">
        <Main />
      </div>

      <div className="">
        <Portfolio />
      </div>
    </div>
  );
};

export default Home;
