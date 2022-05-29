import logo from './logo.svg';
import './App.css';
import Sidenav from './components/sidenav/sidenav'
import LeftColumn from './components/leftColumn/leftColumn'
import MiddleColumn from './components/middleColumn/middleColumn';
import RightColumn from './components/rightColumn/rightColumn';
import Bottomnav from './components/bottomnav/bottomnav';

function App() {
  return (
    <div className="App row">
      <Sidenav/>
      <LeftColumn/>
      <MiddleColumn/>
      <RightColumn/>
      <Bottomnav/>
    </div>
  );
}

export default App;
