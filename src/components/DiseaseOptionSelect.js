import React from 'react';

const DiseaseOptionSelect = ({ onSelectDisease }) => {
  return (
    <div>
      <label>Select a disease to predict:</label>
      <select onChange={(e) => onSelectDisease(e.target.value)}>
        <option value="">Select Disease</option>
        <option value="diabetes">Diabetes</option>
        <option value="heart">Heart Disease</option>
        <option value="parkinsons">Parkinson's Disease</option>
      </select>
    </div>
  );
};

export default DiseaseOptionSelect;
