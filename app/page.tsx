import { Grid } from "@/components/Grid";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { TimeLine } from "@/components/Timeline";

export default function Home() {
  return (
    <div className="bg-slate-950">
      <NavBar/>
      <Hero/>
      <div className="mx-4">
        <Grid/>
        <TimeLine/>
      </div>
    </div>
  );
}
