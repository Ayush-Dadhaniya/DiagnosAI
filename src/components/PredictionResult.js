import React from 'react';

const PredictionResult = ({ prediction, error }) => {
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (prediction) {
    return <p>Prediction: {prediction}</p>;
  }

  return null;
};

export default PredictionResult;
