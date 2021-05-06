<script lang="ts">
  import { onMount } from "svelte";
  import hljs from "highlight.js";
  import Code from "./lib/Code.svelte";
  import Code2 from "./lib/Code2.svelte";

  let choice;

  onMount(async () => {
    fetch(
      "https://syntax-hilight-battle-api-xbwn74fo6q-an.a.run.app/battle"
    ).then((data) => {
      console.log(data);
    });
    hljs.highlightAll();
  });

  function handleClick() {
    alert("clicked");
  }
</script>

<main>
  <div on:click={handleClick}>
    <Code skin={"github"} />
  </div>
  <div on:click={handleClick}>
    <Code2 skin={"github"} />
  </div>
</main>

<style>
</style>
