"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout216() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Service</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Presidential service awards
            </h2>
            <p className="mb-6 text-medium md:mb-8">
              CCA is a PVSA certifying organization. The program paused in May
              2025 due to AmeriCorps changes but will resume when the program
              restarts. Keep tracking your hours.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-h2 font-bold">Ages 5-10</h3>
                <p>Bronze 26-49 hours, Silver 50-74 hours, Gold 75+ hours</p>
              </div>
              <div>
                <h3 className="mb-2 text-h2 font-bold">Ages 11-15</h3>
                <p>Bronze 50-74 hours, Silver 75-99 hours, Gold 100+ hours</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Learn more" variant="secondary">
                Learn more
              </Button>
              <Button
                title="Visit site"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Visit site
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
