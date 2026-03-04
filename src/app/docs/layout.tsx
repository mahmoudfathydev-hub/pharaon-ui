import React from "react";
import DocsSidebar from "./components/Sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#05070a] relative overflow-hidden">
      <div className="fixed top-1/4 -left-20 w-72 md:w-[600px] h-72 md:h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 -right-20 w-72 md:w-[500px] h-72 md:h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="flex gap-10 pt-30 pb-20 relative z-10">
        <div className="hidden lg:block w-72 shrink-0">
          <DocsSidebar />
        </div>
        <div className="flex-1">
          <div className="max-w-6xl mx-auto px-8">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
}