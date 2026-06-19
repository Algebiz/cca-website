"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout353() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="static md:sticky md:top-[30%]">
            <p className="mb-3 font-semibold md:mb-4">Policies</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Enrollment requirements and guidelines
            </h2>
            <p className="text-medium">
              Know what to expect before you register. We keep things
              straightforward.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Contact us" variant="secondary">
                Contact us
              </Button>
              <Button
                title="Learn more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Learn more
              </Button>
            </div>
          </div>
          <div>
            <Card className="mb-8border-none sticky p-8" style={{ top: "30%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/policy.svg"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                Age requirement
              </h3>
              <p>
                Students must be at least five years old by September 1 of the
                enrollment year. This ensures they're ready for classroom
                learning.
              </p>
            </Card>
            <Card className="mb-8border-none sticky p-8" style={{ top: "32%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/policy.svg"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">Class changes</h3>
              <p>
                Changes are subject to availability. Contact us before the
                second class session to request a switch. We'll work with you to
                find a solution.
              </p>
            </Card>
            <Card className="mb-8border-none sticky p-8" style={{ top: "34%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/policy.svg"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">Refund policy</h3>
              <p>
                Refunds are available if you withdraw before the second class
                session. After that, tuition is nonrefundable for the remainder
                of the year.
              </p>
            </Card>
            <Card className="mb-8border-none sticky p-8" style={{ top: "36%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/policy.svg"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                Waitlist process
              </h3>
              <p>
                When a full class has an opening, we notify waitlisted families.
                You have 48 hours to register for the available spot before it
                goes to the next person.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
