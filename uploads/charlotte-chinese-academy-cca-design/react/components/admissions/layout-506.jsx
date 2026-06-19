"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout506() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Simple</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">How to register</h1>
          <p className="text-medium">
            Less than 15 minutes. No paperwork. Everything happens online.
          </p>
        </div>
        <Card>
          <Tabs
            defaultValue="tab-1"
            orientation="vertical"
            className="relative grid auto-cols-fr grid-cols-1 md:grid-cols-[1.5fr_1fr]"
          >
            <TabsContent
              value="tab-1"
              className="data-[state=active]:animate-tabs"
            >
              <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/password.svg"
                    />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Create your parent account with email and password.
                  </h2>
                  <p>Takes one minute. You'll use this to manage everything.</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Start" variant="secondary">
                    Start
                  </Button>
                  <Button
                    title="Next"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-2"
              className="data-[state=active]:animate-tabs"
            >
              <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/info_i.svg"
                    />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Enter your child's information and date of birth.
                  </h2>
                  <p>
                    We use this to determine the right level for your student.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Continue" variant="secondary">
                    Continue
                  </Button>
                  <Button
                    title="Next"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-3"
              className="data-[state=active]:animate-tabs"
            >
              <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/browse.svg"
                    />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Browse available classes and select the best fit.
                  </h2>
                  <p>Check the placement guide if you're unsure which level.</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Enroll" variant="secondary">
                    Enroll
                  </Button>
                  <Button
                    title="Next"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-4"
              className="data-[state=active]:animate-tabs"
            >
              <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/cards.svg"
                    />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Pay tuition and the refundable volunteer deposit online.
                  </h2>
                  <p>
                    We accept all major credit cards and digital payment
                    methods.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Pay" variant="secondary">
                    Pay
                  </Button>
                  <Button
                    title="Next"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-5"
              className="data-[state=active]:animate-tabs"
            >
              <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/school.svg"
                    />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Check your email for confirmation and class details.
                  </h2>
                  <p>
                    You're all set. See you on Sunday at Providence Day School.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Done" variant="secondary">
                    Done
                  </Button>
                  <Button
                    title="Next"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-6"
              className="data-[state=active]:animate-tabs"
            >
              <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/school.svg"
                    />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Medium length section heading goes here
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Button" variant="secondary">
                    Button
                  </Button>
                  <Button
                    title="Button"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Button
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsList className="relative grid h-full auto-cols-fr grid-cols-1 border-t border-scheme-border group-data-[slot=card-flat]:border-0 data-[state=active]:bg-scheme-foreground md:border-t-0 md:border-l md:group-data-[slot=card-flat]:border-0">
              <TabsTrigger
                value="tab-1"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Create account
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Add your child
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Choose a class
              </TabsTrigger>
              <TabsTrigger
                value="tab-4"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Complete payment
              </TabsTrigger>
              <TabsTrigger
                value="tab-5"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Get confirmation
              </TabsTrigger>
              <TabsTrigger
                value="tab-6"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Get confirmation
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}
