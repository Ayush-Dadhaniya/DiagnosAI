import React, { useState } from 'react';
import { predictDisease } from '../api/api';
import DiseaseOptionSelect from './DiseaseOptionSelect';
import PredictionResult from './PredictionResult';

const DiseasePrediction = () => {
  const [selectedDisease, setSelectedDisease] = useState('');
  const [formData, setFormData] = useState({});
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleDiseaseSelect = (disease) => {
    setSelectedDisease(disease);
    setFormData({});
    setPrediction(null);
    setError(null);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const predictionResult = await predictDisease(selectedDisease, formData);
      setPrediction(predictionResult);
    } catch (err) {
      setError('Prediction failed, please try again.');
    }
  };

  return (
    <div>
      <DiseaseOptionSelect onSelectDisease={handleDiseaseSelect} />
      <form onSubmit={handleFormSubmit}>
        {selectedDisease && (
          <div>
            <input type="text" name="age" onChange={handleFormChange} placeholder="Age" required />
          </div>
        )}
        <button type="submit">Get Prediction</button>
      </form>
      <PredictionResult prediction={prediction} error={error} />
    </div>
  );
};

export default DiseasePrediction;