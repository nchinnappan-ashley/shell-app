"use client";

import React from "react";
import { ExclamationTriangleIcon, ArrowUpIcon, MinusIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

type Incident = {
  id: string;
  title: string;
  status: "In Progress" | "New" | "Resolved";
  priority: "high" | "medium" | "low";
};

const incidents: Incident[] = [
  { id: "INC0010045", title: "Email service experiencing delays", status: "In Progress", priority: "high" },
  { id: "INC0010042", title: "Cannot access shared network drive", status: "New", priority: "medium" },
  { id: "INC0010039", title: "Printer on 4th floor is offline", status: "Resolved", priority: "low" },
];

function StatusBadge({ status }: { status: Incident["status"] }) {
  const map = {
    "In Progress": "bg-amber-100 text-amber-800",
    "New": "bg-blue-100 text-blue-800",
    "Resolved": "bg-emerald-100 text-emerald-800",
  } as const;
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${map[status]}`}>{status}</span>
  );
}

function PriorityIcon({ p }: { p: Incident["priority"] }) {
  if (p === "high") return <ArrowUpIcon className="w-4 h-4 text-rose-500" />;
  if (p === "medium") return <MinusIcon className="w-4 h-4 text-amber-500" />;
  return <ArrowDownIcon className="w-4 h-4 text-emerald-500" />;
}

export default function ServiceNowIncidents() {
  return (
    <section aria-label="ServiceNow Incidents" className="mt-6">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-2 px-5 pt-5">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-100 text-rose-600">
            <ExclamationTriangleIcon className="w-4 h-4" />
          </span>
          <h3 className="text-lg font-semibold text-gray-900">ServiceNow Incidents</h3>
        </div>

        {/* Table */}
        <div className="px-5 pb-5">
          <div className="mt-4 overflow-x-auto">
            <table className="w-full table-fixed text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="w-24 pb-2 font-medium">Priority</th>
                  <th className="w-36 pb-2 font-medium">ID</th>
                  <th className="pb-2 font-medium">Title</th>
                  <th className="w-40 pb-2 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {incidents.map((inc, idx) => (
                  <tr key={inc.id} className={idx !== incidents.length - 1 ? "border-t border-gray-100" : "border-t border-gray-100"}>
                    <td className="py-3">
                      <PriorityIcon p={inc.priority} />
                    </td>
                    <td className="py-3 text-[13px] text-gray-600">{inc.id}</td>
                    <td className="py-3 text-gray-900">{inc.title}</td>
                    <td className="py-3 text-right">
                      <StatusBadge status={inc.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

