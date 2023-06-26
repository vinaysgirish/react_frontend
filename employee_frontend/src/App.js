import logo from './logo.svg';
import './App.css';
import { Landingpage } from './component/LandingPage';
import { AddEmployee } from './component/AddEmployee';
import { ViewEmployee} from './component/ViewEmployee';

function App() {
  return (
    <div className='App'>
      <R1>
        <R2>
          <R3 path='/' element={<Landingpage/>}></R3>
          <R3 path='/AddEmployee' element={<AddEmployee/>}></R3>
          <R3 path='/viewEmployee' element={<ViewEmployee/>}></R3>
        </R2>
      </R1>
    </div>
  );
}

export default App;
