<script lang="ts">
</script>

<div>
  atelier-cave-dark
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
    color: #7e7887;
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
    color: #be4678;
  }
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-params,
  .hljs-type {
    color: #aa573c;
  }
  .hljs-bullet,
  .hljs-string,
  .hljs-symbol {
    color: #2a9292;
  }
  .hljs-section,
  .hljs-title {
    color: #576ddb;
  }
  .hljs-keyword,
  .hljs-selector-tag {
    color: #955ae7;
  }
  .hljs-addition,
  .hljs-deletion {
    color: #19171c;
    display: inline-block;
    width: 100%;
  }
  .hljs-deletion {
    background-color: #be4678;
  }
  .hljs-addition {
    background-color: #2a9292;
  }
  .hljs {
    display: block;
    overflow-x: auto;
    background: #19171c;
    color: #8b8792;
    padding: 0.5em;
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-strong {
    font-weight: 700;
  }
</style>
