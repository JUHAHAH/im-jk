import { portfolio } from '@/constants';
import { Card, CardContent } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

const Portfolio = () => {
  return (
    <div className="mt-6">
      <Carousel className="flex m-4">
        <CarouselContent>
          {portfolio.map((index) => (
            <Dialog key={index.id}>
              <CarouselItem>
                <DialogTrigger>
                  <div className="flex items-center font-galmuri14 text-xl mb-1">
                    {index.title}
                    <div className="text-xs font-galmuri11 text-zinc-400 mt-2 pl-2">
                      {index.date}
                    </div>
                  </div>
                  <Card>
                    <CardContent className="aspect-video flex p-6">
                      <img
                        src={index.images[0]}
                        alt={index.title}
                        className="object-cover"
                      />
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{index.title}</DialogTitle>
                    <DialogDescription>{index.description}</DialogDescription>
                    {index.detail && (
                      <div dangerouslySetInnerHTML={{ __html: index.detail }} />
                    )}
                    <br />
                    <br />
                    {index.environment && (
                      <div
                        dangerouslySetInnerHTML={{ __html: index.environment }}
                      />
                    )}
                  </DialogHeader>
                </DialogContent>
              </CarouselItem>
            </Dialog>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Portfolio;
