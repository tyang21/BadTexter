'use client';

import Image from "next/image";
import { useState } from "react";


type PairArray = [string, number][];

export default function Home() {
  const [counter, setCounter] = useState<PairArray>([]);
  const [actualText, setActualText] = useState<PairArray>([]);
  async function fetchData() {
    const response = await fetch('http://127.0.0.1:8000/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input_data: "I'm a bad texter" }),
    });
    const result = await response.json();
    setCounter(result.result);
    setActualText(result.actualphrase);
  }
  
  function displayResult(counter: PairArray) {
    // Take my counter and display it
    console.log(counter);
    console.log("actual", actualText)
    return (
      <div className= "flex flex-row justify-center">
          <table className= "table-auto border-collapse border ">
            <thead>
              <tr>
                <th className='pr-4 py-2 border border-blue-900 bg-slate-300'>Word</th>
                <th className='py-2 border border-blue-900 bg-slate-300'>Count</th>
              </tr>
            </thead>
            <tbody>
            {counter.map(([word, number]) => (
            <tr key={word}>
              <td className='pr-4 py-2 border border-blue-900 bg-slate-200'>{word}</td>
              <td className='py-2 border border-blue-900 bg-slate-200'>{number}</td>
            </tr>
          ))}
            </tbody>
          </table>
          <table className= "table-auto">
            <thead>
              <tr>
                <th className='pr-4 py-2 border border-blue-900 bg-slate-300'>Actual Phrase</th>
                <th className='py-2 border border-blue-900 bg-slate-300'>Count</th>
              </tr>
            </thead>
            <tbody>
            {actualText.map(([word, number]) => (
            <tr key={word}>
              <td className='pr-4 py-2 border border-blue-900 bg-slate-200'>{word}</td>
              <td className='py-2 border border-blue-900 bg-slate-200'>{number}</td>
            </tr>
          ))}
            </tbody>
          </table>
    </div>
    )
  }

  return (
    <div>
      <div className = "flex flex-col items-center min-h-screen font-bold bg-blue-100 text-blue-900 text-center justify-center font-arial uppercase shadow-lg overflow-auto">
      <h1 className = "size-lg">
        am I a bad texter?
      </h1>
      <button onClick={fetchData} className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2">
        Click me
      </button>
      {counter && displayResult(counter)}
      </div>
      
    </div>

    
  );
}
