"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

export function Cta51_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <Card className="flex flex-col items-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Support CCA's mission
            </h2>
            <p className="text-medium">
              A quarter century of preserving Chinese culture. Tax-deductible
              gifts support teacher training and cultural events.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Donate">Donate</Button>
            <Button title="Learn" variant="secondary">
              Learn
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
