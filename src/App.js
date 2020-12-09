import React, {useState} from 'react';
import data from './data';
import Questions from './Questions';

function App() {
  const [showQuestions, setQuestion] = useState(data);
  return (
    <main className="container">
      <div className="name">
        <h2>Question and answer about login</h2>
      </div>
      <Questions showQuestions = {showQuestions} />
    </main>
  );
}

export default App;
