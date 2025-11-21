"use client";

import { useState } from "react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 w-full max-w-sm px-3 py-2 border border-input bg-background rounded-md text-sm text-muted-foreground cursor-pointer hover:bg-accent"
        >
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Search documentation...
          </span>
        </div>
      </DialogTrigger>

      <DialogContent className="p-0 overflow-hidden max-w-lg rounded-lg">
        <DialogTitle className="sr-only">Search</DialogTitle>
        <Command className="rounded-lg">
          <div className="flex justify-between items-center px-4 py-2 border-b">
            <CommandInput
              placeholder="Search documentation..."
              className="h-12 text-base flex-grow"
              autoFocus
            />
            {/* optional: X icon for manual close */}
            {/* <X className="h-5 w-5 text-muted-foreground cursor-pointer" onClick={() => setOpen(false)} /> */}
          </div>

          <CommandList>
            <CommandItem className="px-4 text-sm">Getting Started</CommandItem>
            <CommandItem className="px-4 text-sm">Installation</CommandItem>
            <CommandItem className="px-4 text-sm">Components</CommandItem>
            <CommandItem className="px-4 text-sm">Dark Mode</CommandItem>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
