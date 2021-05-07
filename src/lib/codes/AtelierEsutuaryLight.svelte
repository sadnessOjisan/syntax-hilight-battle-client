<script lang="ts">
</script>

<div>
  atelier-estuary-light
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
  .hljs-comment,
  .hljs-quote {
    color: #6c6b5a;
  }
  .hljs-attribute,
  .hljs-link,
  .hljs-name,
  .hljs-regexp,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-tag,
  .hljs-template-variable,
  .hljs-variable {
    color: #ba6236;
  }
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-params,
  .hljs-type {
    color: #ae7313;
  }
  .hljs-bullet,
  .hljs-string,
  .hljs-symbol {
    color: #7d9726;
  }
  .hljs-section,
  .hljs-title {
    color: #36a166;
  }
  .hljs-keyword,
  .hljs-selector-tag {
    color: #5f9182;
  }
  .hljs-addition,
  .hljs-deletion {
    color: #22221b;
    display: inline-block;
    width: 100%;
  }
  .hljs-deletion {
    background-color: #ba6236;
  }
  .hljs-addition {
    background-color: #7d9726;
  }
  .hljs {
    display: block;
    overflow-x: auto;
    background: #f4f3ec;
    color: #5f5e4e;
    padding: 0.5em;
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-strong {
    font-weight: 700;
  }
</style>
