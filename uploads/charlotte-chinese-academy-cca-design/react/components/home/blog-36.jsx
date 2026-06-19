"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Blog36() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Short heading goes here
            </h2>
            <p className="text-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-23.jpg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Category</Badge>
                <p className="inline text-small font-semibold">5 min read</p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="text-h5 font-bold">
                  Blog title heading will go here
                </h2>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Read more
              </Button>
            </div>
          </Card>
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-47.jpg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Category</Badge>
                <p className="inline text-small font-semibold">5 min read</p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="text-h5 font-bold">
                  Blog title heading will go here
                </h2>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Read more
              </Button>
            </div>
          </Card>
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-6.jpg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Category</Badge>
                <p className="inline text-small font-semibold">5 min read</p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="text-h5 font-bold">
                  Blog title heading will go here
                </h2>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Read more
              </Button>
            </div>
          </Card>
        </div>
        <div className="flex items-center justify-center">
          <Button
            title="View all"
            variant="secondary"
            className="mt-12 md:mt-18 lg:mt-20"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
