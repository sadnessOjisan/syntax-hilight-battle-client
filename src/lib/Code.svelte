<script lang="ts">
 export let skin:string;
</script>

<pre>
  <!-- {@html `<style>${cssString}</style>`} -->
  <!-- {@html `<style>body{color: red;}</style>`} -->
dark
  <code class="language-tsx">
    {`type PageState =
        | undefined // 初期化時
        | { isLoading: true; data: undefined; error: undefined } // ローディング中
        | { isLoading: false; data: Posts[]; error: undefined } // ロード成功
        | { isLoading: false; data: undefined; error: string } // ロード失敗
      
      export const Posts = (props: { pageState: PageState }) =&gt; {
        if (props.pageState === undefined || props.pageState.isLoading) {
          return &lt;div&gt;loading&lt;/div&gt;
        }
      
        if (props.pageState.error !== undefined) {
          return &lt;div&gt;{error}&lt;/div&gt;
        }
      
        return (
          &lt;div&gt;
            {props.pageState.data.map(post =&gt; (
              &lt;Post key={post.id} data={post} /&gt;
            ))}
          &lt;/div&gt;
        )
      }`}
  </code></pre>
  
  <style lang="scss">
    /* @import "highlight.js/styles/dark.css";  */
 
    .hljs{display:block;overflow-x:auto;padding:.5em;background:#444}.hljs-keyword,.hljs-link,.hljs-literal,.hljs-section,.hljs-selector-tag{color:#fff}.hljs,.hljs-subst{color:#ddd}.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-bullet,.hljs-name,.hljs-string,.hljs-symbol,.hljs-template-tag,.hljs-template-variable,.hljs-title,.hljs-type,.hljs-variable{color:#d88}.hljs-comment,.hljs-deletion,.hljs-meta,.hljs-quote{color:#777}.hljs-doctag,.hljs-keyword,.hljs-literal,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-strong,.hljs-title,.hljs-type{font-weight:700}.hljs-emphasis{font-style:italic}
  </style>