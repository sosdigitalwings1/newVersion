import React from "react";

interface FilterState {
  collections: string[];
  materials: string[];
  movements: string[];
  diameters: string[];
  priceRange: [number, number];
}

interface FiltersProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Filters: React.FC<FiltersProps> = ({ filters, setFilters, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="p-6 bg-white border-r border-gray-200">
      <h3 className="text-lg font-medium mb-4">Filters</h3>

      {/* Collections Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Collections</h4>
        {["Master", "Conquest", "Spirit", "Elegance", "Heritage"].map((collection) => (
          <label key={collection} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.collections.includes(collection)}
              onChange={() =>
                setFilters({
                  ...filters,
                  collections: filters.collections.includes(collection)
                    ? filters.collections.filter((c) => c !== collection)
                    : [...filters.collections, collection],
                })
              }
              className="form-checkbox"
            />
            <span>{collection}</span>
          </label>
        ))}
      </div>

      {/* Materials Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Materials</h4>
        {["Steel", "Titanium", "Gold", "Ceramic"].map((material) => (
          <label key={material} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.materials.includes(material)}
              onChange={() =>
                setFilters({
                  ...filters,
                  materials: filters.materials.includes(material)
                    ? filters.materials.filter((m) => m !== material)
                    : [...filters.materials, material],
                })
              }
              className="form-checkbox"
            />
            <span>{material}</span>
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Price Range</h4>
        <input
          type="range"
          min={0}
          max={10000}
          value={filters.priceRange[1]}
          onChange={(e) =>
            setFilters({
              ...filters,
              priceRange: [filters.priceRange[0], Number(e.target.value)],
            })
          }
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={onClose}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Apply Filters
      </button>
    </div>
  );
};