"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

/**
 * ComboBox Component
 *
 * @param {Object} props - Props for the ComboBox component
 * @param {Array} props.data - Array of objects with `value` and `label` for the dropdown options
 * @param {string} [props.placeholder] - Placeholder text for the ComboBox
 * @param {function} [props.onChange] - Callback function for when an item is selected
 * @param {string} [props.initialValue] - Initial value of the ComboBox
 * @param {number|string} [props.width] - Width of the ComboBox
 * @param {string} [props.className] - Additional className for the ComboBox
 */
export function ComboBox({
  data = [],
  placeholder = "Select...",
  onChange = () => {},
  initialValue = "",
  width = "200px",
  className = "",
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(initialValue);

  const handleSelect = (currentValue) => {
    const selectedValue = currentValue === value ? "" : currentValue;
    setValue(selectedValue);
    onChange(selectedValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between", className)}
          style={{ width }}
        >
          {value
            ? data.find((item) => item.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" style={{ width }}>
        <Command>
          <CommandInput
            placeholder={`Search ${placeholder.toLowerCase()}...`}
          />
          <CommandList>
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {data.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={handleSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
