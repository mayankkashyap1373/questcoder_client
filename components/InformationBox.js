import React from 'react';
import ProblemCard from './ProblemCard';
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';


export default function InformationBox({ problems, darkMode, problemInfo, searched }) {
    return (
        <>
            {(problems.length != 0 && problemInfo.content != undefined) ? (
                <div className={`shadow-md rounded-md p-5 mb-5 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                    <h1 className='text-2xl sm:text-3xl font-bold mb-2 text-center'>Information Box</h1>
                    <hr className='mb-2'/>
                    <p className='text-center md:text-justify'>{problemInfo.content}</p>
                    <hr className='my-2'/>
                    <p className='text-center text-red-600'>Note: This information box uses ChatGPT, a GPT-3.5 model so it might perform slow. It is not guaranteed to be accurate.</p>
                </div>
            ) : (searched && problems.length == 0) ? (
                <div className={`shadow-md rounded-md p-5 mb-5 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                    <p className='text-center md:text-justify'>Sorry, no information available for this problem.</p>
                </div>
                ) : (
                    null
            )}
        </>
    )
}
