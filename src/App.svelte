<script lang="ts">import { onMount } from 'svelte';
import hljs from 'highlight.js';
  import Code from './lib/Code.svelte'
  import Code2 from './lib/Code2.svelte'
	
  onMount(async () => {
    hljs.highlightAll();
	});
</script>

<main>
  <Code skin={"github"} />
  <Code2 skin={"github"} />
</main>

<style>
</style>


