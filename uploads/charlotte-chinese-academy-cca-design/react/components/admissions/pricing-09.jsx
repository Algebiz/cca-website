"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Check } from "relume-icons";

export function Pricing9() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Costs</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">Tuition and fees</h1>
          <p className="text-medium">
            Everything you need to know about enrollment costs.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit items-center justify-center rounded-button border border-scheme-border bg-scheme-foreground p-1 group-data-[slot=card-flat]:border-transparent">
            <TabsTrigger
              value="monthly"
              className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:bg-transparent"
            >
              Annual
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:bg-transparent"
            >
              Yearly
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="mb-4 flex flex-col items-start justify-end">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/language.svg"
                    />
                  </div>
                  <h5 className="mb-2 text-h5 font-bold">Language class</h5>
                  <p>Per student per year</p>
                </div>
                <div className="text-right">
                  <h1 className="text-h1 font-bold">$500-700</h1>
                </div>
              </div>
              <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
              <p>Includes:</p>
              <div className="mt-4 mb-8 grid grid-cols-1 gap-x-6 gap-y-4 py-2 md:grid-cols-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Weekly Sunday classes</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Qualified native instructors</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Structured curriculum</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Progress assessments</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Community events</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Online registration</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Class materials</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Student support</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Flexible scheduling</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Access to resources</p>
                </div>
              </div>
              <div>
                <Button title="Register now" className="w-full">
                  Register now
                </Button>
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="mb-4 flex flex-col items-start justify-end">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/flight_class.svg"
                    />
                  </div>
                  <h5 className="mb-2 text-h5 font-bold">Enrichment class</h5>
                  <p>Additional per year</p>
                </div>
                <div className="text-right">
                  <h1 className="text-h1 font-bold">Varies</h1>
                  <p className="mt-2 font-medium">
                    Prices depend on class type
                  </p>
                </div>
              </div>
              <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
              <p>Includes:</p>
              <div className="mt-4 mb-8 grid grid-cols-1 gap-x-6 gap-y-4 py-2 md:grid-cols-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Specialized instruction</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Small class sizes</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Hands-on activities</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Cultural immersion</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Expert instructors</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Flexible enrollment</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Supplemental learning</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Interactive lessons</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Community connection</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Enrichment options</p>
                </div>
              </div>
              <div>
                <Button title="Enroll today" className="w-full">
                  Enroll today
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
