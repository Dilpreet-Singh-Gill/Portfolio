import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-center px-4 text-center">
      <motion.img
        src="/me.jpg"
        alt="Dilpreet"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-purple-500 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      />
      <h1 className="text-3xl sm:text-4xl font-bold">Dilpreet Singh Gill</h1>
      <p className="text-lg sm:text-xl text-purple-400 mt-2">
        Web Developer | React | Full-Stack
      </p>
    </section>
  );
}
