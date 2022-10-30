import Feed from './components/Feed';
import './App.css';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
