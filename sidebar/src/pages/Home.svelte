<script>
    import Counter from "../lib/Counter.svelte";
    import { link, push } from "svelte-spa-router";

    /**
     * Load Settings Page UI
     */
    function openSettings() {
        google.script.run.withSuccessHandler().loadSettingsUI();
    }
</script>

<main>
    Home Page
    <Counter />

    <button on:click={() => push("/page2")}> Goto Page2 </button>

    <button on:click={openSettings}> Open Settings </button>
</main>
