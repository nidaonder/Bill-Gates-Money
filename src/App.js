import './App.css';
import Money from './components/money/Money';
import Profile from './components/profile/Profile';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App">
      <Profile />
      <Money />
      <Content />
    </div>
  );
}

export default App;
