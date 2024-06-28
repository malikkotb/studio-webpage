"use client";
import Gallery from "@/components/Gallery";
import Icon from "@/components/Icon";
import { delay, motion } from "framer-motion";
export default function Home() {
  return (
    <main>
      <section className="h-[75vh] items-center flex mx-auto justify-center">
        <div className="-mt-40 sm:-mt-0 px-8 md:px-48">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-medium leading-tight text-[8vw] sm:text-[5vw] text-center"
          >
            A brand and product designer working with clients globally
          </motion.p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="sm:flex hidden px-12 sm:px-0 flex-col sm:flex-row py-10 gap-2 justify-center items-center"
          >
            <div>Expertise</div>
            <Icon title="Branding" />
            <Icon title="Product" />
            <Icon title="Design Systems" />
          </motion.div>
        </div>
      </section>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <Gallery />
      </motion.div>
      {/* <section className="h-[200vh] bg-green-200"></section> */}
    </main>
  );
}
