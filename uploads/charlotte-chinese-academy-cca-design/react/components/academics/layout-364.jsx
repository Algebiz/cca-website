"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout364() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Heritage</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Chinese home language for native speakers
            </h2>
            <p className="text-medium">
              Eleven levels of instruction in simplified Chinese with Pinyin.
              Classes meet every Sunday morning from 9 to 11 AM, designed for
              students who already speak Chinese at home and want to develop
              reading and writing skills.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          <Card className="p-6 md:p-8 lg:p-12">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/school.svg"
                />
              </div>
              <h3 className="mb-5 text-h3 font-bold md:mb-6">
                CHL01 kindergarten through first grade
              </h3>
              <p>
                Foundation in reading, writing, and character recognition for
                young learners.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button variant="secondary">View</Button>
              <Button
                iconRight={<ChevronRight className="text-scheme-text" />}
                variant="link"
                size="link"
              >
                →
              </Button>
            </div>
          </Card>
          <Card className="p-6 md:p-8 lg:p-12">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/school.svg"
                />
              </div>
              <h3 className="mb-5 text-h3 font-bold md:mb-6">
                CHL02 through CHL10 advancing by grade level
              </h3>
              <p>
                Progressive curriculum building fluency, composition skills, and
                cultural literacy through middle and high school.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button variant="secondary">View</Button>
              <Button
                iconRight={<ChevronRight className="text-scheme-text" />}
                variant="link"
                size="link"
              >
                →
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
