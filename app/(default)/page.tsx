export const metadata = {
  title: "GreenTV DAO",
  description:
    "Unlock exclusive VIP access to the GreenTV DAO with our limited edition GTV Logo NFTs. As one of only 420 available, this NFT is your ticket to early participation, unique content, and a stake in the future of the GreenTV DAO. Enjoy exclusive benefits, community involvement, and the potential for long-term value. Don't miss out on this rare opportunity to be part of a groundbreaking project at the intersection of environmental innovation and digital culture. Secure your GTV Logo NFT today and join us on this exciting journey!",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Hero />
      {/* <Features /> */}
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  );
}
