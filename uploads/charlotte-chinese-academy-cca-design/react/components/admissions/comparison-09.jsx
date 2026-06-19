"use client";

import { Button } from "@/components/ui/button";
import React, { Fragment } from "react";
import { Check, ChevronRight, Close } from "relume-icons";

export function Comparison9() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Placement</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            Find the right level for your child
          </h1>
          <p className="text-medium">
            Use age and experience to determine the best fit. Contact us if
            unsure.
          </p>
        </div>
        <div className="mx-auto max-w-xl">
          <div className="grid grid-cols-2 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr]">
            <Fragment>
              <div className="hidden h-full flex-col items-start justify-end py-4 pr-4 sm:py-6 sm:pr-6 md:flex lg:py-6 lg:pr-6">
                <h2 className="text-h6 font-bold">Age and grade</h2>
              </div>
              <div className="flex h-full flex-col justify-between px-2 py-4 sm:px-4 sm:py-6 lg:p-6 bg-scheme-foreground">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="inline-block">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                      alt="Relume icon 1"
                      className="max-h-12"
                    />
                  </div>
                </div>
              </div>
              <div className="flex h-full flex-col justify-between px-2 py-4 sm:px-4 sm:py-6 lg:p-6">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="inline-block">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                      alt="Relume icon 2"
                      className="max-h-12"
                    />
                  </div>
                </div>
              </div>
            </Fragment>
          </div>
          <div className="grid grid-cols-2 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-none md:pr-6">
              Ages 5-6
            </p>
            <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6 bg-scheme-foreground">
              <span>CHL01 or CSL01</span>
            </div>
            <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <span>Kindergarten to first grade</span>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-none md:pr-6">
              Ages 7-8
            </p>
            <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6 bg-scheme-foreground">
              <span>
                <Check className="size-6 text-scheme-text" />
              </span>
            </div>
            <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <span>
                <Check className="size-6 text-scheme-text" />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-none md:pr-6">
              Ages 9-10
            </p>
            <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6 bg-scheme-foreground">
              <span>
                <Check className="size-6 text-scheme-text" />
              </span>
            </div>
            <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <span>
                <Check className="size-6 text-scheme-text" />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-none md:pr-6">
              Ages 11-12
            </p>
            <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6 bg-scheme-foreground">
              <span>
                <Check className="size-6 text-scheme-text" />
              </span>
            </div>
            <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <span>
                <Close className="size-6" />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-none md:pr-6">
              Ages 13 and up
            </p>
            <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6 bg-scheme-foreground">
              <span>
                <Check className="size-6 text-scheme-text" />
              </span>
            </div>
            <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <span>
                <Close className="size-6" />
              </span>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Get help" variant="secondary">
              Get help
            </Button>
            <Button
              title="Email us"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Email us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
