<script setup lang="ts">
import { onMounted } from 'vue'
import SiteMap from './SiteMap.vue'
// import NewsLetter from './NewsLetter.vue'
import { load, data, base } from './sponsors'
import SponsorsGroup from './SponsorsGroup.vue'
import VueMasteryModal from './VueMasteryModal.vue'

onMounted(async () => {
  await load()
})
</script>

<template>
  <section id="hero">
    <h1 class="tagline">
      <span class="accent">API Helper</span>
      <br />帮助开发者生成interface、类、对象代码
    </h1>
    <p class="description">
      一个用于构建 Web API 、代码模板的多功能工具库。
    </p>
    <p class="actions">
<!--      <VueMasteryModal />-->
      <a class="get-started" href="/guide/introduction.html">
        指南
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
          />
        </svg>
      </a>
<!--      <a class="setup" href="/guide/quick-start.html">Install</a>-->
    </p>
  </section>

  <section v-if="data && data.special" id="special-sponsor">
    <span class="lead">Special Sponsor</span>
    <template v-for="{ url, img, name, description } of data.special">
      <a :href="url" target="_blank" rel="sponsored noopener">
        <picture v-if="img.endsWith('png')">
          <source
            type="image/avif"
            :srcset="`${base}/images/${img.replace(/\.png$/, '.avif')}`"
          />
          <img :src="`${base}/images/${img}`" :alt="name" />
        </picture>
        <img
          width="168"
          height="42"
          v-else
          :src="`${base}/images/${img}`"
          :alt="name"
        />
      </a>
      <span>{{ description }}</span>
    </template>
  </section>

  <section id="highlights" class="vt-box-container">
    <div class="vt-box">
      <h2>支持多个接口文档</h2>
      <p>
        多个API项目，一次性生成
      </p>
    </div>
    <div class="vt-box">
      <h2>更好的接口文档解析</h2>
      <p>内置openapi2.0、openapi3.0、openapi3.0以及yapi解析</p>
      <p>
        自定义解析，不限制文档类型，更好的功能扩展
      </p>
    </div>
    <div class="vt-box">
      <h2>请求参数兼容</h2>
      <p>
        对象和数组参数的兼容
      </p>
    </div>
  </section>

  <section class="example">
    <h2>生成接口函数以及与之对应的请求参数与响应数据interface代码</h2>
    <img alt="" src="/images/api-code.gif" />
  </section>

  <section class="example">
    <h2>生成JS对象代码</h2>
    <img alt="" src="/images/map-code.gif" />
  </section>

  <!--  <section>-->
  <!--    <h2>生成Javascript实体类代码</h2>-->
  <!--    <img alt="" src="/images/class-code.png" />-->
  <!--  </section>-->

  <!--  <section>-->
  <!--    <h2>生成表单模板代码</h2>-->
  <!--    <img alt="" src="/images/form-code.png" />-->
  <!--  </section>-->

  <section class="example">
    <h2>生成整体文件模块</h2>
    <img alt="" src="/images/file-directory.gif" />
  </section>

  <section id="sponsors">
    <h2>赞助商</h2>
    <SponsorsGroup tier="platinum" placement="landing" />
  </section>

<!--  <SiteMap />-->
  <!-- <NewsLetter /> -->
</template>

<style scoped>
section {
  padding: 42px 32px;
}

#hero {
  padding: 96px 32px;
  text-align: center;
}

.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

html:not(.dark) .accent,
.dark .tagline {
  //background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background: -webkit-linear-gradient(315deg, rgb(255,87,34) 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  margin-right: 18px;
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.actions .get-started:hover {
  transition-duration: 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.actions .get-started,
.actions .setup {
  color: var(--vt-c-text-code);
}

.actions .get-started:hover,
.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .get-started:hover,
.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

#special-sponsor {
  border-top: 1px solid var(--vt-c-divider-light);
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 12px 24px;
  display: flex;
  align-items: center;
}

#special-sponsor span {
  color: var(--vt-c-text-2);
  font-weight: 500;
  font-size: 13px;
  vertical-align: middle;
  flex: 1;
}

#special-sponsor span:first-child {
  text-align: right;
}

#special-sponsor a {
  display: flex;
  justify-content: center;
  padding: 0 24px;
}

#special-sponsor img {
  height: 42px;
  margin: -6px 0;
}

.dark #special-sponsor img {
  filter: grayscale(1) invert(1);
}

#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#highlights p {
  font-weight: 400;
  font-size: 15px;
}

#highlights .vt-box {
  background-color: transparent;
}

#sponsors, .example {
  max-width: 900px;
  margin: 0px auto;
}

#sponsors h2, .example h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1em;
}

#sponsors .sponsor-container {
  margin-bottom: 3em;
}

.example h2{
  text-align: center;
}

@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 56px 32px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
  #special-sponsor {
    flex-direction: column;
  }
  #special-sponsor img {
    height: 36px;
    margin: 8px 0;
  }
  #special-sponsor span {
    text-align: center !important;
  }
  #highlights h3 {
    margin-bottom: 0.6em;
  }
  #highlights .vt-box {
    padding: 20px 36px;
  }
  .actions a {
    margin: 18px 0;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>
