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
            Find answers to common questions about registration and enrollment.
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
                  When does registration open?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Registration opens April 1 and closes June 30 each year.
                  Classes begin in September. We recommend registering early as
                  popular levels fill quickly.
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
                  How much is tuition?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Language classes cost $500-700 per year. Enrichment classes
                  vary in price. A $100 refundable volunteer deposit is required
                  per family.
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
                  Can I change classes after registering?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Class changes are subject to availability. Contact us before
                  the second class session to request a change. We'll do our
                  best to accommodate your needs.
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
                  What is the volunteer deposit?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  The $100 family deposit is fully refundable after completing
                  one volunteer activity. This supports our community and helps
                  offset costs.
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
                  What if my class is full?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We maintain a waitlist for full classes. You'll have 48 hours
                  to register when a spot opens. We'll notify you immediately if
                  space becomes available.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">
            Are sibling discounts available?
          </h4>
          <p className="text-medium">
            Contact us about sibling pricing options. We value families and work
            to make enrollment accessible for multiple children.
          </p>
          <div className="mt-6 md:mt-8">
            <Button
              title="Is financial assistance available?"
              variant="secondary"
            >
              Is financial assistance available?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
