import './App.scss';
import { SingleSelect, MultiSelect } from './components/CustomSelect';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'nutela', label: 'Nutela' },
];

function App() {
  return (
    <div className='App'>
      <div>
        <h6>Single select without searchable</h6>
        <SingleSelect options={options} isClearable={false} />
      </div>
      <div>
        <h6>Single select with searchable</h6>
        <SingleSelect options={options} isClearable isSearchable />
      </div>
      <div>
        <h6>Multi select without searchable</h6>
        <MultiSelect options={options} />
      </div>
      <div></div>
    </div>
  );
}

export default App;
