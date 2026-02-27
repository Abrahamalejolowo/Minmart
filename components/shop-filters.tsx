'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ShopFiltersProps {
  onFilterChange: (filters: {
    category: string
    priceRange: [number, number]
    rating: number
  }) => void
}

export function ShopFilters({ onFilterChange }: ShopFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000])
  const [selectedRating, setSelectedRating] = useState(0)

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'beauty', name: 'Beauty & Skincare' },
    { id: 'food', name: 'Food & Spices' },
    { id: 'home', name: 'Home & Decor' },
    { id: 'crafts', name: 'Crafts & Cultural' },
  ]

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    onFilterChange({ category: categoryId, priceRange, rating: selectedRating })
  }

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max])
    onFilterChange({ category: selectedCategory, priceRange: [min, max], rating: selectedRating })
  }

  const handleRatingChange = (rating: number) => {
    setSelectedRating(rating)
    onFilterChange({ category: selectedCategory, priceRange, rating })
  }

  return (
    <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6">
      {/* Categories */}
      <div>
        <h3 className="mb-4 font-heading text-lg font-bold text-foreground">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="checkbox"
                checked={selectedCategory === category.id}
                onChange={() => handleCategoryChange(category.id)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <span className="text-sm text-foreground">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="mb-4 font-heading text-lg font-bold text-foreground">
          Price Range
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="0"
              max="100000"
              value={priceRange[0]}
              onChange={(e) =>
                handlePriceChange(parseInt(e.target.value), priceRange[1])
              }
              className="w-20 rounded border border-gray-300 px-2 py-1 text-sm"
              placeholder="Min"
            />
            <span className="text-gray-400">-</span>
            <input
              type="number"
              min="0"
              max="100000"
              value={priceRange[1]}
              onChange={(e) =>
                handlePriceChange(priceRange[0], parseInt(e.target.value))
              }
              className="w-20 rounded border border-gray-300 px-2 py-1 text-sm"
              placeholder="Max"
            />
          </div>
          <input
            type="range"
            min="0"
            max="100000"
            value={priceRange[1]}
            onChange={(e) =>
              handlePriceChange(priceRange[0], parseInt(e.target.value))
            }
            className="w-full"
          />
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="mb-4 font-heading text-lg font-bold text-foreground">
          Rating
        </h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="rating"
                checked={selectedRating === rating}
                onChange={() => handleRatingChange(rating)}
                className="h-4 w-4"
              />
              <span className="text-sm text-foreground">
                {'⭐'.repeat(rating)} & up
              </span>
            </label>
          ))}
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="rating"
              checked={selectedRating === 0}
              onChange={() => handleRatingChange(0)}
              className="h-4 w-4"
            />
            <span className="text-sm text-foreground">All Ratings</span>
          </label>
        </div>
      </div>

      <Button
        onClick={() => {
          setSelectedCategory('all')
          setPriceRange([0, 100000])
          setSelectedRating(0)
          onFilterChange({
            category: 'all',
            priceRange: [0, 100000],
            rating: 0,
          })
        }}
        variant="outline"
        className="w-full"
      >
        Clear Filters
      </Button>
    </div>
  )
}
