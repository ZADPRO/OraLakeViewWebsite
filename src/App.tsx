import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainRoutes from './routes/MainRoutes';
import { LanguageProvider } from './context/LanguageContext';
import { SeasonProvider } from './context/SeasonContext';
import { MouseCursor } from './components/MouseCursor/MouseCursor';
import { FloatingActions } from './components/FloatingActions/FloatingActions';

function App() {
  return (
    <LanguageProvider>
      <SeasonProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-slate-950 font-sans antialiased text-white cursor-none">
            <MouseCursor />
            <Header />
            <main className="flex-1">
              <MainRoutes />
            </main>
            <FloatingActions />
          </div>
        </Router>
      </SeasonProvider>
    </LanguageProvider>
  );
}

export default App;
