import './App.css';
import Money from './components/money/Money';
import Profile from './components/profile/Profile';
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <Profile />
      <Money />
      <Card />
    </div>
  );
}

export default App;
