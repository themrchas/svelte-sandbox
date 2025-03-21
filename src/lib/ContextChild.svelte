<script>

    import {getContext} from 'svelte';

    let message = getContext('parentContextMessage')
    

</script>

<main>
    <h3>The context child received this from the parent: {message}</h3>
</main>