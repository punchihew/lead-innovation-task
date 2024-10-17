import Image from "next/image";
import Header from "./components/Header";
import Homes from "./components/homes";
import Contact from "./components/Contact";
import Plans from "./components/Plans";
import Resturant from "./components/ResturantText";
import MenuText from "./components/MenuText";
import Footer from "./components/Footer";






export default function Home() {
  return (
    <>
    
    <Header />
    <Homes/>
    <Contact/>
    <Plans/>
    <Resturant/>
    <MenuText/>
    <Footer/>
    
    </>
    

    
  );
}
