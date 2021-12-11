import './App.css';
import { UseState } from './UseState.js'
import { ClassState } from './ClassState.js'

function App() {
  return (
    <div className="App">
     <UseState name="useState"/>
     <ClassState name="classState"/>
    </div>
  );
}

export default App;
