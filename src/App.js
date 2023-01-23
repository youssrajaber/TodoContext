import logo from './logo.svg';
import './App.css';
import Mycontext from './YS/Mycontext';
import Ccontent from './YS/Ccontent'
import './YS/task.css'

function App() {
  return (
    <div className="App">
      <Mycontext>
        <Ccontent/>
      </Mycontext>
    </div>
  );
}

export default App;
