// This can be false if you're using a fallback (i.e. SPA mode)
import './app.scss'
import App from './App.svelte'
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
import { inject } from '@vercel/analytics'

injectSpeedInsights();
inject();


const app = new App({
  target: document.getElementById('app') as HTMLElement
})

export default app
