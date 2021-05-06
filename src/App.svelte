<script lang="ts">
  import { onMount } from "svelte";
  import hljs from "highlight.js";
  import Code from "./lib/Code.svelte";
  import Code2 from "./lib/Code2.svelte";

  onMount(async () => {
    hljs.highlightAll();
  });
</script>

<main>
  <div>
    <Code skin={"github"} />
  </div>
  <div>
    <Code2 skin={"github"} />
  </div>
</main>

<style>
</style>
