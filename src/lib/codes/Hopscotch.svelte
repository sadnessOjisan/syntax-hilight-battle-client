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
  .hljs-comment,
  .hljs-quote {
    color: #989498;
  }
  .hljs-attribute,
  .hljs-deletion,
  .hljs-link,
  .hljs-name,
  .hljs-regexp,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-tag,
  .hljs-template-variable,
  .hljs-variable {
    color: #dd464c;
  }
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-literal,
  .hljs-number,
  .hljs-params,
  .hljs-type {
    color: #fd8b19;
  }
  .hljs-class .hljs-title {
    color: #fdcc59;
  }
  .hljs-addition,
  .hljs-bullet,
  .hljs-string,
  .hljs-symbol {
    color: #8fc13e;
  }
  .hljs-meta {
    color: #149b93;
  }
  .hljs-function,
  .hljs-section,
  .hljs-title {
    color: #1290bf;
  }
  .hljs-keyword,
  .hljs-selector-tag {
    color: #c85e7c;
  }
  .hljs {
    display: block;
    overflow-x: auto;
    background: #322931;
    color: #b9b5b8;
    padding: 0.5em;
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-strong {
    font-weight: 700;
  }
</style>
