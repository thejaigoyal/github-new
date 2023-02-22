import React, {useState} from 'react'
import Data from './data/Data';
import { Route, BrowserRouter,Routes } from 'react-router-dom';
import Skills from './skills/skills';
import Home from './Home/home';
const App = () => {
  const [ skillSet, setSkillSet ] = useState(Data.skillSet);

  return (
    <BrowserRouter>
    <Routes>
    {/* <Route path="/" exact  element={<Skills skillSet={skillSet} />} /> */}
    <Route path="/" exact  element={<Home skillSet={skillSet} />} />
    </Routes>
    </BrowserRouter>     
  )
}

export default App