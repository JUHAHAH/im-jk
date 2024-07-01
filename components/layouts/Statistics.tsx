'use client';

import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

const Statistics = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem className="basis-[1cqw/1cqh]">
          <img
            className="h-40 mr-4"
            src="https://github-readme-stats.vercel.app/api?username=JUHAHAH&show_icons=true&theme=dark"
            alt="Harlok's WakaTime stats"
          />
        </CarouselItem>
        <CarouselItem className="basis-[1cqw/1cqh]">
          <img
            className="h-40 mr-4"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&layout=compact&theme=dark"
            alt="Harlok's WakaTime stats"
          />
        </CarouselItem>
        <CarouselItem className="basis-[1cqw/1cqh]">
          <img
            className="h-40 mr-4"
            src="https://cc-prod.scene7.com/is/image/CCProdAuthor/Photography%20Page%20JDI_marquee_tb?$pjpeg$&jpegSize=300&wid=1536"
            alt=""
          />
        </CarouselItem>
        <CarouselItem className="basis-[1cqw/1cqh]"></CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Statistics;
