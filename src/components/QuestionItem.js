import React, { useState } from 'react';
import QuestionForm from './QuestionForm';

const EvaluationItem = ({ index, evaluation, deleteEvaluation, updateEvaluation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedEvaluation, setUpdatedEvaluation] = useState(evaluation);

  const handleQuestionChange = (questionIndex, updatedQuestion) => {
    const updatedQuestions = updatedEvaluation.questions.map((question, i) =>
      i === questionIndex ? updatedQuestion : question
    );
    setUpdatedEvaluation({
      ...updatedEvaluation,
      questions: updatedQuestions
    });
  };

  const handleSave = () => {
    updateEvaluation(index, updatedEvaluation);
    setIsEditing(false);
  };

  return (
    <div className="evaluation-item">
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={updatedEvaluation.title} 
            onChange={(e) => setUpdatedEvaluation({
              ...updatedEvaluation,
              title: e.target.value
            })}
          />
          {updatedEvaluation.questions.map((question, i) => (
            <QuestionForm 
              key={i} 
              index={i} 
              question={question} 
              onQuestionChange={handleQuestionChange} 
            />
          ))}
          <button onClick={handleSave}>Salvar</button>
        </div>
      ) : (
        <div>
          <h2>{evaluation.title}</h2>
          <button onClick={() => deleteEvaluation(index)}>Deletar</button>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <ul>
            {evaluation.questions.map((question, i) => (
              <li key={i}>
                {question.questionText} - Resposta Correta: Opção {question.correctAnswer + 1}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EvaluationItem;
