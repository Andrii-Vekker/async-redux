import React from 'react';
import './App.css';
import Books from './Books/Books';
import BooksList from './components/BooksList/BooksList';
import Filter from './components/Filter/Filter';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Form/>
      <Books />
      <Filter/>
    </div>
  );
}

export default App;
