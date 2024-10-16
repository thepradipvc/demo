import Image from "next/image";
import React from "react";
import heroImage from "../../../assets/home-page/hero.png";

function index() {
  return (
    <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
      <div className="py-6 md:order-1 md:block">
        <Image
          src={heroImage}
          alt="Astronaut in the air"
          width={"600"}
          sizes="(max-width: 800px) 100vw, 620px"
        />
      </div>
      <div>
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
          Building digital products & brands with Lnkr.store
        </h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          Lnkr provides a complete solution for creators, entrepreneurs &
          influencers to set up digital storefronts, sell digital products, and
          offer services like coaching or courses.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="https://app.lnkr.store/auth/register"
            className="btn btn-primary mt-8 bg-black text-white py-4 px-6 rounded-xl font-bold text-center"
            rel="noopener"
          >
            Launch Now
          </a>
        </div>
      </div>
    </main>
  );
}

export default index;
