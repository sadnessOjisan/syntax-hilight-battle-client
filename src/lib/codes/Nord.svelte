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
    background: #2e3440;
  }
  .hljs,
  .hljs-subst {
    color: #d8dee9;
  }
  .hljs-selector-tag {
    color: #81a1c1;
  }
  .hljs-selector-id {
    color: #8fbcbb;
    font-weight: 700;
  }
  .hljs-selector-class {
    color: #8fbcbb;
  }
  .hljs-selector-attr {
    color: #8fbcbb;
  }
  .hljs-selector-pseudo {
    color: #88c0d0;
  }
  .hljs-addition {
    background-color: rgba(163, 190, 140, 0.5);
  }
  .hljs-deletion {
    background-color: rgba(191, 97, 106, 0.5);
  }
  .hljs-built_in,
  .hljs-type {
    color: #8fbcbb;
  }
  .hljs-class {
    color: #8fbcbb;
  }
  .hljs-function {
    color: #88c0d0;
  }
  .hljs-function > .hljs-title {
    color: #88c0d0;
  }
  .hljs-keyword,
  .hljs-literal,
  .hljs-symbol {
    color: #81a1c1;
  }
  .hljs-number {
    color: #b48ead;
  }
  .hljs-regexp {
    color: #ebcb8b;
  }
  .hljs-string {
    color: #a3be8c;
  }
  .hljs-title {
    color: #8fbcbb;
  }
  .hljs-params {
    color: #d8dee9;
  }
  .hljs-bullet {
    color: #81a1c1;
  }
  .hljs-code {
    color: #8fbcbb;
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-formula {
    color: #8fbcbb;
  }
  .hljs-strong {
    font-weight: 700;
  }
  .hljs-link:hover {
    text-decoration: underline;
  }
  .hljs-quote {
    color: #4c566a;
  }
  .hljs-comment {
    color: #4c566a;
  }
  .hljs-doctag {
    color: #8fbcbb;
  }
  .hljs-meta,
  .hljs-meta-keyword {
    color: #5e81ac;
  }
  .hljs-meta-string {
    color: #a3be8c;
  }
  .hljs-attr {
    color: #8fbcbb;
  }
  .hljs-attribute {
    color: #d8dee9;
  }
  .hljs-builtin-name {
    color: #81a1c1;
  }
  .hljs-name {
    color: #81a1c1;
  }
  .hljs-section {
    color: #88c0d0;
  }
  .hljs-tag {
    color: #81a1c1;
  }
  .hljs-variable {
    color: #d8dee9;
  }
  .hljs-template-variable {
    color: #d8dee9;
  }
  .hljs-template-tag {
    color: #5e81ac;
  }
  .abnf .hljs-attribute {
    color: #88c0d0;
  }
  .abnf .hljs-symbol {
    color: #ebcb8b;
  }
  .apache .hljs-attribute {
    color: #88c0d0;
  }
  .apache .hljs-section {
    color: #81a1c1;
  }
  .arduino .hljs-built_in {
    color: #88c0d0;
  }
  .aspectj .hljs-meta {
    color: #d08770;
  }
  .aspectj > .hljs-title {
    color: #88c0d0;
  }
  .bnf .hljs-attribute {
    color: #8fbcbb;
  }
  .clojure .hljs-name {
    color: #88c0d0;
  }
  .clojure .hljs-symbol {
    color: #ebcb8b;
  }
  .coq .hljs-built_in {
    color: #88c0d0;
  }
  .cpp .hljs-meta-string {
    color: #8fbcbb;
  }
  .css .hljs-built_in {
    color: #88c0d0;
  }
  .css .hljs-keyword {
    color: #d08770;
  }
  .diff .hljs-meta {
    color: #8fbcbb;
  }
  .ebnf .hljs-attribute {
    color: #8fbcbb;
  }
  .glsl .hljs-built_in {
    color: #88c0d0;
  }
  .groovy .hljs-meta:not(:first-child) {
    color: #d08770;
  }
  .haxe .hljs-meta {
    color: #d08770;
  }
  .java .hljs-meta {
    color: #d08770;
  }
  .ldif .hljs-attribute {
    color: #8fbcbb;
  }
  .lisp .hljs-name {
    color: #88c0d0;
  }
  .lua .hljs-built_in {
    color: #88c0d0;
  }
  .moonscript .hljs-built_in {
    color: #88c0d0;
  }
  .nginx .hljs-attribute {
    color: #88c0d0;
  }
  .nginx .hljs-section {
    color: #5e81ac;
  }
  .pf .hljs-built_in {
    color: #88c0d0;
  }
  .processing .hljs-built_in {
    color: #88c0d0;
  }
  .scss .hljs-keyword {
    color: #81a1c1;
  }
  .stylus .hljs-keyword {
    color: #81a1c1;
  }
  .swift .hljs-meta {
    color: #d08770;
  }
  .vim .hljs-built_in {
    color: #88c0d0;
    font-style: italic;
  }
  .yaml .hljs-meta {
    color: #d08770;
  }
</style>
