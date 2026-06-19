"use client";

import React from "react";

export function Gallery1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container flex flex-col items-center text-center">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">Our location</h2>
            <p className="text-medium">
              Find us at Providence Day School in Charlotte.
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-8">
          <a href="#" className="size-full">
            <div className="w-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="aspect-video size-full rounded-image object-cover"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
