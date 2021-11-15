import './App.css';
import Home from './components/Home';
import React, {useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Movie from './components/MovieDetails';


const API_KEY = "YOUR_API_KEY";


function App() {

  const [isLoading, setLoading] = useState(true);

  const fakeRequest = ()=>{
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/movies/:id' children={<Movie />} />
    </Switch>
  );
}

export default App;
