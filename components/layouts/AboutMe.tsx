'use client';

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
      <div className="flex w-full mt-6 p-0 relative">
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
      <div className="flex mt-6">
        <img
          className="h-40 mr-4"
          src="https://github-readme-stats.vercel.app/api?username=JUHAHAH&show_icons=true&theme=dark"
          alt="Harlok's WakaTime stats"
        />
        <img
          className="h-40"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&layout=compact&theme=dark"
          alt="Harlok's WakaTime stats"
        />
      </div>
    </div>
  );
};

export default AboutMe;
