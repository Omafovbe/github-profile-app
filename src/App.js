import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import Navigation from './components/Navigation';
import ErrorFallback from './components/ErrorFallback';
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        Hello
        <Navigation />
      </header>
      <div className='App__body'>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AppRoutes />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
