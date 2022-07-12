
import './App.css';

import WeatherCard from './components/WeatherCard';

import { sampleData } from './sample.js';

function App() {
  return (
    <div className="App">
        <h1>ReWeather</h1>
        <div className="weather-grid">
            <WeatherCard data={sampleData} />
        </div>
    </div>
  );
}

export default App;
