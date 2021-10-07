import React, { useState } from 'react';

import './App.css';

function App() {
  const [one, setOne] = useState('A')
  const [two, setTwo] = useState('B')
  const [three, setThree] = useState('C')
  const [four, setFour] = useState('D')
  const [five, setFive] = useState('E')

  const [step3, setStep3] = useState<string[]>([])
  const [step4, setStep4] = useState<string[]>([])
  const [step5, setStep5] = useState<string[]>([])


  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const gen3 = () => {

    // init 5 items - // ramdom result 3 items 

    let tmps = [one, two, three, four, five]
    let results: string[] = []

    // gen1
    let remItem: number = getRandomInt(0, tmps.length - 1)
    results.push(tmps[remItem])
    tmps.splice(remItem, 1); // remove it

    // gen2
    remItem = getRandomInt(0, tmps.length - 1)
    results.push(tmps[remItem])
    tmps.splice(remItem, 1) // remove it

    // gen3
    remItem = getRandomInt(0, tmps.length - 1)
    results.push(tmps[remItem])

    console.log(results);

    setStep3((prev: any) => {
      // return results      
      return [...results]
    })
  }


  const gen4 = () => {
    // init 5 items - // ramdom result 3 items 

    let tmps = [one, two, three, four, five]
    let results: string[] = []

    // gen1
    let remItem: number = getRandomInt(0, tmps.length - 1)
    results.push(tmps[remItem])
    tmps.splice(remItem, 1); // remove it

    // gen2
    remItem = getRandomInt(0, tmps.length - 1)
    results.push(tmps[remItem])
    tmps.splice(remItem, 1) // remove it

    // gen3
    remItem = getRandomInt(0, tmps.length - 1)
    results.push(tmps[remItem])
    tmps.splice(remItem, 1) // remove it

    // gen4
    remItem = getRandomInt(0, tmps.length - 1)
    results.push(tmps[remItem])
    tmps.splice(remItem, 1) // remove it

    setStep4((prev: any) => {
      // return results      
      return [...results]
    })
  }

  const gen = () => {

    gen3()
    gen4()
  }

  return (
    <div className="App" >
      <div>
        K.Chui App
      </div>
      <hr />
      <input type="text" value={one} onChange={(e) => setOne(e.target.value)} />
      <input type="text" value={two} onChange={(e) => setTwo(e.target.value)} />
      <input type="text" value={three} onChange={(e) => setThree(e.target.value)} />
      <input type="text" value={four} onChange={(e) => setFour(e.target.value)} />
      <input type="text" value={five} onChange={(e) => setFive(e.target.value)} />

      <button type="submit"
        style={{
          fontSize: '14px',
          margin: '10px',
          padding: '5px',
        }}
        onClick={() => {
          gen()
        }
        }>GENEATE</button>

      <hr />

      Step 3 {'>>'}
      <ul >
        {step3.map((x: string) => {
          return <li style={{ display: 'inline', }}>* {x} </li>
        })}
      </ul>

      <br />

      Step 4 {'>>'}
      <ul >
        {step4.map((x: string) => {
          return <li style={{ display: 'inline', }}>* {x} </li>
        })}
      </ul>
      <br />

      Step 5 {'>>'}
      <ul >
        {[one, two, three, four, five].map((x: string) => {
          return <li style={{ display: 'inline', }}>* {x} </li>
        })}
      </ul>

    </div>
  );
}

export default App;
