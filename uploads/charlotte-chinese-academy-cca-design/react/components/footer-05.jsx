"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "relume-icons";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer5() {
  const formState = useForm();
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 scheme-2">
      <div className="container">
        <div className="mb-12 block items-start justify-between md:mb-18 lg:mb-20 lg:flex">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-medium font-semibold">Stay connected</h1>
            <p>Get updates on classes and events</p>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <form
              className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
              onSubmit={formState.handleSubmit}
            >
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                value={formState.email}
                onChange={formState.handleSetEmail}
              />
              <Button title="Subscribe" variant="secondary" size="sm">
                Subscribe
              </Button>
            </form>
            <p className="text-tiny">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
        <div className="mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
          <a
            href="#"
            className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
          >
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo image"
            />
          </a>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">About</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Our story
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  School council
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Locations
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Contact us
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Academics</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Language classes
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Enrichment
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Exam prep
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Schedule
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Enroll now
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Admissions</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  How to register
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Tuition
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Placement guide
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Policies
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Register
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Community</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  News and events
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Volunteer
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Donate
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Get involved
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Support us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Contact</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Send us a message
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Call or visit
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Mailing list
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  © 2025 Charlotte Chinese Academy
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-scheme-border" />
        <div className="text-small flex flex-col-reverse items-start pt-6 pb-4 md:justify-start md:pt-8 md:pb-0 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
            <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
              <p className="mt-8 md:mt-0">Terms of use</p>
              <a href="#" className="underline">
                Cookie settings
              </a>
              <a href="#" className="underline">
                Terms of Service
              </a>
              <a href="#" className="underline">
                Cookies Settings
              </a>
            </div>
          </div>
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
            <a href="#">
              <FacebookLogo className="size-6 text-scheme-text" />
            </a>
            <a href="#">
              <InstagramLogo className="size-6 text-scheme-text" />
            </a>
            <a href="#">
              <XLogo className="size-6 p-0.5 text-scheme-text" />
            </a>
            <a href="#">
              <LinkedinLogo className="size-6 text-scheme-text" />
            </a>
            <a href="#">
              <YoutubeLogo className="size-6 text-scheme-text" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
