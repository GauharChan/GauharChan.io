import{_ as a,c as n,a as e,b as l,o,r as p}from"./app.fd99b05a.js";const C=JSON.parse('{"title":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F","description":"","frontmatter":{"title":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F","date":"2019-09-03T12:02:41.000Z","categories":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F"},"headers":[{"level":3,"title":"\u7EC4\u4EF6(\u6807\u7B7E)","slug":"\u7EC4\u4EF6-\u6807\u7B7E","link":"#\u7EC4\u4EF6-\u6807\u7B7E","children":[]},{"level":2,"title":"checkbox-group","slug":"checkbox-group","link":"#checkbox-group","children":[{"level":3,"title":"wxss","slug":"wxss","link":"#wxss","children":[]}]},{"level":2,"title":"complate \u56DE\u8C03\u51FD\u6570","slug":"complate-\u56DE\u8C03\u51FD\u6570","link":"#complate-\u56DE\u8C03\u51FD\u6570","children":[]},{"level":2,"title":"wx.getSetting","slug":"wx-getsetting","link":"#wx-getsetting","children":[{"level":3,"title":"scope \u5217\u8868","slug":"scope-\u5217\u8868","link":"#scope-\u5217\u8868","children":[]}]},{"level":2,"title":"chooseAddress","slug":"chooseaddress","link":"#chooseaddress","children":[{"level":3,"title":"\u6CE8\u610F\u70B9","slug":"\u6CE8\u610F\u70B9","link":"#\u6CE8\u610F\u70B9","children":[]}]}],"relativePath":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F.md"}'),t={name:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F.md"},c=l(`<div class="language-tex"><button title="Copy Code" class="copy"></button><span class="lang">tex</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">### \u57FA\u672C\u8BED\u6CD5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">### Mustache\u8BED\u6CD5   \`{{}}\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&gt; \`{{something}}\` \u53CC\u82B1\u62EC\u53F7\u4E2D\u7684\u53D8\u91CF\u662F\u5728\`js\`\u6587\u4EF6\u4E2D\u7684\`data\`\u5BF9\u8C61\u5B9A\u4E49\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; **\u6CE8\u610F\u53CC\u82B1\u62EC\u53F7\u4E2D\u4E0D\u8981\u5199\u7A7A\u683C,\u5982\u679C\u6709\u7A7A\u683C\uFF0C\u5C06\u6700\u7EC8\u88AB\u89E3\u6790\u6210\u4E3A\u5B57\u7B26\u4E32**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">1. \u7EC4\u4EF6\u7684\u5C5E\u6027(\u9700\u8981\u5728\u53CC\u5F15\u53F7\u4E4B\u5185)\uFF1A\`id=&quot;item-{{id}}&quot;\`\uFF0C\`wx:if=&quot;{{isShow}}&quot;\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">2. \u5173\u952E\u5B57\uFF1A\`&lt;checkbox checked=&quot;{{false}}&quot;&gt; &lt;/checkbox&gt;\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   **\u7279\u522B\u6CE8\u610F\uFF1A\u4E0D\u8981\u76F4\u63A5\u5199 checked=&quot;false&quot;\uFF0C\u5176\u8BA1\u7B97\u7ED3\u679C\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8F6C\u6210 boolean \u7C7B\u578B\u540E\u4EE3\u8868\u771F\u503C\u3002**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">3. \u8BE5\u8BED\u6CD5\u652F\u6301\u7B80\u5355\u7684\u8FD0\u7B97\uFF0C**\u4E09\u5143\u8868\u8FBE\u5F0F\uFF0C\u903B\u8F91\u5224\u65AD\uFF0C\u8BA1\u7B97\uFF0C\u5B57\u7B26\u4E32\u62FC\u63A5\u7B49**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">4. \u53EF\u4EE5\u5408\u6210\u5BF9\u8C61\uFF0C\`data=&quot;{{for: a, bar: b}}&quot;\`,a=1,b=2,ab\u662F\u5728\`data\`\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u6700\u540E\u5F97\u5230\u7684\u5408\u6210\u5BF9\u8C61\u662F\`{for:1,bar:2}\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">5. \u4E5F\u53EF\u4EE5\u4F7F\u7528\u5C55\u5F00\u8FD0\u7B97\u7B26\uFF0C\`data=&quot;{{...obj}}&quot;\`</span></span>
<span class="line"></span></code></pre></div><h3 id="\u7EC4\u4EF6-\u6807\u7B7E" tabindex="-1">\u7EC4\u4EF6(\u6807\u7B7E) <a class="header-anchor" href="#\u7EC4\u4EF6-\u6807\u7B7E" aria-hidden="true">#</a></h3><p><code>div</code>===&gt; <code>view</code></p><p><code>span</code>===&gt;<code>text</code></p><h4 id="text-\u6807\u7B7E" tabindex="-1">text \u6807\u7B7E <a class="header-anchor" href="#text-\u6807\u7B7E" aria-hidden="true">#</a></h4><blockquote><p>\u9700\u8981\u8BBE\u7F6E\u5C5E\u6027<code>selectable</code>\u4E3A true \u7684\u4E4B\u540E\u624D\u80FD\u89E6\u53D1\u957F\u6309\u9009\u62E9\u6587\u5B57</p></blockquote><p>1 text \u6807\u7B7E\u76F8\u5F53\u4E8E\u4EE5\u524D\u7684 span \u6807\u7B7E 2 \u9ED8\u8BA4\u662F\u884C\u5185\u5143\u7D20 \u4E0D\u4F1A\u6362\u884C\uFF01\uFF01\uFF01 3 \u5728\u5C0F\u7A0B\u5E8F\u4E2D <strong>\u53EA\u6709\u5B83\u53EF\u4EE5\u5B9E\u73B0 \u957F\u6309\u6587\u5B57 \u590D\u5236</strong>\uFF01\uFF01</p><h4 id="image-\u56FE\u7247\u6807\u7B7E" tabindex="-1">image \u56FE\u7247\u6807\u7B7E <a class="header-anchor" href="#image-\u56FE\u7247\u6807\u7B7E" aria-hidden="true">#</a></h4><p>1 \u89C2\u5BDF <strong>image \u6807\u7B7E</strong>\u7684\u9ED8\u8BA4\u5BBD\u5EA6\u548C\u9AD8\u5EA6</p><p>\u200B <strong>320 * 240 px</strong></p><p>\u200B \u9ED8\u8BA4\u60C5\u51B5\u4E0B \u9AD8\u5EA6 \u4E0D\u4F1A\u8DDF\u968F\u56FE\u7247\u7684\u5BBD\u5EA6\u6539\u53D8\u800C\u53D1\u751F\u6539\u53D8</p><p>2 src \u8981\u52A0\u8F7D\u7684\u56FE\u7247\u8DEF\u5F84</p><p>\u200B 1 \u5C0F\u7A0B\u5E8F\u4E2D\u7528\u7684\u56FE\u7247\u90FD\u4F7F\u7528<strong>\u5916\u7F51</strong>\u7684 \u53EF\u4EE5\u4F7F\u7528<a href="https://images.ac.cn/" target="_blank" rel="noreferrer">\u56FE\u5E8A</a> <a href="https://imgchr.com/" target="_blank" rel="noreferrer">\u8FD8\u6709\u5907\u7528\u7684</a></p><p>\u200B \u5C0F\u7A0B\u5E8F\u9879\u76EE\u8981\u4E0A\u7EBF \u5927\u5C0F\u9650\u5236 \u662F <strong>2M</strong></p><p>3 mode \u6E32\u67D3\u6A21\u5F0F</p><p>\u200B 1 \u628A image \u6807\u7B7E\u5206\u6210\u4E24\u4E2A\u90E8\u5206\u6765\u7406\u89E3 \u548C\u4EE5\u524D\u7684 div + \u80CC\u666F\u56FE\u7247\u4E00\u6837\uFF01\uFF01\uFF01</p><p>\u200B 1 \u76F8\u6846 \u90E8\u5206</p><p>\u200B 2 \u56FE\u7247\u5185\u5BB9\u90E8\u5206</p><p>\u200B</p><p>\u200B 2 <strong>widthFix</strong> \u7528\u5F97\u6BD4\u8F83\u591A\u7684\uFF01\uFF01</p><p>\u200B 1 \u56FE\u7247\u5185\u5BB9 \u7B49\u4E8E \u76F8\u6846\u7684\u5BBD\u5EA6</p><p>\u200B 2 \u56FE\u7247\u7684\u9AD8\u5EA6 \u4F1A\u8DDF\u968F\u7740 \u56FE\u7247\u5185\u5BB9\u7684\u5BBD\u5EA6 <strong>\u7B49\u6BD4\u4F8B\u53D1\u751F\u53D8\u5316</strong></p><p>\u200B 3 \u8FD9\u4E2A\u5C5E\u6027\u7684\u6548\u679C \u5176\u5B9E\u5C31\u7B49\u4E8E web \u4E2D\u7684\u56FE\u7247\u7684\u9ED8\u8BA4\u6548\u679C \u9AD8\u5EA6\u7B49\u6BD4\u4F8B\u53D8\u5316</p><p>\u200B 3 scaleToFill <strong>\u9ED8\u8BA4\u503C</strong></p><p>\u200B 1 \u628A\u56FE\u7247\u5185\u5BB9 \u586B \u5145\u6EE1 \u76F8\u6846\uFF01\uFF01 <strong>\u4E0D\u4FDD\u6301\u5BBD\u9AD8\u6BD4\u4F8B</strong></p><p>\u200B 4 aspectFit \u7528\u5F97\u6BD4\u8F83\u591A\u7684\uFF01\uFF01</p><p>\u200B 1 \u7B49\u6BD4\u4F8B\u62C9\u4F38\u56FE\u7247\u5185\u5BB9</p><p>\u200B 2 \u76F8\u6846\u4F1A\u5B8C\u5168\u7684\u5305\u4F4F\u56FE\u7247\u5185\u5BB9</p><p>\u200B 5 aspectFill</p><p>\u200B 1 \u7B49\u6BD4\u4F8B\u62C9\u4F38\u56FE\u7247\u5185\u5BB9</p><p>\u200B 2 \u56FE\u7247\u5185\u5BB9\u4F1A\u586B\u5145\u6EE1 \u76F8\u6846</p><p>\u200B 6 \u4EE5\u4E0A\u7684\u5C5E\u6027\u548C\u4EE5\u524D\u5B66\u4E60\u8FC7</p><p>\u200B background-size:</p><p>\u200B contain</p><p>\u200B cover</p><p>\u200B 100% 100%</p><p><img src="https://s2.ax1x.com/2019/09/03/nkdUOO.png" alt="1564129700966"></p><h2 id="checkbox-group" tabindex="-1"><code>checkbox-group</code> <a class="header-anchor" href="#checkbox-group" aria-hidden="true">#</a></h2><blockquote><p>\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u624D\u80FD\u89E6\u53D1\u4E8B\u4EF6\uFF0C<code>bind:change</code></p></blockquote><p>\u914D\u5408<code>checkbox</code>\u4F7F\u7528\uFF0C\u590D\u9009\u6846\uFF0Ccheckbox \u7684 color \u5C5E\u6027\u53EF\u4EE5\u4FEE\u6539\u9009\u4E2D\u72B6\u6001\u7684\u989C\u8272</p><h4 id="rich-text" tabindex="-1"><code>rich-text</code> <a class="header-anchor" href="#rich-text" aria-hidden="true">#</a></h4><blockquote><p>\u5BCC\u6587\u672C\u6807\u7B7E\uFF0C\u76F8\u5F53\u4E8E<code>vue</code>\u4E2D\u7684<code>v-html</code></p></blockquote><p>\u5F53\u5B83\u7684<code>nodes</code>\u5C5E\u6027\u662F\u5B57\u7B26\u4E32\u7684\u65F6\u5019\uFF0C\u53EA\u80FD\u652F\u6301<code>html</code>\u7684\u6807\u7B7E\uFF0C\u800C\u4E0D\u662F\u5C0F\u7A0B\u5E8F\u4E2D\u7684\u7EC4\u4EF6</p><p>\u66F4\u52A0\u63A8\u8350\u4F7F\u7528\u6570\u7EC4</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">rich-text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">nodes</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{nodes}}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#FFCB6B;">rich-text</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">page</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">nodes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u5B9A\u4E49\u6807\u7B7E\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u5B9A\u4E49\u6807\u7B7E\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">attrs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">color:white;height:150px;background:#bfa;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u5B9A\u4E49\u5B50\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u5FC5\u987B\u5B9A\u4E49type\u5C5E\u6027\u4E3Atext\u7684\u65F6\u5019\u624D\u80FD\u8F93\u51FA\u6587\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">444444</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="swiper" tabindex="-1"><code>swiper</code> <a class="header-anchor" href="#swiper" aria-hidden="true">#</a></h4><blockquote><p>\u8F6E\u64AD\u56FE\u7EC4\u4EF6\u9ED8\u8BA4\u9AD8\u5EA6\u662F<code>150px</code> \u5BBD\u5EA6\u662F 100%</p></blockquote><p>\u9700\u8981\u914D\u5408<code>swiper-item</code>\u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">swiper</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">indicator-dots</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">autoplay</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{true}}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">circular</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">interval</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">swiper-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">image</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">widthFix</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://img.alicdn.com/imgextra/i2/108/O1CN01WIZp3I1CfVK0ukVDB_!!108-0-luban.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">swiper-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">swiper-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">image</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">widthFix</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">swiper-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">swiper</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h4 id="navigator" tabindex="-1"><code>navigator</code> <a class="header-anchor" href="#navigator" aria-hidden="true">#</a></h4><blockquote><p>\u7C7B\u4F3C\u8D85\u94FE\u63A5\u6807\u7B7E\uFF0C\u7528\u4E8E\u8DF3\u8F6C\u9875\u9762\u6216\u8005\u5C0F\u7A0B\u5E8F</p></blockquote><h4 id="\u6570\u7EC4\u5FAA\u73AF" tabindex="-1">\u6570\u7EC4\u5FAA\u73AF <a class="header-anchor" href="#\u6570\u7EC4\u5FAA\u73AF" aria-hidden="true">#</a></h4><blockquote><p>\u9ED8\u8BA4\u6570\u7EC4\u7684\u5F53\u524D\u9879\u7684\u4E0B\u6807\u53D8\u91CF\u540D\u9ED8\u8BA4\u4E3A <code>index</code>\uFF0C\u6570\u7EC4\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D\u9ED8\u8BA4\u4E3A <code>item</code></p></blockquote><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">wx:for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{array}}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">wx:for-index</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">\u9ED8\u8BA4\u503C\uFF0C\u53EF\u4EE5\u4E0D\u5199</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u65B9\u5F0F\u91CD\u547D\u540D</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">wx:for-item</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">\u9ED8\u8BA4\u503C\uFF0C\u53EF\u4EE5\u4E0D\u5199</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">wx:key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><blockquote><p><strong>\u5F53 <code>wx:for</code> \u7684\u503C\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u4F1A\u5C06\u5B57\u7B26\u4E32\u89E3\u6790\u6210\u5B57\u7B26\u4E32\u6570\u7EC4</strong></p></blockquote><h4 id="wx-key" tabindex="-1"><code>wx:key</code> <a class="header-anchor" href="#wx-key" aria-hidden="true">#</a></h4><blockquote><p>\u4E24\u79CD\u503C</p></blockquote><div class="language-tex"><button title="Copy Code" class="copy"></button><span class="lang">tex</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u5B57\u7B26\u4E32: \u4EE3\u8868\u5728 for \u5FAA\u73AF\u7684 array \u4E2D item \u7684\u67D0\u4E2A property(\u5C5E\u6027)\uFF0C\u8BE5 property \u7684\u503C\u9700\u8981\u662F\u5217\u8868\u4E2D\u552F\u4E00\u7684\u5B57\u7B26\u4E32\u6216\u6570\u5B57\uFF0C\u4E14\u4E0D\u80FD\u52A8\u6001\u6539\u53D8\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u4FDD\u7559\u5173\u952E\u5B57: *this \u4EE3\u8868\u5728 for \u5FAA\u73AF\u4E2D\u7684 item \u672C\u8EAB\uFF0C\u8FD9\u79CD\u8868\u793A\u9700\u8981 item \u672C\u8EAB\u662F\u4E00\u4E2A\u552F\u4E00\u7684\u5B57\u7B26\u4E32\u6216\u8005\u6570\u5B57\uFF0C</span></span>
<span class="line"></span></code></pre></div><h4 id="wx-if" tabindex="-1"><code>wx:if</code> <a class="header-anchor" href="#wx-if" aria-hidden="true">#</a></h4><p><code>&lt;block/&gt;</code> \u5E76\u4E0D\u662F\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5B83\u4EC5\u4EC5\u662F\u4E00\u4E2A\u5305\u88C5\u5143\u7D20\uFF0C\u4E0D\u4F1A\u5728\u9875\u9762\u4E2D\u505A\u4EFB\u4F55\u6E32\u67D3\uFF0C\u53EA\u63A5\u53D7\u63A7\u5236\u5C5E\u6027\u3002<strong>\u76F8\u5F53\u4E8E<code>vue</code>\u4E2D\u7684<code>&lt;template&gt;&lt;/template&gt;</code></strong></p><p><strong><code>wx:if</code> vs <code>hidden\u5C5E\u6027</code></strong>=====&gt; vue \u4E2D\u7684<code>v-if</code>\uFF0C<code>v-show</code></p><h3 id="wxss" tabindex="-1">wxss <a class="header-anchor" href="#wxss" aria-hidden="true">#</a></h3><h4 id="rpx\u5C3A\u5BF8\u5355\u4F4D" tabindex="-1"><code>rpx</code>\u5C3A\u5BF8\u5355\u4F4D <a class="header-anchor" href="#rpx\u5C3A\u5BF8\u5355\u4F4D" aria-hidden="true">#</a></h4><blockquote><p>\u4E0D\u540C\u7684\u5C4F\u5E55\u7684<code>rpx</code>\u8F6C\u6362\u4E3A\u50CF\u7D20\u7684\u503C\u4E0D\u540C</p></blockquote><p><code>rpx</code>\uFF08responsive pixel\uFF09: \u53EF\u4EE5\u6839\u636E\u5C4F\u5E55\u5BBD\u5EA6\u8FDB\u884C\u81EA\u9002\u5E94\u3002<strong>\u89C4\u5B9A\u5C4F\u5E55\u5BBD\u4E3A<code>750rpx</code></strong>\u3002\u5982\u5728 <code>iPhone6</code> \u4E0A\uFF0C\u5C4F\u5E55\u5BBD\u5EA6\u4E3A<code>375px</code>\uFF0C\u5171\u6709 750 \u4E2A\u7269\u7406\u50CF\u7D20\uFF0C\u5219<code>750rpx = 375px = 750\u7269\u7406\u50CF\u7D20</code>\uFF0C<code>1rpx = 0.5px = 1\u7269\u7406\u50CF\u7D20</code>\u3002</p><blockquote><p><code>vw</code> \u89C6\u53E3\u5BBD\u5EA6\uFF0C<code>vh</code> \u89C6\u53E3\u9AD8\u5EA6</p></blockquote><h4 id="\u5F15\u5165\u6587\u4EF6" tabindex="-1">\u5F15\u5165\u6587\u4EF6 <a class="header-anchor" href="#\u5F15\u5165\u6587\u4EF6" aria-hidden="true">#</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/* \u5BFC\u5165 \u53EA\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84 */</span></span>
<span class="line"><span style="color:#89DDFF;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./styles/reset.wxss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u4F7F\u7528\u63D2\u4EF6<code>easy less</code>\u628A<code>less</code>\u6587\u4EF6\u8F6C\u6362\u4E3A<code>wxss</code>\u6587\u4EF6</p><h2 id="complate-\u56DE\u8C03\u51FD\u6570" tabindex="-1">complate \u56DE\u8C03\u51FD\u6570 <a class="header-anchor" href="#complate-\u56DE\u8C03\u51FD\u6570" aria-hidden="true">#</a></h2><blockquote><p>\u8868\u793A\u4E0D\u7BA1\u8BF7\u6C42\u662F\u5931\u8D25\u8FD8\u662F\u6210\u529F\u90FD\u4F1A\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570</p></blockquote><p><strong>\u4E00\u822C\u7528\u4E8E\u5173\u95ED\u63D0\u793A\u4FE1\u606F\uFF0C\u6BD4\u5982 loading \u56FE\u6807\u63D0\u793A</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showLoading</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u52A0\u8F7D\u4E2D</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hideLoading</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="wx-getsetting" tabindex="-1">wx.getSetting <a class="header-anchor" href="#wx-getsetting" aria-hidden="true">#</a></h2><blockquote><p>\u6267\u884C\u51FD\u6570\uFF0C\u901A\u8FC7\u56DE\u8C03\u51FD\u6570 success \u7684\u5F62\u53C2\uFF0C<code>result.authSetting</code>\u53EF\u4EE5\u83B7\u53D6\u7528\u6237\u6388\u6743\u60C5\u51B5</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> scope </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> res1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">authSetting[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scope.address</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]  </span><span style="color:#676E95;">// \u8FD9\u91CC\u7684\u5C5E\u6027\u540D\u5BF9\u5E94\u4E0B\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8FD9\u65F6\u5019</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scope</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\u7684\u503C</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">3\u4E2D\u60C5\u51B5</span></span>
<span class="line"><span style="color:#89DDFF;">undefined</span></span>
<span class="line"><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span></code></pre></div><h3 id="scope-\u5217\u8868" tabindex="-1">scope \u5217\u8868 <a class="header-anchor" href="#scope-\u5217\u8868" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">scope</th><th style="text-align:left;">\u5BF9\u5E94\u63A5\u53E3</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">scope.userInfo</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html" target="_blank" rel="noreferrer">wx.getUserInfo</a></td><td style="text-align:left;">\u7528\u6237\u4FE1\u606F</td></tr><tr><td style="text-align:left;">scope.userLocation</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html" target="_blank" rel="noreferrer">wx.getLocation</a>, <a href="https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html" target="_blank" rel="noreferrer">wx.chooseLocation</a></td><td style="text-align:left;">\u5730\u7406\u4F4D\u7F6E</td></tr><tr><td style="text-align:left;">scope.userLocationBackground</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/(wx.userLocationBackground)" target="_blank" rel="noreferrer">wx.userLocationBackground</a></td><td style="text-align:left;">\u540E\u53F0\u5B9A\u4F4D</td></tr><tr><td style="text-align:left;">scope.address</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html" target="_blank" rel="noreferrer">wx.chooseAddress</a></td><td style="text-align:left;">\u901A\u8BAF\u5730\u5740</td></tr><tr><td style="text-align:left;">scope.invoiceTitle</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html" target="_blank" rel="noreferrer">wx.chooseInvoiceTitle</a></td><td style="text-align:left;">\u53D1\u7968\u62AC\u5934</td></tr><tr><td style="text-align:left;">scope.invoice</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html" target="_blank" rel="noreferrer">wx.chooseInvoice</a></td><td style="text-align:left;">\u83B7\u53D6\u53D1\u7968</td></tr><tr><td style="text-align:left;">scope.werun</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html" target="_blank" rel="noreferrer">wx.getWeRunData</a></td><td style="text-align:left;">\u5FAE\u4FE1\u8FD0\u52A8\u6B65\u6570</td></tr><tr><td style="text-align:left;">scope.record</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html" target="_blank" rel="noreferrer">wx.startRecord</a></td><td style="text-align:left;">\u5F55\u97F3\u529F\u80FD</td></tr><tr><td style="text-align:left;">scope.writePhotosAlbum</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html" target="_blank" rel="noreferrer">wx.saveImageToPhotosAlbum</a>, <a href="https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html" target="_blank" rel="noreferrer">wx.saveVideoToPhotosAlbum</a></td><td style="text-align:left;">\u4FDD\u5B58\u5230\u76F8\u518C</td></tr><tr><td style="text-align:left;">scope.camera</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/component/camera.html" target="_blank" rel="noreferrer">camera</a> \u7EC4\u4EF6</td><td style="text-align:left;">\u6444\u50CF\u5934</td></tr></tbody></table><h2 id="chooseaddress" tabindex="-1">chooseAddress <a class="header-anchor" href="#chooseaddress" aria-hidden="true">#</a></h2><blockquote><p>\u83B7\u53D6\u7528\u6237\u7684\u901A\u8BAF\u5730\u5740</p></blockquote><p>navigateTo</p><blockquote><p>\u9875\u9762\u8DF3\u8F6C</p></blockquote><p>navigateBack</p><blockquote><p>\u9875\u9762\u8FD4\u56DE</p></blockquote><h3 id="\u6CE8\u610F\u70B9" tabindex="-1">\u6CE8\u610F\u70B9 <a class="header-anchor" href="#\u6CE8\u610F\u70B9" aria-hidden="true">#</a></h3><p>\u53EA\u6709\u5F53\u524D\u9875\u9762\u914D\u7F6E\u4E86<code>tabBar</code>\u65F6\uFF0C\u5E95\u90E8\u7684\u5BFC\u822A\u680F\u624D\u4F1A\u51FA\u73B0\uFF0C\u6CA1\u6709\u914D\u7F6E\u7684\u9875\u9762\u5E95\u90E8\u662F\u6CA1\u6709\u5BFC\u822A\u680F\u7684</p><p><img src="https://s2.ax1x.com/2019/09/03/nkd2X8.png" alt="1564840249809"></p>`,87);function r(i,d,D,y,F,h){const s=p("Banner");return o(),n("div",null,[e(s),c])}const u=a(t,[["render",r]]);export{C as __pageData,u as default};
