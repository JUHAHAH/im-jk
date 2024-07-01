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
              <CarouselItem className="xl:basis-1/2">
                <DialogTrigger>
                  <Card>
                    <CardContent className="relative aspect-video flex p-6">
                      <img
                        src={index.images[0]}
                        alt={index.title}
                        className="object-cover"
                      />
                      <div className="absolute border-red-400 border-2 flex w-90 h-90">
                        {index.date}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>{index.description}</DialogDescription>
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
