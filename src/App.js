
import './App.css';
import Main from './Component/Main';
import Navbar from './Component/Navbar';
import Performance from './Component/Performance';
import Welcome from './Component/Welcome';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Performance/>
      <Main/>
    </div>
  );
}

export default App;
