<script lang="ts">
</script>

<div>
  rainbow
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
    background: #474949;
    color: #d1d9e1;
  }
  .hljs-comment,
  .hljs-quote {
    color: #969896;
    font-style: italic;
  }
  .hljs-addition,
  .hljs-keyword,
  .hljs-literal,
  .hljs-selector-tag,
  .hljs-type {
    color: #c9c;
  }
  .hljs-number,
  .hljs-selector-attr,
  .hljs-selector-pseudo {
    color: #f99157;
  }
  .hljs-doctag,
  .hljs-regexp,
  .hljs-string {
    color: #8abeb7;
  }
  .hljs-built_in,
  .hljs-name,
  .hljs-section,
  .hljs-title {
    color: #b5bd68;
  }
  .hljs-class .hljs-title,
  .hljs-selector-id,
  .hljs-template-variable,
  .hljs-variable {
    color: #fc6;
  }
  .hljs-name,
  .hljs-section,
  .hljs-strong {
    font-weight: 700;
  }
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-subst,
  .hljs-symbol {
    color: #f99157;
  }
  .hljs-deletion {
    color: #dc322f;
  }
  .hljs-formula {
    background: #eee8d5;
  }
  .hljs-attr,
  .hljs-attribute {
    color: #81a2be;
  }
  .hljs-emphasis {
    font-style: italic;
  }
</style>
