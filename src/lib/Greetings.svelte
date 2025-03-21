 <svelte:options customElement="the-greeting" /> 

<script lang="ts">

  import ListNamesStore from "../stores/store";

  let storeData: string[];

  //subscribe to store and get data from store
  ListNamesStore.subscribe((data) => {
    console.log('storeData is',data);
    storeData = data

  })

  const onclick = (event:Event) => {

    ListNamesStore.update((currentData) => {

     // return [...storeData,"Yes - Money"]
     return [...currentData,"Yes - Money"]

    })


  }

    let greeting: string = $state("Yes, money!");

   // console.log('store info is',List)
   
  </script>
  
 <h2>Today's Svelte greeting is: {greeting}</h2>
 <h4>Brought to you by a Svelte custom element</h4>
 <button type="button" {onclick} >Modify Store</button>