import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import Navigation from './components/Navigation';
import ErrorFallback from './components/ErrorFallback';
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AppRoutes />
      </ErrorBoundary>
    </div>
  );
}

export default App;
