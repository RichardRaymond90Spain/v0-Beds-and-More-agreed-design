"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { SlidersHorizontal, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface FiltersProps {
  onFilterChange: (filters: FilterState) => void
  initialFilters?: FilterState
}

export interface FilterState {
  size: string
  comfort: string
  inStoreOnly: boolean
  sort: string
}

const sizes = ["All Sizes", "Single", "Double", "King", "Super King"]
const comfortLevels = ["All Comfort Levels", "Soft", "Medium-Soft", "Medium", "Medium-Firm", "Firm"]
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "name", label: "Name: A-Z" },
]

export function Filters({ onFilterChange, initialFilters }: FiltersProps) {
  const [filters, setFilters] = useState<FilterState>(
    initialFilters || {
      size: "All Sizes",
      comfort: "All Comfort Levels",
      inStoreOnly: false,
      sort: "featured",
    }
  )
  const [isOpen, setIsOpen] = useState(false)

  const updateFilter = (key: keyof FilterState, value: string | boolean) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const resetFilters = () => {
    const defaultFilters: FilterState = {
      size: "All Sizes",
      comfort: "All Comfort Levels",
      inStoreOnly: false,
      sort: "featured",
    }
    setFilters(defaultFilters)
    onFilterChange(defaultFilters)
  }

  const hasActiveFilters = filters.size !== "All Sizes" || filters.comfort !== "All Comfort Levels" || filters.inStoreOnly

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Size Filter */}
      <div className="space-y-2">
        <Label>Size</Label>
        <Select value={filters.size} onValueChange={(value) => updateFilter("size", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Comfort Filter */}
      <div className="space-y-2">
        <Label>Comfort Level</Label>
        <Select value={filters.comfort} onValueChange={(value) => updateFilter("comfort", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select comfort" />
          </SelectTrigger>
          <SelectContent>
            {comfortLevels.map((level) => (
              <SelectItem key={level} value={level}>
                {level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* In Store Toggle */}
      <div className="flex items-center justify-between">
        <Label htmlFor="in-store" className="cursor-pointer">Available to test in store</Label>
        <Switch
          id="in-store"
          checked={filters.inStoreOnly}
          onCheckedChange={(checked) => updateFilter("inStoreOnly", checked)}
        />
      </div>

      {/* Sort */}
      <div className="space-y-2">
        <Label>Sort By</Label>
        <Select value={filters.sort} onValueChange={(value) => updateFilter("sort", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" onClick={resetFilters} className="w-full bg-transparent">
          <X className="h-4 w-4 mr-2" />
          Clear Filters
        </Button>
      )}
    </div>
  )

  return (
    <>
      {/* Mobile Filters */}
      <div className="lg:hidden mb-6">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full bg-transparent">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters & Sort
              {hasActiveFilters && (
                <span className="ml-2 bg-accent text-accent-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  !
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh]">
            <SheetHeader>
              <SheetTitle>Filter Products</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:block">
        <div className="bg-card border rounded-lg p-6 sticky top-32">
          <h3 className="font-semibold text-lg mb-4 flex items-center">
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Filters
          </h3>
          <FilterContent />
        </div>
      </div>
    </>
  )
}
