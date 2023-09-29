import { createContext, useState } from 'react';
import Navigation from './routes/Navigation';
export const ThemeContext = createContext()

function App() { 
  return (
  <Navigation />
  );
}

export default App
