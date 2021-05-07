<script lang="ts">
</script>

<div>
  docco
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
    color: #000;
    background: #f8f8ff;
  }
  .hljs-comment,
  .hljs-quote {
    color: #408080;
    font-style: italic;
  }
  .hljs-keyword,
  .hljs-literal,
  .hljs-selector-tag,
  .hljs-subst {
    color: #954121;
  }
  .hljs-number {
    color: #40a070;
  }
  .hljs-doctag,
  .hljs-string {
    color: #219161;
  }
  .hljs-section,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-type {
    color: #19469d;
  }
  .hljs-params {
    color: #00f;
  }
  .hljs-title {
    color: #458;
    font-weight: 700;
  }
  .hljs-attribute,
  .hljs-name,
  .hljs-tag {
    color: navy;
    font-weight: 400;
  }
  .hljs-template-variable,
  .hljs-variable {
    color: teal;
  }
  .hljs-link,
  .hljs-regexp {
    color: #b68;
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
