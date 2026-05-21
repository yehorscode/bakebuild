import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomeGallery() {
  const images = [
    "https://placehold.co/1920x1080",
    "https://placehold.co/1920x1080",
    "https://placehold.co/1920x1080",
    "https://placehold.co/1920x1080",
    "https://placehold.co/1920x1080",
    "https://placehold.co/1920x1080",
  ];
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="mx-auto w-full max-w-6xl"
    >
      <CarouselContent className="-ml-2">
        {Array.from(images).map((image, index) => (
          <CarouselItem key={index} className="pl-2 sm:basis-1/2 lg:basis-1/3">
            <Card className="overflow-hidden border-0 bg-transparent shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-4/3 w-full ">
                  <img
                    src={image}
                    alt={`Past workshop ${index + 1}`}
                    className="h-full w-full select-none object-cover"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 bg-black/50 text-white hover:bg-black/70 sm:-left-6" />
      <CarouselNext className="right-2 bg-black/50 text-white hover:bg-black/70 sm:-right-6" />
    </Carousel>
  );
}
