import React from 'react';
import EvaluationItem from './EvaluationItem';

const EvaluationList = ({ evaluations, deleteEvaluation, updateEvaluation }) => {
  return (
    <div className="evaluation-list">
      {evaluations.map((evaluation, index) => (
        <EvaluationItem 
          key={index} 
          index={index} 
          evaluation={evaluation} 
          deleteEvaluation={deleteEvaluation} 
          updateEvaluation={updateEvaluation} 
        />
      ))}
    </div>
  );
};

export default EvaluationList;
