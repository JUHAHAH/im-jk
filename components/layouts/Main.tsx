'use client';

import EmailIcon from '@/public/img/email.svg';
import GithubIcon from '@/public/img/stack/github.svg';
import NotionIcon from '@/public/img/stack/notion.svg';
import { Typewriter } from 'nextjs-simple-typewriter';
import { Toaster, toast } from 'sonner';
import { Button } from '../ui/button';

// confirm 후 클립보드 복사 실행
const handleCopyButton = () => {
  setTimeout(async () => {
    await copyClipboard();
  }, 500);
};

// 클립보드 복사 함수
const copyClipboard = async () => {
  try {
    await navigator.clipboard.writeText('juha0227@gmail.com');
    toast.success('Copied to clipboard!');
  } catch (err) {
    alert('실패!');
  }
};

const Main = () => {
  return (
    <div className="flex items-center leading-[2.8rem] p-4 w-[32rem] md:w-auto xl:h-[80vh]">
      <div className="font-pretendard text-[4.2rem]">
        <div className="font-bold ">
          Hello! <div className="m-3 md:hidden"></div>
          I'm JUHA KIM
        </div>
        <div className="font-ndgm text-[2.8rem] font-normal mt-2 ml-1">
          I AM.. &#60;
          <span className="cgreen">
            D
            <Typewriter
              words={['eveloper', 'esigner']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={2400}
            />
          </span>
          &#62;
        </div>
        <div className="font-pretendard text-sm font-thin italic">
          <div>
            I might lack in experience but I can learn,{' '}
            <span className="font-normal">ready</span> to partake in your
            buisness.
          </div>
          <div>
            I am <span className="font-normal">full-stack developer</span>{' '}
            specialized in <span className="font-normal">Java</span> or{' '}
            <span className="font-normal">React</span> projects.
          </div>
        </div>
        <div className="mt-1 flex">
          <a href="https://github.com/JUHAHAH" className="mr-4">
            <Button
              variant="outline"
              className="outline-1 border-white rounded-full p-1 h-8"
            >
              <GithubIcon fill="white" />
              <span className="m-5">Github</span>
            </Button>
          </a>
          <a
            href="https://www.notion.so/7d34178ed44448f39e6b5dd6bacc8afa"
            className="mr-4"
          >
            <Button
              variant="outline"
              className="outline-1 border-white rounded-full p-1 pl-2 h-8"
            >
              <NotionIcon fill="white" />
              <span className="m-5">Notion</span>
            </Button>
          </a>
          <button
            onClick={handleCopyButton}
            className="items-center mt-[1.2rem] bg-white rounded-full p-1 h-8 max-w-8 hover:max-w-96 inline-flex overflow-hidden w-auto transition-all duration-500"
          >
            <span className="pl-[0.1rem] md:pl-[0.25rem]">
              <EmailIcon width={16} />
            </span>
            <span className="text-black whitespace-nowrap font-pretendard font-bold text-sm mx-2">
              juha0227@gmail.com
            </span>
            <Toaster richColors />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
