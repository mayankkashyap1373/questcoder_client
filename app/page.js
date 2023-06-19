'use client';
import SearchForm from '@/components/SearchForm';
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import the icons

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (<>
    {isLoading ? <div>Loading...</div> : (
    <div className='flex flex-col min-h-screen justify-between'>
      <button onClick={toggleDarkMode} className='absolute mt-12 ml-12 text-3xl sm:text-2xl'>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <main className="flex flex-col items-center p-24">
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-8">
          <span className={`${!darkMode ? 'text-green-600': 'text-green-900'}`}>Quest</span><span className={`${!darkMode ? 'text-blue-500': 'text-blue-900'}`}>Coder</span>
        </h1>
        <SearchForm isLoading={isLoading} setIsLoading={setIsLoading} darkMode={darkMode} />
      </main>
      <footer className="flex items-center justify-center w-full h-12 border-t">
      Created by &nbsp;
        <a
          className="flex items-center justify-center"
          href="https://www.mayankkashyap.in"
          target="_blank"
          rel="noopener noreferrer"
        ><strong>Mayank Kashyap</strong>
        </a>
      </footer>
    </div>)}
    </>
  )
}
