"use client";

import React from "react";
import { Squares2X2Icon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function AshleyDirectInfo() {
  return (
    <section className="mb-6">
      {/* header pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-indigo-500 text-white text-xs font-semibold shadow-sm ring-1 ring-white/10 mb-3">
        <Squares2X2Icon className="w-4 h-4" />
        <span>What is Ashley Direct?</span>
      </div>

      {/* content card */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full brand-soft" />
        <div className="p-5 relative">
          <p className="text-[15px] leading-6 text-gray-800">
            <strong>AshleyDirect</strong> is the web system/portal/application that is the “Gateway” for our
            Licensees, Dealers, and Corporate HomeStores to access pricing, order information, product
            information, reporting, as well as the ability to place wholesale orders.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <a href="#" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg brand-soft brand-text text-xs hover:opacity-90">
              Getting started <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-50 text-gray-700 ring-1 ring-gray-200 text-xs hover:bg-gray-100">
              Login help <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-50 text-gray-700 ring-1 ring-gray-200 text-xs hover:bg-gray-100">
              Order tracking <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

