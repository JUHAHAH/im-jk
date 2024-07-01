'use client';

import { aboutMe } from '@/constants';
import { useEffect, useState } from 'react';
import { Chrono } from 'react-chrono';

const AboutMe = () => {
  const items = [
    {
      title: 'December 2016',
      cardTitle: 'Graduated from JIKS',
      cardSubtitle:
        'Graduated from, Jakarta International Korean School (2013.02 ~ 2016.12) in Indonesia. Capable of collaborate with people from various countries.',
    },
    {
      title: 'Feb 2024',
      cardTitle: 'Graduated from Songsil University',
      cardSubtitle:
        'Graduated from Soonsil University (2017.03 ~ 2024.02), majoring in Biomedical Engineering and Bioinformatics. Capable of analyzing database using linux and R Studio.',
    },
    {
      title: 'June 2026',
      cardTitle: 'KH Academy',
      cardSubtitle:
        'Participated in the KH Academy (2024.01 ~ 2024.06). Done two projects involving the development of a web application',
    },
    {
      title: 'Current',
      cardTitle: 'Developer for Hire',
      cardSubtitle: 'Looking for a job as a full-stack developer.',
    },
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <div className="mt-10 pl-6">
        <div className="text-3xl cgreen font-minecraft mt-5">BIO</div>
        {aboutMe.bio.map((info) => {
          return (
            <div className="flex items-center text-2xl font-ndgm">
              <span className="w-28">{info.name}</span>
              <span>:</span>
              <span className="mb-1 ml-2 font-galmuri14 text-lg">
                {info.detail}
              </span>
            </div>
          );
        })}
        <div className="text-3xl cgreen font-minecraft mt-5">FRONTEND</div>
        {aboutMe.skills.front.map((info) => {
          return (
            <div className="flex items-center text-2xl font-ndgm">
              <span className="w-36">{info.name}</span>
              <span>:</span>
              <span className="mb-1 ml-2 font-galmuri14 text-lg">
                {info.detail}
              </span>
            </div>
          );
        })}
        <div className="text-3xl cgreen font-minecraft mt-5">BACKEND</div>
        {aboutMe.skills.back.map((info) => {
          return (
            <div className="flex items-center text-2xl font-ndgm">
              <span className="w-36">{info.name}</span>
              <span>:</span>
              <span className="mb-1 ml-2 font-galmuri14 text-lg">
                {info.detail}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex w-full mt-16 p-0 relative">
        {isClient && (
          <Chrono
            items={items}
            disableToolbar={true}
            showAllCardsHorizontal
            cardWidth={400}
            cardHeight={20}
            mode="HORIZONTAL"
            slideShow
            theme={{
              primary: 'hsl(101, 80%, 43%)',
              secondary: 'black',
              cardBgColor: 'none',
              titleColor: 'hsl(212, 13%, 81%)',
              cardTitleColor: 'white',
              cardSubtitleColor: 'hsl(212, 13%, 81%)',
              titleColorActive: 'white',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AboutMe;
