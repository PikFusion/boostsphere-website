import { useReveal } from "@/hooks/use-reveal";
import { Section, SectionLabel } from "./primitives";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";

const REVIEWS = [
  {
    content: "BoostSphere Digital has handled our digital marketing, social media, GMB ranking, and lead generation very professionally. We’re happy with the results and have built a strong online presence with good enquiries.",
    author: "Preschool Owner",
    company: "Bangalore",
  },
  {
    content: "BoostSphere Digital helped us improve our brand presence and generate quality gym leads. Their digital marketing work was professional and effective. We’re really happy with the results and would definitely recommend them!",
    author: "Saleem",
    company: "Founder, F3 Fitness gym",
  },
  {
    content: "Great experience with BoostSphere Digital. They improved our online presence and helped us get more genuine enquiries for our fitness center.",
    author: "Fitness center",
    company: "Bangalore",
  },
  {
    content: "Since working with BoostSphere Digital, our revenue has doubled in just 3 months. Darshan is very responsible and professional, and the team has done a great job with our marketing. Really happy with the results!",
    author: "MAVYS Unisex Salon",
    company: "Bangalore",
  },
  {
    content: "We worked with BoostSphere Digital for performance marketing and saw a great improvement in our sales and brand awareness. We’re really happy with the results and their overall support",
    author: "E-Commerce Brand",
    company: "UAE",
  },
  {
    content: "We’re happy to have associated with this Team Boostsphere for the past 3 months for our digital marketing and social media activities. Their team has been supportive, creative, and responsive throughout.\nSpecial appreciation to Mr. Darshan for his excellent coordination and support, and to Mr. Mohammed for helping us during the initial stage.\nWe truly appreciate their efforts and wish the team continued success as they open their new office",
    author: "SARA Aviation Institute",
    company: "Bangalore",
  },
  {
    content: "We’ve had a great experience working with the team for our digital marketing and paid advertising. Their strategies have helped us achieve strong results, including a 4X ROI from our ad campaigns. The team is creative, responsive, and truly understands our business needs.\nHighly recommended for digital marketing and advertising!",
    author: "Time to Run",
    company: "London(UK)",
  },
  {
    content: "We’ve had a great experience working with Boostsphere Digital for the past 3 months. Their digital marketing and social media support has been professional, creative, and effective.\nWe truly appreciate their efforts and look forward to achieving more together. Wishing Boostsphere continued success",
    author: "Sara Group",
    company: "Bangalore",
  },
  {
    content: "From past 3 months This team is working for our digital marketing, social media, GMB ranking, and paid lead generation. We’ve seen a noticeable improvement in our online presence and enquiries. The team has been professional, responsive.",
    author: "SmartMiniMinds Preschool",
    company: "Bangalore",
  },
  {
    content: "BoostSphere Digital helped us with our social media videos for a short time, and the results were really good. They helped us create better content and reach more people. We were able to gain 10K+ followers initially,",
    author: "Ragoo’s Kitchen",
    company: "Bangalore",
  },
  {
    content: "We started working with BoostSphere Digital Recently. They are taking care of our social media and online ads. We can see good improvement in our reach and enquiries. good support whenever needed.",
    author: "Dolphin Groups",
    company: "Bangalore",
  },
  {
    content: "helped us with some social media content and videos for a short time. The work was good and we were happy with the support.",
    author: "Amuse Family Salon",
    company: "Bangalore",
  },
];

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  const plugin = useRef(
    AutoScroll({ speed: 1.2, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <Section id="testimonials">
      <div ref={ref}>
        <SectionLabel>Our Clients</SectionLabel>
        <h2 data-reveal className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05]">
          What Our Clients Say
        </h2>

        <div className="mt-14 w-full px-4 md:px-12 mx-auto relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {REVIEWS.map((review, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <figure
                    data-reveal
                    className="glass-panel flex h-full min-h-[320px] flex-col justify-between rounded-2xl p-8 transition-transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <blockquote className="text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
                      "{review.content.replace(/^["“]|["”]$/g, '')}"
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-3">
                      <div aria-hidden className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                        {review.author.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {review.author}
                        <span className="block text-xs text-muted-foreground mt-0.5">{review.company}</span>
                      </span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div data-reveal className="mt-16 flex flex-row items-center justify-center gap-4 md:gap-8 px-4">
          <div className="w-1/2 max-w-[315px] overflow-hidden rounded-2xl border border-border aspect-[9/16]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TubHfUDn8YQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-1/2 max-w-[315px] overflow-hidden rounded-2xl border border-border aspect-[9/16]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Y03y0uwfrb8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-1/2 max-w-[315px] overflow-hidden rounded-2xl border border-border aspect-[9/16]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xEpPoeHFJUw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </div>
    </Section>
  );
}