import React from 'react';

const QuestionForm = ({ index, question, onQuestionChange }) => {
  const handleQuestionChange = (e) => {
    const updatedQuestion = {
      ...question,
      [e.target.name]: e.target.value
    };
    onQuestionChange(index, updatedQuestion);
  };

  const handleOptionChange = (optionIndex, value) => {
    const updatedOptions = question.options.map((option, i) =>
      i === optionIndex ? value : option
    );
    onQuestionChange(index, {
      ...question,
      options: updatedOptions
    });
  };

  const handleCorrectAnswerChange = (e) => {
    onQuestionChange(index, {
      ...question,
      correctAnswer: parseInt(e.target.value, 10)
    });
  };

  return (
    <div className="question-form">
      <input 
        type="text" 
        name="questionText" 
        value={question.questionText} 
        onChange={handleQuestionChange} 
        placeholder={`Questão ${index + 1}`} 
        className="question-input"
        required 
      />
      {question.options.map((option, i) => (
        <input 
          key={i} 
          type="text" 
          value={option} 
          onChange={(e) => handleOptionChange(i, e.target.value)} 
          placeholder={`Opção ${i + 1}`} 
          required 
        />
      ))}
      <label>
        Resposta Correta:
        <select 
          value={question.correctAnswer !== null ? question.correctAnswer : ''} 
          onChange={handleCorrectAnswerChange} 
          required
        >
          <option value="" disabled>Selecione a resposta correta</option>
          {question.options.map((_, i) => (
            <option key={i} value={i}>{`Opção ${i + 1}`}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default QuestionForm;
