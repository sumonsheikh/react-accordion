import React, {useState} from 'react';
import data from './data';
import Questions from './Questions';

function App() {
  const [showQuestions, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h2>Question and answer about login</h2>
        <Questions showQuestions = {showQuestions} />
      </div>
    </main>
    
  );
}

export default App;
