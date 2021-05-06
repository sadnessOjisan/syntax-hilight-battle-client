<script lang="ts">
  import { onMount } from "svelte";
  import hljs from "highlight.js";
  import Code from "./lib/Code.svelte";

  let choice;

  onMount(async () => {
    fetch("https://syntax-hilight-battle-api-xbwn74fo6q-an.a.run.app/battle")
      .then((data) => {
        console.log(data);
      })
      .then((e) => {
        console.error(e);
      });
    hljs.highlightAll();
  });

  function handleClick() {
    alert("clicked");
  }
</script>

<main>
  <div class="codes">
    <div on:click={handleClick} class="code">
      <Code skin={"a11y-light"} />
    </div>
    <div on:click={handleClick} class="code">
      <Code skin={"a11y-dark"} />
    </div>
  </div>
</main>

<style>
  .codes {
    display: flex;
  }

  .code {
    cursor: pointer;
  }
</style>
