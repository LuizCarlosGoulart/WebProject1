import React, { useState } from 'react';
import QuestionForm from './QuestionForm';

const initialQuestion = () => ({
  questionText: '',
  options: ['', '', '', '', ''],
  correctAnswer: null
});

const EvaluationForm = ({ addEvaluation }) => {
  const [evaluation, setEvaluation] = useState({
    title: '',
    questions: Array(10).fill().map(initialQuestion)
  });

  const handleChange = (e) => {
    setEvaluation({
      ...evaluation,
      [e.target.name]: e.target.value
    });
  };

  const handleQuestionChange = (index, updatedQuestion) => {
    const updatedQuestions = evaluation.questions.map((question, i) =>
      i === index ? updatedQuestion : question
    );
    setEvaluation({
      ...evaluation,
      questions: updatedQuestions
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvaluation(evaluation);
    setEvaluation({
      title: '',
      questions: Array(10).fill().map(initialQuestion)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={evaluation.title} 
        onChange={handleChange} 
        placeholder="Título da Avaliação" 
        required 
      />
      {evaluation.questions.map((question, index) => (
        <QuestionForm 
          key={index} 
          index={index} 
          question={question} 
          onQuestionChange={handleQuestionChange} 
        />
      ))}
      <button type="submit">Adicionar Avaliação</button>
    </form>
  );
};

export default EvaluationForm;
