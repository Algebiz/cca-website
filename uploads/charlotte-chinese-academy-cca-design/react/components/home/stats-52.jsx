"use client";

import { Card } from "@/components/ui/card";
import React from "react";

export function Stats52() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h3 className="text-h3 font-bold">
            Long heading is what you see here in this feature section
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <Card className="p-8 text-center">
            <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              30%
            </p>
            <h3 className="text-h6 font-bold">Short heading goes here</h3>
          </Card>
          <Card className="p-8 text-center">
            <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              30%
            </p>
            <h3 className="text-h6 font-bold">Short heading goes here</h3>
          </Card>
          <Card className="p-8 text-center">
            <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              30%
            </p>
            <h3 className="text-h6 font-bold">Short heading goes here</h3>
          </Card>
        </div>
      </div>
    </section>
  );
}
