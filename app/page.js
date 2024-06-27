import Gallery from "@/components/Gallery";
import Icon from "@/components/Icon";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main>
      <section className="h-screen flex justify-center items-center">
        <div className="">
          <p className="font-medium border-red leading-tight text-[5vw] w-[75vw] text-center">
            A brand and product <br /> designer working with
            <br /> clients globally
          </p>
          <div className="flex py-10 gap-2 justify-center items-center">
            <div>Expertise</div>
            <Icon title="Branding" />
            <Icon title="Product" />
            <Icon title="Design Systems" />
          </div>
        </div>
      </section>
      <Gallery />
      {/* <section className="h-[200vh] bg-green-200"></section> */}
    </main>
  );
}
