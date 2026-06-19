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
            <p className="mb-3 font-semibold md:mb-4">Contribute</p>
            <h2 className="text-h2 font-bold">
              Why volunteer? 为什么加入我们?
            </h2>
          </div>
          <div>
            <p className="mb-6 text-medium md:mb-8">
              CCA runs on community. Teachers, parents, and students all
              contribute their time and effort every Sunday to deliver an
              exceptional cultural learning experience. Volunteering is a way to
              connect with the Chinese-American community, share your skills,
              and build your service record for school, college, or personal
              growth.
            </p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">Community</h6>
                <p>Every Sunday, volunteers make CCA possible.</p>
              </div>
              <div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">Growth</h6>
                <p>Build your record while serving others.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn" variant="secondary">
                Learn
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
        </div>
      </div>
    </section>
  );
}
