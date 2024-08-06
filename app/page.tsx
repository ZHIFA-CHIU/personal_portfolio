import Experience from "@/components/Experience";
import SideHustles from "@/components/SideHustles";
import Recommendations from "@/components/Recommendations";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Zhifa's DevFolio",
  description: "",
};

export default async function Home() {
  return (
    <>
      <Experience />
      <SideHustles />
      <Recommendations />
      <Newsletter />
    </>
  );
}
