"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout47() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Mission</p>
            <h2 className="text-h2 font-bold">Our mission / 我们的使命</h2>
          </div>
          <div>
            <p className="mb-6 text-medium md:mb-8">
              CCA preserves Chinese language so it does not fade with distance
              or time. A child who speaks Chinese is a bridge between worlds.
            </p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  Built by parents
                </h6>
                <p>
                  Run by volunteers from our community who believe in what we
                  do.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  Sustained by community
                </h6>
                <p>
                  Families who understand the value of preserving language and
                  culture for the next generation.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn" variant="secondary">
                Learn
              </Button>
              <Button
                title="Arrow"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Arrow
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
