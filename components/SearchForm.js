import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import mdiMagnify from '@iconify/icons-mdi/magnify';
import axios from 'axios';
import Results from './SearchResults';
import InformationBox from './InformationBox';

export default function SearchForm({darkMode}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [problems, setProblems] = useState([]);
    const [filters, setFilters] = useState({ source: [], difficulty: [] });
    const [searched, setSearched] = useState(false);
    const [problemInfo, setProblemInfo] = useState({});

    useEffect(() => {
        handleFilterChange(filters);
    }, [filters]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await onSearch(searchTerm, filters);
        setSearched(true);

    };
    
    const onSearch = async (searchTerm, filters) => {
        console.log("Search term in Search Form:", searchTerm);
        try {
            let urlForProblemsSearch = `http://server.quest-coder.com/api/v1/problems/?searchTerm=${encodeURIComponent(searchTerm)}`;
            let urlForProblemInfo = `http://server.quest-coder.com/api/v1/problems/search-term-info/?searchTerm=${encodeURIComponent(searchTerm)}`;
    
            // Append filters to the URL
            if (filters.source && filters.source.length > 0) {
                urlForProblemsSearch += `&source=${filters.source.join(',')}`;
            }
            if (filters.difficulty && filters.difficulty.length > 0) {
                urlForProblemsSearch += `&difficulty=${filters.difficulty.join(',')}`;
            }
    
            const problemsData = await axios.get(urlForProblemsSearch);
            console.log("Problems data in Search Form:", problemsData);
            setProblems(problemsData.data.problems);
            const problemInfoData = await axios.get(urlForProblemInfo);
            console.log("Problems data in Search Form:", problemInfoData);
            setProblemInfo(problemInfoData.data.problemInfo);
            setSearched(true);

        } catch (error) {
            console.error('Error:', error);
        }
    };       

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };
    
    return (
            <>
                <form onSubmit={handleSubmit} className={`w-full ${darkMode ? 'dark' : ''}`}>
                    <div className="relative w-3/4 sm:w-1/2 md:w-5/12 m-auto">
                        <input
                            type="text"
                            className={`h-12 rounded-full w-full py-2 px-4 leading-tight focus:outline-none pl-10 shadow-lg ${darkMode ? 'text-white bg-gray-800 focus:bg-gray-700 focus:border-blue-500' : 'text-gray-900 bg-white focus:bg-white focus:border-blue-500'}`}
                            placeholder="Search for problems..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <Icon icon={mdiMagnify} className={darkMode ? 'text-white' : 'text-gray-500'} />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={`mt-8 font-bold py-2 px-4 rounded m-auto block ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                    >
                        Search
                    </button>
                </form>
                <div className="flex flex-col items-center p-8">
                <InformationBox problems={problems} problemInfo={problemInfo} darkMode={darkMode} searched={searched} />
                <Results searchTerm={searchTerm} problems={problems} darkMode={darkMode} onFilterChange={handleFilterChange} filters={filters} />
                </div>
            </>
    )
}