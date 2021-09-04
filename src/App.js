import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Calc from './Calc';
import Register from './Registration';
import EventHandling from './EventHandling';
import ParentComponent from './ParentComponent';
import ConditionalRendering from './ConditionalRendering';
import IplTeams from './IplTeams';
import ParentC from './ParentC';
import Ttwentey from './Ttwentey';
function App() {
  return (
    <div className="App">
     {/* <Register></Register> */}
     {/* <EventHandling></EventHandling> */}
     {/* <ParentComponent></ParentComponent> */}
     {/* <ConditionalRendering></ConditionalRendering> */}
     {/* <IplTeams></IplTeams> */}
     {/* <ParentComponent name="abhishek"></ParentComponent> */}
     {/* <Calc></Calc> */}
     <Ttwentey></Ttwentey>
    </div>
  );
}

export default App;
