import './App.css'

function App() {

  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <div>
      <h1>Hello React World!</h1>
      <p>I built this with Vite.</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App