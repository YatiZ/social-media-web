import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";


export default function Home() {
  return (
   <main className="">
    <Navbar />
    <hr/>
    <div className="flex md:flex-row flex-col">
    <SideBar />
    <Hero/>
    </div>

   </main>
  );
}
