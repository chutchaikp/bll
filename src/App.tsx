// import { randomBytes } from 'crypto';
import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import logo from './logo.png'

import { Text, VStack } from '@chakra-ui/react';


import './App.css';

let timer: any = null;

function App() {
  const [one, setOne] = useState('A')
  const [two, setTwo] = useState('B')
  const [three, setThree] = useState('C')
  const [four, setFour] = useState('D')
  const [five, setFive] = useState('E')

  const [step3, setStep3] = useState<string[]>([])
  const [step4, setStep4] = useState<string[]>([])
  // const [step5, setStep5] = useState<string[]>([])

  // 
  // const [timer, setTimer] = useState<any>()
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

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

  // timer utility
  const handleStartTimer = () => {
    if (isRunning === true) return;

    setIsRunning(true)

    timer = setInterval(() => {
      let num: number = getRandomInt(0, 9)
      setFirst(num)
      num = getRandomInt(0, 9)
      setSecond(num)
    }, 20);
  }

  const handleStopTimer = () => {
    if (isRunning === false) return;
    setIsRunning(false)

    clearInterval(timer);
    timer = null;
  }

  return (
    <div className="App" >

      {/* <Text
        bgGradient="linear(to-l, '#7928CA', '#FF0080')"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text> */}



      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.25rem', }}>
        <img className="spin-logo" src={logo} alt="K.Chui" width={50} />
        <span style={{ color: 'cyan', marginLeft: '70px', fontSize: '3rem', }}>
          K.Chui App
        </span>
      </div>


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

      <br />

      Step 3 {'>>'}
      <ul >
        {step3.map((x: string) => {
          return <li key={x + '1'} >{x} </li>
        })}
      </ul>

      <br />

      Step 4 {'>>'}
      <ul >
        {step4.map((x: string) => {
          return <li key={x + '2'} >{x} </li>
        })}
      </ul>
      <br />

      Step 5 {'>>'}
      <ul >
        {[one, two, three, four, five].map((x: string) => {
          return <li key={x + '3'} >{x} </li>
        })}
      </ul>

      <br /><br />

      <h1>      Generate 2 numbers from [0:9]</h1>

      <button type="submit"
        style={{
          fontSize: '14px',
          margin: '10px',
          padding: '5px',
        }}
        onClick={() => {
          handleStartTimer();
        }
        }>
        {isRunning === true
          ?
          // 'GENEATING...' 
          <BeatLoader size={8} color="white" />
          :
          'GENERATE'
        }
      </button>
      <button type="submit"
        style={{
          fontSize: '14px',
          margin: '10px',
          padding: '5px',
        }}
        onClick={() => {
          handleStopTimer();
        }
        }>STOP
      </button>

      {/* <BeatLoader size={8} color="white" /> */}

      {/* <Button
        isLoading
        colorScheme="blue"
        spinner={<BeatLoader size={8} color="white" />}
      >
        Click me
      </Button> */}

      <br />
      Result {'>>'}
      <ul className="fixed" >
        {[first, second].map((x: number, idx: number) => {
          return <li key={idx} >{x} </li>
        })}
      </ul>

    </div>
  );
}

export default App;
