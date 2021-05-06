<script lang="ts">
  import A11yDark from "./codes/A11yDark.svelte";

  import Dark from "./codes/Dark.svelte";
  import Github from "./codes/Github.svelte";
  import type { StyleKey } from "./const/component-pair";

  export let skin: StyleKey;
</script>

<div>
  {#if skin === "github"}
    <Github />
  {:else if skin === "dark"}
    <Dark />
  {:else if skin === "a11yDark"}
    <A11yDark />
  {:else}
    <div>{skin}</div>
  {/if}
</div>
