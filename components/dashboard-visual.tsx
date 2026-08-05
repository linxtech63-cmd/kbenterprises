import { BarChart3, CircleDollarSign, Database, FileCheck2, PackageCheck } from "lucide-react";

export function DashboardVisual() {
  const bars = [68, 45, 82, 58, 74, 91];

  return (
    <div
      className="dashboard-shadow relative rounded-lg border border-slate-200 bg-white p-4"
      aria-label="Enterprise ERP dashboard illustration"
      role="img"
    >
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0078D4]">
            Business Central
          </p>
          <p className="mt-1 text-lg font-semibold text-[#101827]">Operations Overview</p>
        </div>
        <div className="rounded-lg bg-[#EAF4FF] px-3 py-2 text-xs font-semibold text-[#002050]">
          Live ERP
        </div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {[
          { label: "Receivables", value: "$428K", icon: CircleDollarSign },
          { label: "Open Orders", value: "312", icon: PackageCheck },
          { label: "Posted Docs", value: "1.8K", icon: FileCheck2 }
        ].map((item) => (
          <div key={item.label} className="rounded-lg border border-slate-200 bg-[#F7F9FC] p-4">
            <item.icon size={18} className="text-[#0078D4]" aria-hidden="true" />
            <p className="mt-4 text-xl font-semibold text-[#101827]">{item.value}</p>
            <p className="mt-1 text-xs text-slate-500">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-lg border border-slate-200 p-4">
          <div className="mb-5 flex items-center gap-2">
            <BarChart3 size={18} className="text-[#0F6CBD]" aria-hidden="true" />
            <p className="text-sm font-semibold text-[#101827]">Monthly Performance</p>
          </div>
          <div className="flex h-44 items-end gap-3">
            {bars.map((bar, index) => (
              <div key={bar} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t bg-[#0078D4]"
                  style={{ height: `${bar}%`, opacity: 0.48 + index * 0.07 }}
                />
                <span className="text-[11px] text-slate-400">{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 p-4">
          <div className="mb-5 flex items-center gap-2">
            <Database size={18} className="text-[#0F6CBD]" aria-hidden="true" />
            <p className="text-sm font-semibold text-[#101827]">Integration Health</p>
          </div>
          {["Shopify", "Banking", "REST APIs", "Power BI"].map((item, index) => (
            <div key={item} className="mb-4 last:mb-0">
              <div className="mb-2 flex justify-between text-xs">
                <span className="font-medium text-slate-600">{item}</span>
                <span className="text-slate-500">{96 - index * 3}%</span>
              </div>
              <div className="h-2 rounded bg-slate-100">
                <div
                  className="h-2 rounded bg-[#0F6CBD]"
                  style={{ width: `${96 - index * 3}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
