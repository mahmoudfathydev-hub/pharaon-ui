"use client";

import * as React from "react";
import {
  ChevronDown,
  Layout,
  Square,
  Navigation,
  Footprints,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface SidebarItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  children: Array<{
    id: string;
    label: string;
    href?: string;
  }>;
}

const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    title: "Buttons",
    icon: <Square className="h-4 w-4" />,
    children: [
      { id: "btn-1", label: "Primary Button" },
      { id: "btn-2", label: "Secondary Button" },
      { id: "btn-3", label: "Outline Button" },
    ],
  },
  {
    id: 2,
    title: "Cards",
    icon: <Layout className="h-4 w-4" />,
    children: [
      { id: "card-1", label: "Basic Card" },
      { id: "card-2", label: "Interactive Card" },
      { id: "card-3", label: "Glass Card" },
    ],
  },
  {
    id: 3,
    title: "Navbars",
    icon: <Navigation className="h-4 w-4" />,
    children: [
      { id: "nav-1", label: "Header Navbar" },
      { id: "nav-2", label: "Floating Navbar" },
      { id: "nav-3", label: "Mega Menu" },
    ],
  },
  {
    id: 4,
    title: "Footers",
    icon: <Footprints className="h-4 w-4" />,
    children: [
      { id: "footer-1", label: "Simple Footer" },
      { id: "footer-2", label: "Sticky Footer" },
      { id: "footer-3", label: "Newsletter Footer" },
    ],
  },
];

const SidebarDropdown = ({ item }: { item: SidebarItem }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "w-full flex items-center px-4 py-3 rounded-2xl",
            "bg-[#0F172A] border border-white/5",
            "transition-all duration-300",
            "hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10",
            "group"
          )}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
              {item.icon}
            </div>

            <span className="text-sm font-medium text-white/80 group-hover:text-white">
              {item.title}
            </span>
          </div>

          <ChevronDown
            className={cn(
              "h-4 w-4 text-blue-400 transition-transform duration-300",
              open && "rotate-180"
            )}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        side="right"
        className={cn(
          "w-60 p-2 rounded-2xl",
          "bg-[#0B1120]/95 backdrop-blur-xl",
          "border border-white/5 shadow-2xl shadow-black/50",
          "animate-in fade-in-0 zoom-in-95"
        )}
      >
        {item.children.map((child) => (
          <DropdownMenuItem
            key={child.id}
            className={cn(
              "px-3 py-2 rounded-xl text-sm cursor-pointer",
              "text-white/70 transition-all duration-200",
              "hover:bg-blue-500/15 hover:text-white hover:pl-4",
              "focus:bg-blue-500/20 focus:outline-none"
            )}
            onClick={() => console.log(child.href)}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2" />
            {child.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const DocsSidebar = () => {
  return (
    <aside className="h-screen w-72 p-6 bg-[#070B14] border-r border-white/5 flex flex-col rounded-2xl">
      <div className="mb-10">
        <h2 className="text-xl font-bold text-white">
          UI Components
        </h2>
        <p className="text-sm text-white/40 mt-1">
          Professional Dark Blue System
        </p>
      </div>

      <nav className="space-y-4 flex-1">
        {sidebarItems.map((item) => (
          <SidebarDropdown key={item.id} item={item} />
        ))}
      </nav>

      <div className="mt-auto">
        <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
          <p className="text-xs text-blue-400 mb-1">Documentation</p>
          <p className="text-xs text-white/60">
            Built for scalable UI systems.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default DocsSidebar;