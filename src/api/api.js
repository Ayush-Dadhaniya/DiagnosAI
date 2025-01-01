import axios from 'axios';

const apiUrl = 'http://localhost:8000/predict_disease/';

export const predictDisease = async (diseaseType, formData) => {
  try {
    const response = await axios.post(apiUrl, {
      disease_type: diseaseType,
      symptoms: Object.values(formData),
    });
    return response.data.prediction;
  } catch (error) {
    throw new Error('Failed to fetch prediction');
  }
};
