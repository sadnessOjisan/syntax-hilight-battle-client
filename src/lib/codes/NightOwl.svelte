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
    background: #011627;
    color: #d6deeb;
  }
  .hljs-keyword {
    color: #c792ea;
    font-style: italic;
  }
  .hljs-built_in {
    color: #addb67;
    font-style: italic;
  }
  .hljs-type {
    color: #82aaff;
  }
  .hljs-literal {
    color: #ff5874;
  }
  .hljs-number {
    color: #f78c6c;
  }
  .hljs-regexp {
    color: #5ca7e4;
  }
  .hljs-string {
    color: #ecc48d;
  }
  .hljs-subst {
    color: #d3423e;
  }
  .hljs-symbol {
    color: #82aaff;
  }
  .hljs-class {
    color: #ffcb8b;
  }
  .hljs-function {
    color: #82aaff;
  }
  .hljs-title {
    color: #dcdcaa;
    font-style: italic;
  }
  .hljs-params {
    color: #7fdbca;
  }
  .hljs-comment {
    color: #637777;
    font-style: italic;
  }
  .hljs-doctag {
    color: #7fdbca;
  }
  .hljs-meta {
    color: #82aaff;
  }
  .hljs-meta-keyword {
    color: #82aaff;
  }
  .hljs-meta-string {
    color: #ecc48d;
  }
  .hljs-section {
    color: #82b1ff;
  }
  .hljs-builtin-name,
  .hljs-name,
  .hljs-tag {
    color: #7fdbca;
  }
  .hljs-attr {
    color: #7fdbca;
  }
  .hljs-attribute {
    color: #80cbc4;
  }
  .hljs-variable {
    color: #addb67;
  }
  .hljs-bullet {
    color: #d9f5dd;
  }
  .hljs-code {
    color: #80cbc4;
  }
  .hljs-emphasis {
    color: #c792ea;
    font-style: italic;
  }
  .hljs-strong {
    color: #addb67;
    font-weight: 700;
  }
  .hljs-formula {
    color: #c792ea;
  }
  .hljs-link {
    color: #ff869a;
  }
  .hljs-quote {
    color: #697098;
    font-style: italic;
  }
  .hljs-selector-tag {
    color: #ff6363;
  }
  .hljs-selector-id {
    color: #fad430;
  }
  .hljs-selector-class {
    color: #addb67;
    font-style: italic;
  }
  .hljs-selector-attr,
  .hljs-selector-pseudo {
    color: #c792ea;
    font-style: italic;
  }
  .hljs-template-tag {
    color: #c792ea;
  }
  .hljs-template-variable {
    color: #addb67;
  }
  .hljs-addition {
    color: #addb67ff;
    font-style: italic;
  }
  .hljs-deletion {
    color: #ef535090;
    font-style: italic;
  }
</style>
