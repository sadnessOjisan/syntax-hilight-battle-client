<script lang="ts">
  import A11yDark from "./codes/A11yDark.svelte";
  import A11yLight from "./codes/A11yLight.svelte";
  import Agate from "./codes/Agate.svelte";
  import Arta from "./codes/Arta.svelte";

  import Dark from "./codes/Dark.svelte";
  import Default from "./codes/Default.svelte";
  import Github from "./codes/Github.svelte";
  import type { StyleKey } from "./const/component-pair";

  export let skin: StyleKey;
</script>

<div>
  {#if skin === "github"}
    <Github />
  {:else if skin === "dark"}
    <Dark />
  {:else if skin === "a11y-dark"}
    <A11yDark />
  {:else if skin === "a11y-light"}
    <A11yLight />
  {:else if skin === "default"}
    <Default />
  {:else if skin === "agate"}
    <Agate />
  {:else if skin === "arta"}
    <Arta />
  {:else}
    <div>{skin}</div>
  {/if}
</div>
