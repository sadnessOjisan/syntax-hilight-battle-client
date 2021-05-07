<script lang="ts">
</script>

<div>
  color-brewer
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
    background: #fff;
  }
  .hljs,
  .hljs-subst {
    color: #000;
  }
  .hljs-addition,
  .hljs-meta,
  .hljs-string,
  .hljs-symbol,
  .hljs-template-tag,
  .hljs-template-variable {
    color: #756bb1;
  }
  .hljs-comment,
  .hljs-quote {
    color: #636363;
  }
  .hljs-bullet,
  .hljs-link,
  .hljs-literal,
  .hljs-number,
  .hljs-regexp {
    color: #31a354;
  }
  .hljs-deletion,
  .hljs-variable {
    color: #88f;
  }
  .hljs-built_in,
  .hljs-doctag,
  .hljs-keyword,
  .hljs-name,
  .hljs-section,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-selector-tag,
  .hljs-strong,
  .hljs-tag,
  .hljs-title,
  .hljs-type {
    color: #3182bd;
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-attribute {
    color: #e6550d;
  }
</style>
