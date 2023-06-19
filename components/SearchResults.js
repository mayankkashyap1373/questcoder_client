import React from 'react';
import ProblemCard from './ProblemCard';
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';


export default function Results({ problems, darkMode, source, difficulty, onFilterChange, searchTerm }) {
    const [filters, setFilters] = useState({ source: [], difficulty: [] });

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };      

      useEffect(() => {
        onFilterChange({ source, difficulty });
      }, [source, difficulty]);

      useEffect(() => {
        onFilterChange(filters);
    }, [filters]);
    
      

    return (
        <>
        <Sidebar problems={problems} onFilterChange={handleFilterChange} filters={filters} darkMode={darkMode} />
        <div className='flex flex-row'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {problems && problems.map((problem, index) => (
            <ProblemCard key={index} problem={problem} darkMode={darkMode} />
        ))}
        </div>
        </div>
                    </>
    )
}
