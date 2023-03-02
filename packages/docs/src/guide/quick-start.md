---
footer: false
---

# 快速开始 {#快速开始}

## 安装 {#安装}

:::tip 提示

- 推荐使用pnpm包管理器，后面例子都是基于pnpm
  :::

<div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">&gt;</span> <span style="color:#A6ACCD;">pnpm add @api-hepler/cli @api-hepler/core</span></span></code></pre></div>

该命令用于安装 API Helper CLI，安装成功之后，使用CLI命令简写为 `apih`

### 命令生成配置文件
<div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">&gt;</span> <span style="color:#A6ACCD;"></span>apih init</span></code></pre></div>

该命令用于生产CLI配置文件，根据项目情况生成Typescript配置文件或者Javascript配置文件。

<div class="language-sh">
<pre><code>
<span style="color:#A6ACCD;">请选择配置文件类型? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">TypeScript</span> / JavaScript</span></span>
<span style="color:var(--vt-c-blue);">(*)</span> <span style="color:#A6ACCD;">TypeScript（apih.config.ts）</span>
<span style="color:var(--vt-c-blue);">( )</span> <span style="color:#A6ACCD;">JavaScript（apih.config.js）</span>
<span></span>
<span style="color:#A6ACCD;">配置文件已经生成：...</span>
<span style="color:#A6ACCD;">Done.</span>
</code></pre>
</div>

### 执行生成API
<div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">&gt;</span> <span style="color:#A6ACCD;">apih</span></span></code></pre></div>

在生成API过程中，会看见每一步的工作过程，可以根据提示，查看配置是否有异常。

<div class="language-sh"><pre><code>
<span class="line"><span style="color:var(--vt-c-green);">√ </span><span style="color:#A6ACCD;">检测apih.config.(ts|js)配置文件是否存在</span></span>
<span class="line"><span style="color:var(--vt-c-green);">√ </span><span style="color:#A6ACCD;">检测输出目录是否正确</span></span>
<span class="line"><span style="color:var(--vt-c-green);">√ </span><span style="color:#A6ACCD;">检测 request 函数文件路径是否正确</span></span>
<span class="line"><span style="color:var(--vt-c-green);">√ </span><span style="color:#A6ACCD;">通过 config.serverURL 获取文档</span></span>
<span class="line"><span style="color:var(--vt-c-green);">√ </span><span style="color:#A6ACCD;">解析文档</span></span>
<span class="line"><span style="color:var(--vt-c-green);">√ </span><span style="color:#A6ACCD;">生成代码</span></span>
<span class="line"><span style="color:var(--vt-c-green);">√ </span><span style="color:#A6ACCD;">删除旧文件</span></span>
<span class="line"><span style="color:var(--vt-c-green);">√ </span><span style="color:#A6ACCD;">输出文件</span></span>
<span class="line"></span>
<span style="color:#A6ACCD;">API已经生成：...</span>
<span style="color:#A6ACCD;">Done.</span>
</code></pre></div>
