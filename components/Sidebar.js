import React, { useState, useEffect } from 'react';
const sources = ['LeetCode', 'Codeforces', 'CodeChef'];
const difficulties = ['Easy', 'Medium', 'Hard'];

export default function Sidebar({ onFilterChange, filters, darkMode, problems }) {
    console.log("Problems: ", problems);
    const { source, difficulty } = filters;
  
    const handleFilterChange = (event) => {
        const filterName = event.target.name;
        const value = event.target.value;
        const newFilterState = event.target.checked ? [...filters[filterName], value] : filters[filterName].filter(item => item !== value);
        onFilterChange({ ...filters, [filterName]: newFilterState });
    };      

    useEffect(() => {
        console.log("Filters in Sidebar: ", filters);
    }, [filters]);

    const handleSliderChange = (event, newValue) => {
      setRating(newValue);
      onFilterChange({
        source,
        difficulty,
      });
    };
  
    return problems.length != 0 ? (
        <div className={`w-full shadow-md rounded-md p-5 mb-5 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Filters</h2>
          <hr className='my-2'/>
          <div className='flex flex-col justify-around md:flex-row items-center'>
          <div className='flex flex-col items-center sm:flex-row md:flex-row'>
          <div>
          <label className="my-2 mr-2 text-lg md:text-xl"><strong>Platform</strong></label>
          </div>
          {sources.map((src) => (
                <div key={src} className='m-1 text-lg'>
                    <input className='mr-2 text-xl' type="checkbox" name="source" value={src} onChange={handleFilterChange} />
                    <label>{src}</label>
                </div>
            ))}
            </div>
            <div className='flex flex-col items-center sm:flex-row md:flex-row'>
            <div>
          <label className="my-2 mr-2 text-lg md:text-xl"><strong>Difficulty Level</strong></label>
          </div>
          {difficulties.map((diff) => (
                <div key={diff} className='m-1 text-lg'>
                    <input className='mr-2' type="checkbox" name="difficulty" value={diff} onChange={handleFilterChange} />
                    <label>{diff}</label>
                </div>
            ))}
            </div>
            </div>
                    <p className='mt-2 text-center text-red-600'>Note: You need to search again after selecting filters.</p>
        </div>
        ) : null;
}
