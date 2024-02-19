import './App.css';
import React, { useState } from 'react';
import ExerciseList from "./components/ExerciseList";
import {ChakraProvider, Container} from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
        <ChakraProvider>
            <ExerciseList />
        </ChakraProvider>
    </div>
  );
}

export default App;
