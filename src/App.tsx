import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainRoutes from './routes/MainRoutes';
import { LanguageProvider } from './context/LanguageContext';
import { MouseCursor } from './components/MouseCursor/MouseCursor';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-slate-950 font-sans antialiased text-white cursor-none">
          <MouseCursor />
          <Header />
          <main className="flex-1">
            <MainRoutes />
          </main>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
