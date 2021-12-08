import './App.css'
import MainContainer from './Container.js'
import FloatingButton from './FloatingButton.js'

function App() {
  return (
    <div>
      {MainContainer()}
      <FloatingButton></FloatingButton>
    </div>
  );
}

export default App;
