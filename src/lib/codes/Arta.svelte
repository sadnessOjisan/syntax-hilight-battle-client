<script lang="ts">
</script>

<div>
  <pre>
    <code class="language-js hljs javascript">
      <span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> reducer = (state: State, <span class="hljs-attr">action</span>: ActionType): <span class="hljs-function"><span class="hljs-params">State</span> =&gt;</span> {`{`}
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
</div>

<style lang="scss">
  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #222;
  }
  .hljs,
  .hljs-subst {
    color: #aaa;
  }
  .hljs-section {
    color: #fff;
  }
  .hljs-comment,
  .hljs-meta,
  .hljs-quote {
    color: #444;
  }
  .hljs-bullet,
  .hljs-regexp,
  .hljs-string,
  .hljs-symbol {
    color: #fc3;
  }
  .hljs-addition,
  .hljs-number {
    color: #0c6;
  }
  .hljs-attribute,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-link,
  .hljs-literal,
  .hljs-template-variable,
  .hljs-type {
    color: #32aaee;
  }
  .hljs-keyword,
  .hljs-name,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-selector-tag {
    color: #64a;
  }
  .hljs-deletion,
  .hljs-template-tag,
  .hljs-title,
  .hljs-variable {
    color: #b16;
  }
  .hljs-doctag,
  .hljs-section,
  .hljs-strong {
    font-weight: 700;
  }
  .hljs-emphasis {
    font-style: italic;
  }
</style>
