"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Add } from "relume-icons";

export function Faq4() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">FAQ</h2>
          <p className="text-medium">
            Common questions about Charlotte Chinese Academy
          </p>
        </div>
        <Accordion type="multiple">
          <div className="grid items-start justify-items-stretch gap-4">
            <Card>
              <AccordionItem
                value="item-0"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  What grades does CCA serve?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Charlotte Chinese Academy serves students from kindergarten
                  through twelfth grade. We offer 11 levels of Chinese heritage
                  language instruction and 4 levels of Chinese as a second
                  language, ensuring appropriate placement for every student.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-1"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  When and where are classes held?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Classes meet every Sunday at Providence Day School, located at
                  5800 Sardis Road in Charlotte, North Carolina. Language
                  classes run from 9 to 11 in the morning, with enrichment
                  classes following from 11 in the morning to 1 in the
                  afternoon.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-2"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  How do I register?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Registration opens each spring for the following academic
                  year. Visit our Admissions page to complete the five-step
                  registration process, which includes selecting your child's
                  language level and enrichment preferences. Early registration
                  is recommended as classes fill quickly.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-3"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  How much is tuition?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Tuition varies by program and number of classes selected. Our
                  Admissions page contains a detailed tuition fees table. We
                  also offer financial assistance for families who qualify,
                  ensuring cost is not a barrier to joining our community.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-4"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  Is CCA a nonprofit?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Yes. Charlotte Chinese Academy is a 501(c)(3) nonprofit
                  organization founded in 1999. All tuition and donations
                  support our mission to preserve Chinese culture and serve the
                  Charlotte community.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">
            What Chinese programs are offered?
          </h4>
          <p className="text-medium">
            We offer Chinese heritage language classes for native speakers,
            Chinese as a second language for learners, enrichment classes in
            dance, art, chess, and math, and exam preparation for YCT and HSK
            certifications. Our Academics page details all programs and levels.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Still have questions?" variant="secondary">
              Still have questions?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
