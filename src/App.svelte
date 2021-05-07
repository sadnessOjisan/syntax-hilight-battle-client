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
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        winner_id: syntaxHilight.id,
        looser_id: other.id,
      }),
    }).catch((e) => console.error(e));
  }
</script>

<div class="body">
  <main>
    <h2>好きな方をクリックしてください。</h2>
    <div class="codes">
      <!-- {#each pair as p}
      <div on:click={() => handleClick(p)} class="code">
        <h2 class="name">{p.name}</h2>
        <Code skin={p.name} />
      </div>
    {/each} -->
      <div on:click={() => handleClick({ id: 1, name: "arta" })} class="code">
        <h2 class="name">{"arta"}</h2>
        <Code skin={"agate"} />
      </div>
      <div on:click={() => handleClick({ id: 2, name: "agate" })} class="code">
        <h2 class="name">{"arta"}</h2>
        <Code skin={"arta"} />
      </div>
    </div>
  </main>
</div>

<style lang="scss">
  .body {
    font-family: "Lato", "Noto Sans JP", "ヒラギノ角ゴ ProN",
      "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, "ＭＳ Ｐゴシック",
      "MS PGothic", sans-serif;
    background-color: rgb(9, 48, 0);
    min-height: 100vh;
  }
  main {
    margin: 0 auto;
    padding: 16px;
    padding-top: 32px;
    @media (min-width: 1080px) {
      max-width: 1200px;
    }
    > h2 {
      color: white;
      text-align: center;
      font-size: 20px;
    }
  }

  .name {
    color: white;
    margin-bottom: 12px;
    font-size: 20px;
    text-align: center;
  }
  .codes {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    @media (min-width: 1080px) {
      flex-direction: row;
      margin-top: 36px;
    }
  }

  .code {
    margin-right: 24px;
    cursor: pointer;
    width: 100%;
    @media (min-width: 1080px) {
      width: 50%;
    }
    &:not(:first-child) {
      margin-top: 24px;
      @media (min-width: 1080px) {
        margin-top: initial;
        width: 50%;
      }
    }
  }
</style>
