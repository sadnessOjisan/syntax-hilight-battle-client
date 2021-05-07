<script lang="ts">
  import A11yDark from "./codes/A11yDark.svelte";
  import A11yLight from "./codes/A11yLight.svelte";
  import Agate from "./codes/Agate.svelte";
  import Arta from "./codes/Arta.svelte";
  import AtelierCaveDark from "./codes/AtelierCaveDark.svelte";
  import AtelierEsutuaryLight from "./codes/AtelierEsutuaryLight.svelte";
  import AtomOneDark from "./codes/AtomOneDark.svelte";
  import ColorBrewer from "./codes/ColorBrewer.svelte";

  import Dark from "./codes/Dark.svelte";
  import Default from "./codes/Default.svelte";
  import Docco from "./codes/Docco.svelte";
  import Dracula from "./codes/Dracula.svelte";
  import Github from "./codes/Github.svelte";
  import Hopscotch from "./codes/Hopscotch.svelte";
  import Lightfair from "./codes/Lightfair.svelte";
  import NightOwl from "./codes/NightOwl.svelte";
  import Nord from "./codes/Nord.svelte";
  import Ocean from "./codes/Ocean.svelte";
  import Rainbow from "./codes/Rainbow.svelte";
  import type { StyleKey } from "./const/component-pair";
  import { assertNever } from "./util/assert-never";

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
  {:else if skin === "atelier-cave-dark"}
    <AtelierCaveDark />
  {:else if skin === "atelier-estuary-light"}
    <AtelierEsutuaryLight />
  {:else if skin === "atom-one-dark"}
    <AtomOneDark />
  {:else if skin === "color-brewer"}
    <ColorBrewer />
  {:else if skin === "dracula"}
    <Dracula />
  {:else if skin === "docco"}
    <Docco />
  {:else if skin === "hopscotch"}
    <Hopscotch />
  {:else if skin === "lightfair"}
    <Lightfair />
  {:else if skin === "night-owl"}
    <NightOwl />
  {:else if skin === "nord"}
    <Nord />
  {:else if skin === "ocean"}
    <Ocean />
  {:else if skin === "rainbow"}
    <Rainbow />
  {:else}
    <div>{assertNever(skin)}</div>
  {/if}
</div>
