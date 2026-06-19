"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout10() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Recognition</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              President's volunteer service award
            </h1>
            <p className="mb-6 text-medium md:mb-8">
              CCA is a certified PVSA organization. The program is paused as of
              May 27, 2025, but will resume. Keep tracking your hours—they will
              count toward official recognition.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/10k.svg"
                  />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">Award levels</h6>
                <p>
                  Kids 5-10: Bronze 26-49, Silver 50-74, Gold 75+. Teens 11-15:
                  Bronze 50-74, Silver 75-99, Gold 100+. Adults 26+: Bronze
                  100-249, Silver 250-499, Gold 500+.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/details.svg"
                  />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">Learn more</h6>
                <p>Visit presidentialserviceawards.gov for details.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Visit" variant="secondary">
                Visit
              </Button>
              <Button
                title="Explore"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Explore
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
