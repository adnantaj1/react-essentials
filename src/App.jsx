// import { useState,useEffect } from 'react';
import { Header } from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import TabButton from './components/TabButton.jsx';

function App() {

  //   const [data, setData] = useState([]);

  //  useEffect(() => {
  // fetch('http://localhost:4000/api/products')
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error('Error:', error));
  // }, []);

  //  console.log(data);
  return (
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
