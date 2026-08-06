import Hero from "@/components/sections/Hero";
import Principal from "@/components/sections/Principal";
import VisiMisi from "@/components/sections/VisiMisi";
import Activities from "@/components/sections/Activities";
import Admission from "@/components/sections/Admission";
import News from "@/components/sections/News";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative w-full bg-surface">
        <Principal />
        <VisiMisi />
      </div>
      <Activities />
      <Admission />
      <News />
    </>
  );
}