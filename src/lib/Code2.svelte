<script lang="ts">
  export let skin: string;
</script>

<div>
  github
  <pre>
  <!-- {@html `<style ✂prettier:content✂="JHtjc3NTdHJpbmd9"></style>`} -->
<pre>
  <code class="language-js hljs javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> reducer = (state: State, <span class="hljs-attr">action</span>: ActionType): <span class="hljs-function"><span class="hljs-params">State</span> =&gt;</span> {`{`}
  <span class="hljs-keyword">switch</span> (action.type) {`{`}
    <span class="hljs-keyword">case</span> START_FETCH_DATA:
      <span class="hljs-keyword">return</span> {`{`}
        ...state,
        <span class="hljs-attr">isLoading</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">data</span>: <span class="hljs-literal">undefined</span>,
        <span class="hljs-attr">error</span>: <span class="hljs-literal">undefined</span>,
      }
    <span class="hljs-keyword">case</span> SUCCESS_FETCH_DATA:
      <span class="hljs-keyword">return</span> {`{`}
        ...state,
        <span class="hljs-attr">isLoading</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">data</span>: action.payload,
        <span class="hljs-attr">error</span>: <span class="hljs-literal">undefined</span>,
      }
    <span class="hljs-keyword">case</span> FAIL_FETCH_DATA:
      <span class="hljs-keyword">return</span> {`{`}
        ...state,
        <span class="hljs-attr">isLoading</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">data</span>: <span class="hljs-literal">undefined</span>,
        <span class="hljs-attr">error</span>: action.payload,
      }
    <span class="hljs-attr">default</span>:
      <span class="hljs-keyword">return</span> state
  }
}
</code></pre>
</pre>
</div>

<style lang="scss">
  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #333;
    background: #f8f8f8;
  }
  .hljs-comment,
  .hljs-quote {
    color: #998;
    font-style: italic;
  }
  　　 .hljs-keyword,
  .hljs-selector-tag,
  .hljs-subst {
    color: #333;
    font-weight: 700;
  }
  .hljs-literal,
  .hljs-number,
  .hljs-tag .hljs-attr,
  .hljs-template-variable,
  .hljs-variable {
    color: teal;
  }
  .hljs-doctag,
  .hljs-string {
    color: #d14;
  }
  .hljs-section,
  .hljs-selector-id,
  .hljs-title {
    color: #900;
    font-weight: 700;
  }
  .hljs-subst {
    font-weight: 400;
  }
  .hljs-class .hljs-title,
  .hljs-type {
    color: #458;
    font-weight: 700;
  }
  .hljs-attribute,
  .hljs-name,
  .hljs-tag {
    color: navy;
    font-weight: 400;
  }
  .hljs-link,
  .hljs-regexp {
    color: #009926;
  }
  .hljs-bullet,
  .hljs-symbol {
    color: #990073;
  }
  .hljs-built_in,
  .hljs-builtin-name {
    color: #0086b3;
  }
  .hljs-meta {
    color: #999;
    font-weight: 700;
  }
  .hljs-deletion {
    background: #fdd;
  }
  .hljs-addition {
    background: #dfd;
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-strong {
    font-weight: 700;
  }
</style>
