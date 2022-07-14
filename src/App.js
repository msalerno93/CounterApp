import {useState} from 'react'

function App() {

const [number, setNumber] = useState(0)

const subtractClickHandle = (e) => {
  if (number > 0){
    setNumber(number - 1)}
}

const addClickHandle = (e) => {
  setNumber(number + 1)
}

const addByTen = (e) => {
  setNumber(number + 10)
}


  return (
    <div> 
      <h1>Counter App</h1>
      <h3 onChange={(e) => setNumber}> {number} </h3>
      <div>
      <button onClick={subtractClickHandle}>Subtract</button>
      <button onClick={addClickHandle}>Add</button>
      <button onClick={addByTen}>Add 10</button>
      </div>
    </div>
  );
}

export default App;
