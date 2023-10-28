import { useState } from 'react';
import { useEffect } from 'react';
import { Title } from './components/Title';
import { Chapter } from './components/Chapter';
import { Input } from './components/Input';
import { Monsters } from './components/Monsters';
import { Results } from './components/Results';
import "./App.css"

function App() {
  const [chapter, setChapter] = useState(0);
  const [name, setName] = useState("");
  const [view, setView] = useState(false);
  const [number, setNumber] = useState("")
  
  //モンスター選択時，一番上までスクロール
  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [number]);
  
  return (
    <div>
      <Title/>
      <Chapter setChapter={setChapter} setView={setView}/>
      <Input setName={setName} setView={setView}/>
      {view ? 
      <Results number={number}/> : 
      <Monsters chapter={chapter} name={name} setView={setView} setNumber={setNumber}/>
      }
    </div>
  );
};

export default App;