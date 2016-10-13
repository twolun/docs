webpackJsonp([57],{218:function(t,n){var d,e,s={};t.exports=d||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;e&&(a.template=e),a.computed||(a.computed={}),Object.keys(s).forEach(function(t){var n=s[t];a.computed[t]=function(){return n}})},88:function(t,n,d){t.exports=d(218),'<h1>Cell Swipe</h1>\n<blockquote>\n<p>可滑动的单元格，用法同 cell。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { CellSwipe } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(CellSwipe.name, Cell);\n</code></pre>\n<h2>例子</h2>\n<p>增加右滑动按钮</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell-swipe</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span>\n  <span class="hljs-attr">:right</span>=<span class="hljs-string">"[\n    {\n      content: \'Delete\',\n      style: { background: \'red\', color: \'#fff\' },\n      handler: () =&gt; this.$messagebox(\'delete\')\n    }\n  ]"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell-swipe</span>&gt;</span>\n</code></pre>\n<p><code>content</code> 可以是 HTML 或者纯文本。</p>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>icon</td>\n<td>图标</td>\n<td>String</td>\n<td>back, more</td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td>标题</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>内容</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>label</td>\n<td>备注信息，显示在标题下方</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>is-link</td>\n<td>链接，会显示箭头图标。搭配 href 属性使用</td>\n<td>Boolean</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>left</td>\n<td>按钮组, <code>{ content, style, handler }</code></td>\n<td>Object[]</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>right</td>\n<td>按钮组, <code>{ content, style, handler }</code></td>\n<td>Object[]</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>自定义显示内容</td>\n</tr>\n<tr>\n<td>title</td>\n<td>自定义标题</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>自定义图标</td>\n</tr>\n</tbody>\n</table></div>'!==t.exports.template&&(t.exports.template='<h1>Cell Swipe</h1>\n<blockquote>\n<p>可滑动的单元格，用法同 cell。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { CellSwipe } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(CellSwipe.name, Cell);\n</code></pre>\n<h2>例子</h2>\n<p>增加右滑动按钮</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell-swipe</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span>\n  <span class="hljs-attr">:right</span>=<span class="hljs-string">"[\n    {\n      content: \'Delete\',\n      style: { background: \'red\', color: \'#fff\' },\n      handler: () =&gt; this.$messagebox(\'delete\')\n    }\n  ]"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell-swipe</span>&gt;</span>\n</code></pre>\n<p><code>content</code> 可以是 HTML 或者纯文本。</p>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>icon</td>\n<td>图标</td>\n<td>String</td>\n<td>back, more</td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td>标题</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>内容</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>label</td>\n<td>备注信息，显示在标题下方</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>is-link</td>\n<td>链接，会显示箭头图标。搭配 href 属性使用</td>\n<td>Boolean</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>left</td>\n<td>按钮组, <code>{ content, style, handler }</code></td>\n<td>Object[]</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>right</td>\n<td>按钮组, <code>{ content, style, handler }</code></td>\n<td>Object[]</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>自定义显示内容</td>\n</tr>\n<tr>\n<td>title</td>\n<td>自定义标题</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>自定义图标</td>\n</tr>\n</tbody>\n</table></div>')}});