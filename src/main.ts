import { mount } from 'svelte'
import './app.css'
import './lib/Greetings.svelte'

//*** comment below to include/remove App.svelte
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

//**  comment above to include/remove App.svelte
console.log('main.ts custom elements loaded!')

export default app


