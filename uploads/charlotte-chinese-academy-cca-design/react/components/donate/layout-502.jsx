"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout502() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="md:mb-18 mx-auto mb-12 w-full max-w-lg text-center md:w-auto lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Support</p>
          <h1 className="text-h2 mb-5 font-bold md:mb-6">
            Why your donation matters
          </h1>
          <p className="text-medium">
            Charlotte Chinese Academy operates as a nonprofit organization, and
            the gap between tuition and actual program costs is filled by donors
            like you. Every dollar you give goes directly to teacher training,
            cultural events, classroom materials, and keeping our doors open.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <Button title="Learn" variant="secondary">
              Learn
            </Button>
            <Button
              title="→"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              →
            </Button>
          </div>
        </div>
        <Tabs defaultValue="tab-one">
          <TabsList className="mb-12 items-center gap-6 md:mb-16 md:justify-center">
            <TabsTrigger
              value="tab-one"
              className="data-[state=active]:border-scheme-text rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=inactive]:border-transparent data-[state=active]:bg-transparent"
            >
              The mission
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="data-[state=active]:border-scheme-text rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=inactive]:border-transparent data-[state=active]:bg-transparent"
            >
              The impact
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="data-[state=active]:border-scheme-text rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=inactive]:border-transparent data-[state=active]:bg-transparent"
            >
              The community
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="rounded-image w-full object-cover"
                  alt="Relume placeholder image 1"
                />
              </div>
              <div>
                <p className="mb-3 font-semibold md:mb-4">Heritage</p>
                <h2 className="text-h3 mb-5 font-bold md:mb-6">
                  This is not just a school
                </h2>
                <p>
                  It is a bridge between children and their heritage. Your
                  donation is the choice to keep that bridge standing.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Donate" variant="secondary">
                    Donate
                  </Button>
                  <Button
                    title="→"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    →
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="rounded-image w-full object-cover"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div>
                <p className="mb-3 font-semibold md:mb-4">Heritage</p>
                <h2 className="text-h3 mb-5 font-bold md:mb-6">
                  This is not just a school
                </h2>
                <p>
                  It is a bridge between children and their heritage. Your
                  donation is the choice to keep that bridge standing.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Donate" variant="secondary">
                    Donate
                  </Button>
                  <Button
                    title="→"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    →
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="rounded-image w-full object-cover"
                  alt="Relume placeholder image 3"
                />
              </div>
              <div>
                <p className="mb-3 font-semibold md:mb-4">Heritage</p>
                <h2 className="text-h3 mb-5 font-bold md:mb-6">
                  This is not just a school
                </h2>
                <p>
                  It is a bridge between children and their heritage. Your
                  donation is the choice to keep that bridge standing.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Donate" variant="secondary">
                    Donate
                  </Button>
                  <Button
                    title="→"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    →
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
