import sunset from "../assets/sunset.png";
import field from "../assets/field.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type WelcomeImage = {
  path: string;
  caption: string;
};

const imgPath: WelcomeImage[] = [
  { path: sunset, caption: "Beautiful sunset on our campus" },
  { path: field, caption: "Our competittion-level soccer field" },
];

const PublicImageSlider = () => {
  return (
    <div className="relative w-full flex justify-start">
      <Carousel className="w-full">
        <CarouselContent>
          {imgPath.map((item, index) => (
            <CarouselItem key={index}>
              <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-xl bg-white">
                <div className="relative w-full">
                  <img
                    src={item.path}
                    alt={item.caption}
                    className="w-full h-[550px] object-cover bg-black"
                  />

                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
                </div>

                <div className="px-6 py-4 text-sm text-gray-600 text-center">
                  {item.caption}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PublicImageSlider;
