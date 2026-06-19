"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Call, ChevronRight, LocationOn, Mail } from "relume-icons";

export function Contact14() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Get in touch</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Send us a message</h2>
          <p className="text-medium">
            Fill out the form below and we'll respond within 2 business days.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <Mail className="size-8 text-scheme-text" />
              </div>
              <h3 className="mb-2 text-h6 font-bold">Email</h3>
              <p className="mb-2">Contact us at</p>
              <a className="underline" href="#">
                general@charlottechineseacademy.org
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <Call className="size-8 text-scheme-text" />
              </div>
              <h3 className="mb-2 text-h6 font-bold">Mailing</h3>
              <p className="mb-2">Send mail to</p>
              <a className="underline" href="#">
                P.O. Box 78314 Charlotte NC 28271
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <LocationOn className="size-8 text-scheme-text" />
              </div>
              <h3 className="mb-2 text-h6 font-bold">Location</h3>
              <p className="mb-2">
                Providence Day School 5800 Sardis Road Charlotte NC 28270
              </p>
              <div className="mt-5 md:mt-6">
                <Button
                  title="View on map"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  View on map
                </Button>
              </div>
            </div>
          </div>
          <a href="#" className="block size-full overflow-hidden">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-map-image.jpeg"
              alt="Relume placeholder map image"
              className="aspect-3/2 size-full rounded-image object-cover"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
