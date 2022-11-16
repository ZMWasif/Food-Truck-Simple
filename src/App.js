import logo from './logo.svg';
import './App.css';
import Shop from './Components/Shop/Shop';
import Header from './Components/Header/Header';
import Questionnaire from './Components/Questionnaire/Questionnaire';
function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Questionnaire></Questionnaire>
    </div>
  );
}

export default App;
