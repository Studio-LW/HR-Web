import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import './assets/css/tailwind.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <NextUIProvider>
    <main className="light text-foreground bg-background">
      <App />
    </main>
  </NextUIProvider>
)
