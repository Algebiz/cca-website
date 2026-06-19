"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout140() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Filter</p>
        <h5 className="mb-5 text-h5 font-bold md:mb-6">
          Browse by category to find what matters to you. All 全部 | News 新闻 |
          Events 活动 | Announcements 公告
        </h5>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Clear" variant="secondary">
            Clear
          </Button>
          <Button
            title="Search"
            variant="link"
            size="link"
            iconRight={<ChevronRight className="text-scheme-text" />}
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}
