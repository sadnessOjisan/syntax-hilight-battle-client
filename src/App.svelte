<script lang="ts">
  import { onMount } from "svelte";
  import hljs from "highlight.js";
  import Code from "./lib/Code.svelte";
  import { isValidSyntaxKey } from "./lib/const/component-pair";
  import type { StyleKey } from "./lib/const/component-pair";

  type SH = { id: number; name: StyleKey };
  type TResponse = SH[];

  const isValidResponse = (data: unknown): data is TResponse => {
    if (!Array.isArray(data)) {
      return false;
    }

    data.forEach((d) => {
      if (!isValidSyntaxKey(d)) {
        return false;
      }
    });

    return true;
  };

  let choices: TResponse;
  let pair: TResponse = [];

  const getPair = (choices: TResponse) => {
    let pair: TResponse;
    while (true) {
      const v1 = choices[Math.floor(Math.random() * choices.length)];
      const v2 = choices[Math.floor(Math.random() * choices.length)];
      if (v1.id !== v2.id) {
        pair = [v1, v2];
        break;
      }
    }
    return pair;
  };

  onMount(async () => {
    fetch("https://syntax-hilight-battle-api-xbwn74fo6q-an.a.run.app/battle")
      .then((res) => res.json())
      .then((data) => {
        if (!isValidResponse(data)) {
          throw new Error("invalid data");
        }
        choices = data;
        pair = getPair(choices);
      })
      .catch((e) => {
        console.error(e);
      });
    hljs.highlightAll();
  });

  function handleClick(syntaxHilight: SH) {
    let other: SH = pair.filter((p) => p.id !== syntaxHilight.id)[0];
    fetch("https://syntax-hilight-battle-api-xbwn74fo6q-an.a.run.app/save", {
      method: "POST",
      body: JSON.stringify({
        winner_id: syntaxHilight.id,
        looser_id: other.id,
      }),
    }).catch((e) => console.error(e));
  }
</script>

<main>
  <div class="codes">
    {#each pair as p}
      <div on:click={() => handleClick(p)} class="code">
        <Code skin={p.name} />
      </div>
    {/each}
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
