<script>
    import { push } from "svelte-spa-router";
    
</script>

<main>
    Page2

    <button on:click={() => push("/")}> Go Home </button>
</main>
