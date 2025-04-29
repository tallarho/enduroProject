import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import OpenTopoMap from './components/OpenTopoMap/OpenTopoMap'
import Test from './components/Header/Test'

import 'leaflet/dist/leaflet.css';


export interface Person {
  id:number
  name: string;
  coordinates: Number[];
   description: "Краткое описание маршрута. Место для остановки у реки.",
   difficulty: "Средний",
   length: "15 км",
   elevation: "300м",
   tags: ["лес", "река", "поход"],
   image: '/public/img/forest.png'
}

const App = () => {
  const [users, setUsers] = useState<Person[]>([]);
  const [number, setNumber] =useState<number>(1)
  useEffect(() => {
    fetch("http://localhost:5000/api/tracks")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, []);
  

  return (     
    <Router>
      <Header />
      <Test number={number} /> 
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home users={users} />} />
          </Routes>
        </main>
        <OpenTopoMap />
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
