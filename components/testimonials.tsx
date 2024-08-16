import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Don't take our word for it</h2>
            <p className="text-xl text-gray-400">
              Discover what our community has to say about the GTV Logo NFTs and
              the GreenTV DAO program.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src={TestimonialImage01}
                    width={48}
                    height={48}
                    alt="Testimonial 01"
                  />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                "I’m thrilled to own a GTV Logo NFT! It’s not just a digital
                asset; it represents my commitment to sustainability. Being part
                of the GreenTV DAO has connected me with like-minded individuals
                who are passionate about making a difference. The exclusive
                access to events and decision-making is a game-changer!"
              </blockquote>
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src={TestimonialImage02}
                    width={48}
                    height={48}
                    alt="Testimonial 02"
                  />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                "The GTV Logo NFT is a fantastic investment! With only 420
                available, I knew I had to act fast. The potential for
                profit-sharing and governance participation makes it more than
                just a collectible; it’s a stake in a groundbreaking project. I
                can’t wait to see how this community evolves!"
              </blockquote>
            </div>

            {/* 3rd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src={TestimonialImage03}
                    width={48}
                    height={48}
                    alt="Testimonial 03"
                  />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                "Joining the GreenTV DAO through the GTV Logo NFT has been an
                incredible experience! I love having early access to meme
                battles and exclusive content. It feels amazing to be part of a
                community that values creativity and innovation while promoting
                sustainability. I’m excited for what’s to come!"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
