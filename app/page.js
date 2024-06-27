import Icon from "@/components/Icon";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main>
      <section className="h-screen flex justify-center items-center">
        <div>
          <p className="border font-medium border-red-500 leading-tight text-[8vh] w-[75vw] text-center">
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
      <section className="h-screen bg-red-300"></section>
      <section className="h-screen bg-red-300"></section>
    </main>
  );
}
