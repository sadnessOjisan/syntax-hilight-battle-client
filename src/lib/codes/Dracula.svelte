<script lang="ts">
</script>

<div>
  dracula
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
    background: #282a36;
  }
  .hljs-keyword,
  .hljs-link,
  .hljs-literal,
  .hljs-section,
  .hljs-selector-tag {
    color: #8be9fd;
  }
  .hljs-function .hljs-keyword {
    color: #ff79c6;
  }
  .hljs,
  .hljs-subst {
    color: #f8f8f2;
  }
  .hljs-addition,
  .hljs-attribute,
  .hljs-bullet,
  .hljs-name,
  .hljs-string,
  .hljs-symbol,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-title,
  .hljs-type,
  .hljs-variable {
    color: #f1fa8c;
  }
  .hljs-comment,
  .hljs-deletion,
  .hljs-meta,
  .hljs-quote {
    color: #6272a4;
  }
  .hljs-doctag,
  .hljs-keyword,
  .hljs-literal,
  .hljs-name,
  .hljs-section,
  .hljs-selector-tag,
  .hljs-strong,
  .hljs-title,
  .hljs-type {
    font-weight: 700;
  }
  .hljs-emphasis {
    font-style: italic;
  }
</style>
