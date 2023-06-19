import React from 'react';

export default function ProblemCard({ problem, darkMode }) {
    const determineDifficulty = (source, rating) => {
        if (source === 'Codeforces') {
            if (rating < 1300) return 'Easy';
            if (rating >= 1300 && rating <= 1600) return 'Medium';
            if (rating > 1600) return 'Hard';
        } else if (source === 'CodeChef') {
            if (rating <= 1400) return 'Easy';
            if (rating > 1400 && rating <= 1800) return 'Medium';
            if (rating > 1800) return 'Hard';
        }
        return 'Not provided';
    }

    const difficultyLevel = problem.difficultyLevel || determineDifficulty(problem.source, problem.rating);

    const goToProblem = () => {
        window.open(problem.link, '_blank');
    }

    const problemStatement = problem.problemStatement.split(' ').slice(0, 40).join(' ') + (problem.problemStatement.split(' ').length > 40 ? '...' : '');

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    const capitalizedTags = problem.tags.map(tag => capitalizeFirstLetter(tag));

    return (
        <div className={`shadow-md rounded-md p-5 mb-1 overflow-x-hidden overflow-y-auto ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <h2 className="text-xl font-bold mb-2">{problem.name}</h2>
            <p className="mb-4 text-sm">{problemStatement}</p>
            <p><strong>Difficulty Level:</strong> {difficultyLevel || 'Not provided'}</p>
            <p><strong>Tags:</strong> {capitalizedTags.join(', ')}</p>
            <p><strong>Source:</strong> {problem.source}</p>
            <div className="mt-4">
                <button onClick={goToProblem} className={`mt-8 font-bold py-2 px-4 rounded m-auto block ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}>
                    Go to problem
                </button>
            </div>
        </div>
    )
}
