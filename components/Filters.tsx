// import React, { useEffect, useState } from "react";

// interface FilterState {
//   collections: string[];
//   materials: string[];
//   movements: string[];
//   diameters: string[];
//   priceRange: [number, number];
// }

// interface FiltersProps {
//   filters: FilterState;
//   setFilters: (filters: FilterState) => void;
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const Filters: React.FC<FiltersProps> = ({ filters, setFilters, isOpen, onClose }) => {
//   // if (!isOpen) return null;
//   const [isClient, setIsClient] = useState(false)

//   useEffect(() => {
//     setIsClient(true); // Mark that the component is now on the client
//   }, []);

//   if (!isClient || !isOpen) return null; // Don't render on the server

//   return (
//     <div className="p-6 bg-white border-r border-gray-200">
//       <h3 className="text-lg font-medium mb-4">Filters</h3>

//       {/* Collections Filter */}
//       <div className="mb-6">
//         <h4 className="text-sm font-medium mb-2">Collections</h4>
//         {["Master", "Conquest", "Spirit", "Elegance", "Heritage"].map((collection) => (
//           <label key={collection} className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               checked={filters.collections.includes(collection)}
//               onChange={() =>
//                 setFilters({
//                   ...filters,
//                   collections: filters.collections.includes(collection)
//                     ? filters.collections.filter((c) => c !== collection)
//                     : [...filters.collections, collection],
//                 })
//               }
//               className="form-checkbox"
//             />
//             <span>{collection}</span>
//           </label>
//         ))}
//       </div>

//       {/* Materials Filter */}
//       <div className="mb-6">
//         <h4 className="text-sm font-medium mb-2">Materials</h4>
//         {["Steel", "Titanium", "Gold", "Ceramic"].map((material) => (
//           <label key={material} className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               checked={filters.materials.includes(material)}
//               onChange={() =>
//                 setFilters({
//                   ...filters,
//                   materials: filters.materials.includes(material)
//                     ? filters.materials.filter((m) => m !== material)
//                     : [...filters.materials, material],
//                 })
//               }
//               className="form-checkbox"
//             />
//             <span>{material}</span>
//           </label>
//         ))}
//       </div>

//       {/* Price Range Filter */}
//       <div className="mb-6">
//         <h4 className="text-sm font-medium mb-2">Price Range</h4>
//         <input
//           type="range"
//           min={0}
//           max={10000}
//           value={filters.priceRange[1]}
//           onChange={(e) =>
//             setFilters({
//               ...filters,
//               priceRange: [filters.priceRange[0], Number(e.target.value)],
//             })
//           }
//           className="w-full"
//         />
//         <div className="flex justify-between text-sm text-gray-600">
//           <span>${filters.priceRange[0]}</span>
//           <span>${filters.priceRange[1]}</span>
//         </div>
//       </div>

//       {/* Apply Filters Button */}
//       <button
//         onClick={onClose}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
//       >
//         Apply Filters
//       </button>
//     </div>
//   );
// };


import React from "react";
import { X } from "lucide-react"; 

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
  return (
    <div className="space-y-6">
      {/* Header with Close Button (Mobile) */}
      <div className="flex justify-between items-center md:hidden">
        <h3 className="text-lg font-medium">Filters</h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Filter Sections */}
      <div className="space-y-8">
        {/* Collections Filter */}
        <div>
          <h4 className="text-sm font-medium mb-3">Collections</h4>
          <div className="space-y-2">
            {["Master", "Conquest", "Spirit", "Elegance", "Heritage"].map((collection) => (
              <label key={collection} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={filters.collections.includes(collection)}
                  onChange={() => {
                    const newCollections = filters.collections.includes(collection)
                      ? filters.collections.filter((c) => c !== collection)
                      : [...filters.collections, collection];
                    setFilters({ ...filters, collections: newCollections });
                  }}
                  className="form-checkbox h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                />
                <span className="text-sm">{collection}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Materials Filter */}
        <div>
          <h4 className="text-sm font-medium mb-3">Materials</h4>
          <div className="space-y-2">
            {["Steel", "Titanium", "Gold", "Ceramic"].map((material) => (
              <label key={material} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={filters.materials.includes(material)}
                  onChange={() => {
                    const newMaterials = filters.materials.includes(material)
                      ? filters.materials.filter((m) => m !== material)
                      : [...filters.materials, material];
                    setFilters({ ...filters, materials: newMaterials });
                  }}
                  className="form-checkbox h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                />
                <span className="text-sm">{material}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h4 className="text-sm font-medium mb-3">Price Range</h4>
          <input
            type="range"
            min={0}
            max={10000}
            value={filters.priceRange[1]}
            onChange={(e) => {
              setFilters({
                ...filters,
                priceRange: [filters.priceRange[0], Number(e.target.value)],
              });
            }}
            className="w-full range-slider"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Apply Button (Mobile) */}
      <button
        onClick={onClose}
        className="w-full bg-black text-white py-2 rounded-md md:hidden hover:bg-gray-800 transition-colors"
      >
        Apply Filters
      </button>
    </div>
  );
};