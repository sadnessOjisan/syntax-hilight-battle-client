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
    background: #fff;
  }
  .hljs-name {
    color: #01a3a3;
  }
  .hljs-meta,
  .hljs-tag {
    color: #789;
  }
  .hljs,
  .hljs-subst {
    color: #444;
  }
  .hljs-comment {
    color: #888;
  }
  .hljs-attribute,
  .hljs-doctag,
  .hljs-keyword,
  .hljs-meta-keyword,
  .hljs-name,
  .hljs-selector-tag {
    font-weight: 700;
  }
  .hljs-deletion,
  .hljs-number,
  .hljs-quote,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-string,
  .hljs-template-tag,
  .hljs-type {
    color: #4286f4;
  }
  .hljs-section,
  .hljs-title {
    color: #4286f4;
    font-weight: 700;
  }
  .hljs-link,
  .hljs-regexp,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-symbol,
  .hljs-template-variable,
  .hljs-variable {
    color: #bc6060;
  }
  .hljs-literal {
    color: #62bcbc;
  }
  .hljs-addition,
  .hljs-built_in,
  .hljs-bullet,
  .hljs-code {
    color: #25c6c6;
  }
  .hljs-meta-string {
    color: #4d99bf;
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-strong {
    font-weight: 700;
  }
</style>
