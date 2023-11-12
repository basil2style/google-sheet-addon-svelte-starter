<script lang="ts">
	import Router from "svelte-spa-router";
	import Counter from "./lib/Counter.svelte";
	import Home from "./pages/Home.svelte";
	import Settings from "./pages/Settings.svelte";
    import Page2 from "./pages/Page2.svelte";
</script>

<svelte:head>
	<!-- <link
		rel="stylesheet"
		href="https://ssl.gstatic.com/docs/script/css/add-ons1.css"
	/> -->
</svelte:head>

<Router
	routes={{
		"/": Home,
		"/page2":Page2,
		"/settings": Settings,
	}}
/>

<main>
	<h1>Svelte App Vite</h1>

	<div class="card">
		<!-- <Counter /> -->
	</div>
	<!-- <Home /> -->
</main>

<style>
</style>
