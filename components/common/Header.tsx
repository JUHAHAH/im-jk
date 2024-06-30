'use client';

const Header = () => {
  return (
    <div>
      <div className="fixed top-0 z-50 w-full">
        <div className="top-0 h-24 backdrop-blur-sm gradient-mask-b-40 bg-cover">
          <div className="flex justify-between items-center bg-gradient-to-b from-black text-xl p-2 pb-10">
            <div className="flex items-center">
              <a href="/" className="flex items-center px-2">
                <h1 className="text-2xl px-1 font-onesize">I'm JUHA</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
