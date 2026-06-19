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
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Questions</h2>
          <p className="text-medium">
            Find answers to common questions about Charlotte Chinese Academy.
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
                  When was CCA founded?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Charlotte Chinese Academy was established in 1999 by
                  Chinese-American families in Charlotte, North Carolina. For
                  over twenty-five years, we have been teaching the language and
                  culture to students across the region.
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
                  Is CCA affiliated with government?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  CCA is a 501(c)(3) nonprofit organization and is not
                  affiliated with any government agency. We are an independent
                  educational institution run entirely by volunteers and
                  community members who believe in our mission.
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
                  Who runs CCA?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  CCA is built by parents and run by volunteers from our
                  community. Our school council provides leadership and
                  direction, while dedicated teachers and staff members work
                  every Sunday to serve our students.
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
                  Where exactly is CCA located?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We hold classes every Sunday at Providence Day School, 5800
                  Sardis Road, Charlotte, North Carolina 28270. Parking is
                  available on campus, and we are easily accessible from I-77
                  via the Tyvola Road exit.
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
                  How many students does CCA have?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Charlotte Chinese Academy serves over 300 students annually,
                  ranging from kindergarten through twelfth grade. Our
                  enrollment continues to grow as more families recognize the
                  value of preserving Chinese language and culture.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">More questions?</h4>
          <p className="text-medium">
            Reach out to us directly for additional information.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
