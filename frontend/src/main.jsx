import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://52a976fe0be72c1f87a10eda8eaf9d37@o4508800293339136.ingest.de.sentry.io/4509147550777424",
  integrations: [
    Sentry.browserTracingIntegration()
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost"]
  // tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/] // add the http after deployment
});


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.scss';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
