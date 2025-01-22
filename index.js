import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Car from './componets/car'
import App2 from'./componets/time'
function Detail() {
  const info = {
    name: "vignes",
    age: 18,
    gender: "male",
  };
  return (
    <>
      <h1>hellow world</h1>
      <App name={info.name} age={info.age} gender={info.gender} />{/*props this code for props sender*/}
    </>
  );
}
export default Detail;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Detail/>
    <Car/>
    <App2/>
    <Router/>
  </React.StrictMode>
);

