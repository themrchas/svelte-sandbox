<script>
    import ContextChild from './ContextChild.svelte';
    import {setContext} from 'svelte';

    let messageForChild = "This is the parent message"
    
    setContext('parentContextMessage',messageForChild )
</script>

<main>

    <ContextChild />

</main>