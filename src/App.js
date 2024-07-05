import React, { useState } from 'react';
import EvaluationForm from './components/EvaluationForm';
import EvaluationList from './components/EvaluationList';
import logo from './assets/logo.png';
import './App.css';

function App() {
  const [evaluations, setEvaluations] = useState([]);

  const addEvaluation = (newEvaluation) => {
    setEvaluations([...evaluations, newEvaluation]);
  };

  const deleteEvaluation = (index) => {
    const updatedEvaluations = evaluations.filter((_, i) => i !== index);
    setEvaluations(updatedEvaluations);
  };

  const updateEvaluation = (index, updatedEvaluation) => {
    const updatedEvaluations = evaluations.map((evaluation, i) =>
      i === index ? updatedEvaluation : evaluation
    );
    setEvaluations(updatedEvaluations);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo do Projeto" className="App-logo" />
      </header>
      <EvaluationForm addEvaluation={addEvaluation} />
      <EvaluationList 
        evaluations={evaluations} 
        deleteEvaluation={deleteEvaluation} 
        updateEvaluation={updateEvaluation} 
      />
    </div>
  );
}

export default App;
