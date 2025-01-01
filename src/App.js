import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedDisease, setSelectedDisease] = useState('');
  const [symptoms, setSymptoms] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSymptoms((prevSymptoms) => ({
      ...prevSymptoms,
      [name]: value,
    }));
  };

  const handleDiseaseSelect = (e) => {
    setSelectedDisease(e.target.value);
    setPrediction(null);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDisease) {
      alert('Please select a disease type!');
      return;
    }

    setLoading(true);
    setError('');
    setPrediction(null);

    try {
      const response = await fetch('http://localhost:8000/predict_disease/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          disease_type: selectedDisease,
          symptoms: Object.values(symptoms),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setPrediction(data.prediction);
      } else {
        setError(data.error || 'Error occurred during prediction.');
      }
    } catch (err) {
      setError('An error occurred while connecting to the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Disease Prediction App</h1>

      <div>
        <label>Select Disease Type:</label>
        <select onChange={handleDiseaseSelect} value={selectedDisease}>
          <option value="">--Select--</option>
          <option value="diabetes">Diabetes</option>
          <option value="heart">Heart Disease</option>
          <option value="parkinsons">Parkinson's Disease</option>
        </select>
      </div>


      {selectedDisease && (
        <form onSubmit={handleSubmit}>
          {selectedDisease === 'diabetes' && (
            <>
              <div>
                <label>Number of Pregnancies:</label>
                <input
                  type="number"
                  name="Pregnancies"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Glucose Level:</label>
                <input
                  type="number"
                  name="Glucose"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Blood Pressure:</label>
                <input
                  type="number"
                  name="BloodPressure"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Skin Thickness:</label>
                <input
                  type="number"
                  name="SkinThickness"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Insulin Level:</label>
                <input
                  type="number"
                  name="Insulin"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>BMI:</label>
                <input
                  type="number"
                  name="BMI"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Diabetes Pedigree Function value:</label>
                <input
                  type="number"
                  name="Diabetes Pedigree Function value"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Age:</label>
                <input
                  type="number"
                  name="Age"
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {selectedDisease === 'heart' && (
            <>
              <div>
                <label>Age:</label>
                <input
                  type="number"
                  name="age"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Sex of the Person (0=Male and 1:Female):</label>
                <input
                  type="number"
                  name="Sex of the Person"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Chest Pain Type:</label>
                <input
                  type="number"
                  name="cp"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Resting Blood Pressure:</label>
                <input
                  type="number"
                  name="Resting Blood Pressure"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Serum Cholestoral in mg/dl :</label>
                <input
                  type="number"
                  name="Serum Cholestoral in mg/dl"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Fasting blood sugar greater than 120 mg/dl:</label>
                <input
                  type="number"
                  name="Fasting blood sugar > 120 mg/dl"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Resting Electrocardiographic results:</label>
                <input
                  type="number"
                  name="Resting Electrocardiographic results"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Maximum Heart Rate achieved:</label>
                <input
                  type="number"
                  name="Maximum Heart Rate achieved"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Exercise Induced Angina:</label>
                <input
                  type="number"
                  name="Exercise Induced Angina"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>ST depression induced by exercise:</label>
                <input
                  type="number"
                  name="ST depression induced by exercise"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Slope of the peak exercise ST segment:</label>
                <input
                  type="number"
                  name="Slope of the peak exercise ST segment"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Major vessels colored by flourosopy:</label>
                <input
                  type="number"
                  name="Major vessels colored by flourosopy"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>thal(0 = normal; 1 = fixed defect; 2 = reversable defect):</label>
                <input
                  type="number"
                  name="thal: 0 = normal; 1 = fixed defect; 2 = reversable defect"
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {selectedDisease === 'parkinsons' && (
            <>
              <div>
                <label>MDVP:Fo(Hz):</label>
                <input
                  type="number"
                  name="fo"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>MDVP:Fhi(Hz):</label>
                <input
                  type="number"
                  name="fhi"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>MDVP:Flo(Hz):</label>
                <input
                  type="number"
                  name="Flo"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>MDVP:Jitter(%):</label>
                <input
                  type="number"
                  name="Jitter_percent"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>MDVP:Jitter(Abs):</label>
                <input
                  type="number"
                  name="Jitter_Abs"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>MDVP:RAP</label>
                <input
                  type="number"
                  name="RAP"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>MDVP:PPQ:</label>
                <input
                  type="number"
                  name="PPQ"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Jitter:DDP:</label>
                <input
                  type="number"
                  name="DDP"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>MDVP:Shimmer:</label>
                <input
                  type="number"
                  name="Shimmer"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>MDVP:Shimmer(dB):</label>
                <input
                  type="number"
                  name="Shimmer_dB"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Shimmer:APQ3:</label>
                <input
                  type="number"
                  name="APQ3"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Shimmer:APQ5:</label>
                <input
                  type="number"
                  name="APQ5"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>MDVP:APQ:</label>
                <input
                  type="number"
                  name="APQ"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Shimmer:DDA:</label>
                <input
                  type="number"
                  name="DDA"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>NHR:</label>
                <input
                  type="number"
                  name="NHR"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>HNR:</label>
                <input
                  type="number"
                  name="HNR"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>RPDE:</label>
                <input
                  type="number"
                  name="RPDE"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>DFA:</label>
                <input
                  type="number"
                  name="DFA"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>spread1:</label>
                <input
                  type="number"
                  name="spread1"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>spread2:</label>
                <input
                  type="number"
                  name="spread2"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>D2:</label>
                <input
                  type="number"
                  name="D2"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>PPE:</label>
                <input
                  type="number"
                  name="PPE"
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </form>
      )}

      {prediction && (
        <div>
          <h3>Prediction:</h3>
          <p className={prediction.toLowerCase().includes('no') ? 'green-text' : 'red-text'}>
            {prediction}
          </p>
        </div>
      )}

      {error && (
        <div>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default App;
