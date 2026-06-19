"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout369() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Roles</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Three ways to help
            </h2>
            <p className="text-medium">Find the role that fits your skills.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card className="grid grid-cols-1 sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-small font-semibold">Teaching</p>
                  <h3 className="mb-2 text-h5 font-bold">
                    Chinese language teacher / 中文语言课教师
                  </h3>
                  <p>
                    Lead classes Sunday 9-11AM. Training provided. Mandarin
                    proficiency required.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <Button
                    title="Apply"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Apply
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg"
                  alt="Relume placeholder image 3"
                  className="size-full object-cover"
                />
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-small font-semibold">Enrichment</p>
                  <h3 className="mb-2 text-h5 font-bold">
                    Enrichment class teacher / 才艺课讲师
                  </h3>
                  <p>Art, dance, chess, math, kung fu. Sunday 11AM-1PM.</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Apply"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Apply
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="size-full object-cover"
                />
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-small font-semibold">Enrichment</p>
                  <h3 className="mb-2 text-h5 font-bold">
                    Enrichment class teacher / 才艺课讲师
                  </h3>
                  <p>Art, dance, chess, math, kung fu. Sunday 11AM-1PM.</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Apply"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Apply
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                  className="size-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
