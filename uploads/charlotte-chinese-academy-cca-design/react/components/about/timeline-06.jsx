"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { ChevronRight } from "relume-icons";

const Circle = () => {
  const circleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  return (
    <div className="absolute -ml-8 flex h-full w-8 items-start justify-center">
      <div
        ref={circleRef}
        className="relative z-20 mt-9 size-3.75 rounded-full shadow-[0_0_0_8px_var(--color-scheme-background)] backdrop-blur-3xl md:mt-12"
      >
        <div className="absolute inset-0 rounded-full bg-scheme-text/15" />
        <motion.div
          className="absolute inset-0 rounded-full bg-scheme-text"
          style={{ opacity }}
        />
      </div>
    </div>
  );
};

export function Timeline6() {
  return (
    <section className="overflow-clip px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="relative z-10 w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">History</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">Our journey</h2>
            <p className="text-medium">
              From a small group of families to a thriving institution, CCA has
              grown steadily while staying true to its roots.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Read" variant="secondary">
                Read
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
        <div className="grid w-full max-w-lg auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center">
          <div className="relative left-0 flex h-full w-8 flex-col items-center md:left-auto">
            <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-scheme-background to-transparent" />
            <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-scheme-text" />
            <div className="h-full w-[3px] bg-scheme-text/15" />
            <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-scheme-background" />
            <div className="absolute top-[-50vh] h-[50vh] w-full bg-scheme-background" />
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-y-8 sm:gap-12 md:gap-20">
            <div className="relative">
              <Circle />
              <Card className="ml-4 flex flex-col p-6 md:ml-12 md:p-8">
                <h3 className="mb-3 text-h3 font-bold md:mb-4">1999</h3>
                <h4 className="mb-3 text-h5 font-bold md:mb-4">
                  Founded by families
                </h4>
                <p>
                  Chinese-American families in Charlotte established CCA with a
                  simple belief: every child deserves to know their heritage.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button variant="secondary">Learn</Button>
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Arrow
                  </Button>
                </div>
              </Card>
            </div>
            <div className="relative">
              <Circle />
              <Card className="ml-4 flex flex-col p-6 md:ml-12 md:p-8">
                <h3 className="mb-3 text-h3 font-bold md:mb-4">2010s</h3>
                <h4 className="mb-3 text-h5 font-bold md:mb-4">
                  Growth and expansion
                </h4>
                <p>
                  Enrollment grew to over 300 students. Enrichment classes were
                  added to deepen cultural understanding beyond language.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button variant="secondary">Learn</Button>
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Arrow
                  </Button>
                </div>
              </Card>
            </div>
            <div className="relative">
              <Circle />
              <Card className="ml-4 flex flex-col p-6 md:ml-12 md:p-8">
                <h3 className="mb-3 text-h3 font-bold md:mb-4">2022</h3>
                <h4 className="mb-3 text-h5 font-bold md:mb-4">
                  PVSA recognition
                </h4>
                <p>
                  CCA became a Presidential Service Award certifying
                  organization, honoring student volunteer contributions to our
                  community.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button variant="secondary">Learn</Button>
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Arrow
                  </Button>
                </div>
              </Card>
            </div>
            <div className="relative">
              <Circle />
              <Card className="ml-4 flex flex-col p-6 md:ml-12 md:p-8">
                <h3 className="mb-3 text-h3 font-bold md:mb-4">2026</h3>
                <h4 className="mb-3 text-h5 font-bold md:mb-4">
                  Digital transformation
                </h4>
                <p>
                  An online registration platform launched, making it easier for
                  families to enroll and manage their student accounts.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button variant="secondary">Learn</Button>
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Arrow
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
