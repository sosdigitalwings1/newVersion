import React from 'react';
import { X } from 'lucide-react';
import { FilterState } from 'types';

interface FiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  isOpen: boolean;
  onClose: () => void;
}

export const Filters: React.FC<FiltersProps> = ({ filters, setFilters, isOpen, onClose }) => {
  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-80 bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out z-40 overflow-y-auto`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold dark:text-white">Filters</h2>
          <X className="h-6 w-6 cursor-pointer dark:text-white" onClick={onClose} />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3 dark:text-gray-200">Collections</h3>
            <div className="space-y-2">
              {['Spirit', 'Master', 'Sport'].map((collection) => (
                <label key={collection} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    checked={filters.collections.includes(collection)}
                    onChange={(e) => {
                      setFilters(prev => ({
                        ...prev,
                        collections: e.target.checked
                          ? [...prev.collections, collection]
                          : prev.collections.filter(c => c !== collection)
                      }));
                    }}
                  />
                  <span className="ml-2 dark:text-gray-300">{collection}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 dark:text-gray-200">Materials</h3>
            <div className="space-y-2">
              {['Stainless Steel', 'Rose Gold', 'Ceramic'].map((material) => (
                <label key={material} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    checked={filters.materials.includes(material)}
                    onChange={(e) => {
                      setFilters(prev => ({
                        ...prev,
                        materials: e.target.checked
                          ? [...prev.materials, material]
                          : prev.materials.filter(m => m !== material)
                      }));
                    }}
                  />
                  <span className="ml-2 dark:text-gray-300">{material}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 dark:text-gray-200">Price Range</h3>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={filters.priceRange[1]}
                onChange={(e) => {
                  setFilters(prev => ({
                    ...prev,
                    priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                  }));
                }}
                className="w-full"
              />
              <div className="flex justify-between dark:text-gray-300">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};