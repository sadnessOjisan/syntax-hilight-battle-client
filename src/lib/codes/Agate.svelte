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
  /*!
 * Agate by Taufik Nurrohman <https://github.com/taufik-nurrohman>
 * ---------------------------------------------------------------
 *
 * #ade5fc
 * #a2fca2
 * #c6b4f0
 * #d36363
 * #fcc28c
 * #fc9b9b
 * #ffa
 * #fff
 * #333
 * #62c8f3
 * #888
 *
 */
  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #333;
    color: #fff;
  }
  .hljs-name,
  .hljs-strong {
    font-weight: 700;
  }
  .hljs-code,
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-tag {
    color: #62c8f3;
  }
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-template-variable,
  .hljs-variable {
    color: #ade5fc;
  }
  .hljs-bullet,
  .hljs-string {
    color: #a2fca2;
  }
  .hljs-attribute,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-quote,
  .hljs-section,
  .hljs-title,
  .hljs-type {
    color: #ffa;
  }
  .hljs-bullet,
  .hljs-number,
  .hljs-symbol {
    color: #d36363;
  }
  .hljs-keyword,
  .hljs-literal,
  .hljs-selector-tag {
    color: #fcc28c;
  }
  .hljs-code,
  .hljs-comment,
  .hljs-deletion {
    color: #888;
  }
  .hljs-link,
  .hljs-regexp {
    color: #c6b4f0;
  }
  .hljs-meta {
    color: #fc9b9b;
  }
  .hljs-deletion {
    background-color: #fc9b9b;
    color: #333;
  }
  .hljs-addition {
    background-color: #a2fca2;
    color: #333;
  }
  .hljs a {
    color: inherit;
  }
  .hljs a:focus,
  .hljs a:hover {
    color: inherit;
    text-decoration: underline;
  }
</style>
