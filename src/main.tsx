import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BaseErrorBoundary } from './components/base/base-error-boundary'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BaseErrorBoundary>
      <App />
    </BaseErrorBoundary>
  </StrictMode>
)
