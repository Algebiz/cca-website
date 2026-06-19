"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout384() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Assessment</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            Validate your Chinese proficiency
          </h1>
          <p className="text-medium">
            Standardized tests recognized worldwide for language achievement
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <Card className="flex flex-col">
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Beginner</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Youth Chinese Test for new learners
                </h2>
                <p>YCT levels one through four measure CSL student progress</p>
              </div>
              <div className="mt-5 md:mt-6">
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
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="size-full object-cover"
              />
            </div>
          </Card>
          <Card className="grid auto-cols-fr grid-cols-1 flex-col sm:grid-cols-2 lg:col-span-2">
            <div className="block p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Advanced</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  HSK for heritage speakers
                </h2>
                <p>
                  Internationally recognized certification for CHL students
                  advancing
                </p>
              </div>
              <div className="mt-5 md:mt-6">
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
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-bento-portrait2.svg"
                alt="Relume placeholder image 2"
                className="size-full object-cover"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
