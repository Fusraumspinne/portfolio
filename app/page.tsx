import LiquidGlass from "@/components/LiquidGlass";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { Grid } from "@/components/Grid";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { TimeLine } from "@/components/TimeLine";

export default function Home() {
  return (
    <div className="bg-slate-950">
      <NavBar/>
      <div id="home">
        <Hero/>
      </div>
      <div className="mx-4">
        <div id="about">
          <Grid/>
        </div>
        <div id="experience">
         <Experience/>
        </div>
        <div id="timeline">
          <TimeLine/>
        </div>
      </div>
      <Footer/>

      <LiquidGlass/>
    </div>
  );
}
