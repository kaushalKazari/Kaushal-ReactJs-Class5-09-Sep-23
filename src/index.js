import React from 'react';
import ReactDOM from 'react-dom/client';
import A from './components/A';

// lets create a components
// let A = (props)=>{
//   console.log(props);
//   return <div>Parents<div>Child</div></div>
// }

export class B extends React.Component{
  // 1. Properties/Variables

  // 2. Constractor

  // 3. Methods
  // Every class must have render methods
  render(){
    return(
      <>
        <h1>Class B</h1>
      </>
    )
  } 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <A name="Kaushal" surname="Kishor">Data 2</A>
  </>
);
