"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export function Layout407() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Schedule</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Sunday classes every week at Providence Day School
            </h2>
            <p className="text-medium">
              Language instruction runs nine to eleven in the morning.
              Enrichment classes follow in one-hour blocks.
            </p>
          </div>
        </div>
        <Tabs defaultValue="tab-one">
          <div>
            <TabsContent
              value="tab-one"
              className="data-[state=active]:animate-tabs"
            >
              <div className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="size-full rounded-image object-cover"
                  alt="Relume placeholder image 1"
                />
              </div>
            </TabsContent>
            <TabsContent
              value="tab-two"
              className="data-[state=active]:animate-tabs"
            >
              <div className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="size-full rounded-image object-cover"
                  alt="Relume placeholder image 2"
                />
              </div>
            </TabsContent>
            <TabsContent
              value="tab-three"
              className="data-[state=active]:animate-tabs"
            >
              <div className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="size-full rounded-image object-cover"
                  alt="Relume placeholder image 3"
                />
              </div>
            </TabsContent>
          </div>
          <TabsList className="mt-12 flex-col md:mt-16 md:flex-row">
            <TabsTrigger
              value="tab-one"
              className="w-full flex-col items-center justify-center rounded-none border-0 border-t-[1.5px] px-6 py-4 text-center whitespace-normal data-[state=active]:bg-transparent"
            >
              <h3 className="text-h6 font-bold">Program type</h3>
              <p>
                Chinese Home Language and Chinese as Second Language meet
                Sundays from nine to eleven AM for two hours
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="w-full flex-col items-center justify-center rounded-none border-0 border-t-[1.5px] px-6 py-4 text-center whitespace-normal data-[state=active]:bg-transparent"
            >
              <h3 className="text-h6 font-bold">First enrichment</h3>
              <p>
                Art, dance, chess, math, and critical thinking classes run
                Sundays from eleven AM to noon for one hour
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="w-full flex-col items-center justify-center rounded-none border-0 border-t-[1.5px] px-6 py-4 text-center whitespace-normal data-[state=active]:bg-transparent"
            >
              <h3 className="text-h6 font-bold">Second enrichment</h3>
              <p>
                Continuation enrichment classes meet Sundays from noon to one PM
                for one hour of instruction
              </p>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}
