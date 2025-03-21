
<!-- <svelte:options customElement="daily-greeting" /> -->
<script lang="ts">

 // import Greetings from './lib/Greetings.svelte'
  import './lib/Greetings.svelte'

  import ContextParent from './lib/ContextParent.svelte';
  import SlotDemo from './lib/SlotDemo.svelte';
  
  
</script>

<main>
  <div>
  <!-- <Greetings /> -->
  <the-greeting ></the-greeting> 


  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <ContextParent />
  <!-- <SlotDemo /> -->
  <SlotDemo>
    <div slot="header">Header from parent: Officia velit culpa et labore.</div>
  </SlotDemo>

  
</main>


<style></style>
