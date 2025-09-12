"use client";

import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ShellLayout } from "@/components/layout/ShellLayout";

function TripsTable({ rows }: { rows: Array<{ shipTo: string; trip: string; eta: string }> }) {
  return (
    <div className="inline-block">
      <div className="text-center text-[12px] text-gray-700 font-semibold mb-1">Trips In Route</div>
      <div className="min-w-[360px] bg-white border border-gray-300 rounded-sm overflow-hidden">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="bg-slate-600 text-white">
              <th className="px-2 py-1 text-left font-medium">Shipto #</th>
              <th className="px-2 py-1 text-left font-medium">Trip#</th>
              <th className="px-2 py-1 text-left font-medium">ETA</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                <td className="px-2 py-1 text-gray-800">{r.shipTo}</td>
                <td className="px-2 py-1 text-amber-700 font-semibold">{r.trip}</td>
                <td className="px-2 py-1 text-gray-800">{r.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function InRoutePage() {
  const sp = useSearchParams();
  const customer = sp.get("customer") || "";
  const shipTo = sp.get("shipTo") || "";
  const warehouse = sp.get("warehouse") || "ECRU";

  // Mock sample data; typically this would be fetched by customer/shipTo
  const allRows = useMemo(
    () => [
      { shipTo: "180", trip: "84895", eta: "08/06/2025" },
      { shipTo: "480", trip: "54027", eta: "09/11/2025" },
      { shipTo: "480", trip: "5580", eta: "09/12/2025" },
      { shipTo: "480", trip: "5581", eta: "09/13/2025" },
      { shipTo: "480", trip: "6609", eta: "09/12/2025" },
      { shipTo: "480", trip: "6615", eta: "09/12/2025" },
    ],
    []
  );

  const rows = useMemo(() => {
    if (shipTo) return allRows.filter((r) => r.shipTo === shipTo);
    return allRows;
  }, [allRows, shipTo]);

  return (
    <ShellLayout suppressDefault hideRightPanel>
      <div className="min-h-screen bg-white">
        {/* Header mimic */}
        <div className="px-4 py-2 text-[12px] bg-amber-50 border-b border-amber-100 flex items-center justify-between">
          <div>
            <span className="font-semibold">Warehouse:</span> {warehouse}
            {customer && (
              <>
                <span className="mx-3 text-gray-400">|</span>
                <span className="font-semibold">Customer:</span> {customer}
                {shipTo && (
                  <>
                    <span className="mx-2">/</span>
                    <span className="text-gray-700">Ship To {shipTo}</span>
                  </>
                )}
              </>
            )}
          </div>
          <div className="text-gray-500">Trips In Route</div>
        </div>

        {/* Centered table */}
        <div className="py-10 flex items-start justify-center">
          <TripsTable rows={rows} />
        </div>
      </div>
    </ShellLayout>
  );
}

