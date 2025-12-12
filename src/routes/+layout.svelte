<script lang="ts">
  import "$lib/assets/style/reset.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="body">
  <div class="nav">
		<a href="/modal">모달</a>
	</div>
  <div class="container">
    {@render children()}
  </div>
</div>

<style>
  .body {
    display: flex;
    min-height: 100vh;
    height: auto;
  }
  .nav {
    min-width: 240px;
    max-width: 400px;
    width: auto;
  }
  .container {
    flex-grow: 1;
  }
</style>
