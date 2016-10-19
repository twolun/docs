webpackJsonp([81],{184:function(s,t){s.exports='<section><h1>Swipe</h1> <blockquote> <p>An image slider. Custom interval and animation duration supported.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Swipe, SwipeItem } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Swipe.name, Swipe);\nVue.component(SwipeItem.name, SwipeItem);\n</code></pre> <h2>Example</h2> <p>Basic usage</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe</span> <span class=hljs-attr>:auto</span>=<span class=hljs-string>"4000"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>1<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>2<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>3<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe</span>&gt;</span>\n</code></pre> <p>hide indicators</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe</span> <span class=hljs-attr>:show-indicators</span>=<span class=hljs-string>"false"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>1<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>2<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>3<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe</span>&gt;</span>\n</code></pre> <p>cancel auto-play</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe</span> <span class=hljs-attr>:auto</span>=<span class=hljs-string>"0"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>1<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>2<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>3<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>speed</td> <td>duration of the animation(in millisecond)</td> <td>Number</td> <td></td> <td>300</td> </tr> <tr> <td>auto</td> <td>interval of auto-play(in millisecond)</td> <td>Number</td> <td></td> <td>3000</td> </tr> <tr> <td>continuous</td> <td>if an infinite slider without endpoints is created</td> <td>Boolean</td> <td></td> <td>true</td> </tr> <tr> <td>showIndicators</td> <td>visibility of indicators</td> <td>Boolean</td> <td></td> <td>true</td> </tr> <tr> <td>prevent</td> <td>if <code>preventDefault</code> is executed on <code>touchstart</code>. Useful for some lower version Android Browsers(4.2 etc.)</td> <td>Boolean</td> <td></td> <td>false</td> </tr> </tbody> </table></div><h2>Slot</h2> <h3>mt-swipe</h3> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>one or more <code>mt-swipe-item</code> components</td> </tr> </tbody> </table></div><h3>mt-swipe-item</h3> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>the content of a single slide</td> </tr> </tbody> </table></div></section>'},305:function(s,t,a){var n,e;e=a(184),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]),e&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=e)},79:function(s,t,a){s.exports=a(305)}});