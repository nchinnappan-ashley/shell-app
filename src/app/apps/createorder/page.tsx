"use client";

import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  CalendarDaysIcon,
  TruckIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import { ShellLayout } from "@/components/layout/ShellLayout";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function parseList(v?: string | null) {
  if (!v) return [] as string[];
  return v.split(/[\s,]+/).map((s) => s.trim()).filter(Boolean);
}

export default function CreateOrderPage() {
  const sp = useSearchParams();
  const preCustomer = sp.get("customer") || "";
  const preShipTo = sp.get("shipTo") || "";
  const preItems = parseList(sp.get("items"));
  const preQty = parseList(sp.get("qty")).map((n) => Number(n) || 0);
  const preWarehouse = sp.get("warehouse") || "ADVANCE NC";
  const preOrderType = (sp.get("orderType") as "complete" | "available" | null) || null;
  const preShipMethod = (sp.get("shipMethod") as "delivery" | "full" | "express" | "ltl" | null) || null;
  const preRequestDate = sp.get("requestDate") || "";

  const [poNumber, setPoNumber] = useState<string>(
    useMemo(() => `${Date.now()}`.slice(-10), [])
  );
  const [customer, setCustomer] = useState(preCustomer);
  const [shipTo, setShipTo] = useState(preShipTo);
  const [orderType, setOrderType] = useState<"complete" | "available">(preOrderType || "complete");
  const [shipMethod, setShipMethod] = useState<
    "delivery" | "full" | "express" | "ltl"
  >(preShipMethod || "delivery");
  const [warehouse, setWarehouse] = useState(preWarehouse);
  const [requestDate, setRequestDate] = useState<string>(preRequestDate || new Date().toISOString().slice(0,10));

  // Build rows from params; allow quick editing
  const [rows, setRows] = useState(
    () =>
      (preItems.length ? preItems : ["", "", ""]).map((item, i) => ({
        item,
        qty: preQty[i] ?? 0,
        status: "",
      }))
  );

  const setRow = (i: number, patch: Partial<(typeof rows)[number]>) => {
    setRows((r) => r.map((row, idx) => (idx === i ? { ...row, ...patch } : row)));
  };

  const addRow = () => setRows((r) => [...r, { item: "", qty: 0, status: "" }]);

  return (
    <ShellLayout suppressDefault>
      <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header mimic */}
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Warehouse:</span> {warehouse} &nbsp;&nbsp;|
            &nbsp;&nbsp;
            <span className="font-medium">Channel:</span> E‑Retail Channel
          </div>
          <div className="text-xs text-gray-500">Sample Order Entry UI</div>
        </div>

        {/* PO + Options */}
        <Section title="Order Details">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="flex items-center gap-2">
              <span className="text-sm text-gray-700 w-28">P.O Number</span>
              <input
                value={poNumber}
                onChange={(e) => setPoNumber(e.target.value)}
                className="flex-1 px-3 py-2 text-sm bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>
            <label className="flex items-center gap-2">
              <span className="text-sm text-gray-700 w-28">Request Date</span>
              <div className="relative flex-1">
                <input
                  type="date"
                  value={requestDate}
                  onChange={(e) => setRequestDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <CalendarDaysIcon className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </label>
            <label className="flex items-center gap-2">
              <span className="text-sm text-gray-700 w-28">Warehouse</span>
              <input
                value={warehouse}
                onChange={(e) => setWarehouse(e.target.value)}
                className="flex-1 px-3 py-2 text-sm bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm font-medium text-gray-800 mb-2">Order Type</div>
              <div className="flex flex-wrap gap-4 text-sm">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="orderType"
                    checked={orderType === "complete"}
                    onChange={() => setOrderType("complete")}
                  />
                  Ship Complete Series Groups
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="orderType"
                    checked={orderType === "available"}
                    onChange={() => setOrderType("available")}
                  />
                  Ship Items As Available
                </label>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-800 mb-2">Shipping Type</div>
              <div className="flex flex-wrap gap-4 text-sm">
                <label className="inline-flex items-center gap-2">
                  <input type="radio" checked={shipMethod === "delivery"} onChange={() => setShipMethod("delivery")} />
                  Delivery
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="radio" checked={shipMethod === "full"} onChange={() => setShipMethod("full")} />
                  Full Truckload Pickup
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="radio" checked={shipMethod === "express"} onChange={() => setShipMethod("express")} />
                  Ashley Express
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="radio" checked={shipMethod === "ltl"} onChange={() => setShipMethod("ltl")} />
                  Less Than Full Truckload / Carrier
                </label>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center gap-2">
              <span className="text-sm text-gray-700 w-28">Customer #</span>
              <input
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                className="flex-1 px-3 py-2 text-sm bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>
            <label className="flex items-center gap-2">
              <span className="text-sm text-gray-700 w-28">Ship To</span>
              <input
                value={shipTo}
                onChange={(e) => setShipTo(e.target.value)}
                className="flex-1 px-3 py-2 text-sm bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>
          </div>
        </Section>

        {/* Items grid */}
        <div className="mt-6 bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-800 inline-flex items-center gap-2">
              <ClipboardDocumentListIcon className="w-4 h-4" /> Items
            </h2>
            <button onClick={addRow} className="text-xs px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50">Add Row</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-600">
                  <th className="px-4 py-2 text-left">Qty</th>
                  <th className="px-4 py-2 text-left">Item #</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Ext. Price (USD)</th>
                  <th className="px-4 py-2 text-left">Comment</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        min={0}
                        value={r.qty}
                        onChange={(e) => setRow(i, { qty: Number(e.target.value) })}
                        className="w-20 px-2 py-1 text-sm bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        value={r.item}
                        onChange={(e) => setRow(i, { item: e.target.value })}
                        className="w-40 px-2 py-1 text-sm bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-2 text-gray-500">{r.status || 'Not Priced'}</td>
                    <td className="px-4 py-2 text-gray-500">0.00</td>
                    <td className="px-4 py-2">
                      <input className="w-64 px-2 py-1 text-sm bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3 border-t border-gray-100 text-right">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">
              <TruckIcon className="w-4 h-4" /> Submit Order
            </button>
          </div>
        </div>

        {/* Instruction mimic */}
        <div className="mt-4 text-center text-[12px] text-gray-600">
          *** Please do not use the 'Refresh' button on your browser, or the F5 Key while submitting your order. Doing so may cause duplicate items on your order ***
        </div>
      </div>
      </div>
    </ShellLayout>
  );
}

