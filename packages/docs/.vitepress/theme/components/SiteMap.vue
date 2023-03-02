<script setup lang="ts">
import { VTLink } from '@vue/theme'

const items = [{
  text: '友情链接',
  items: [{
    link: 'https://www.bing.com',
    text: 'bing'
  }]
}];
</script>

<template>
  <section id="sitemap">
    <div class="container">
      <div class="sitemap-col" v-for="col in items">
        <h4>{{ col.text }}</h4>
        <ul>
          <li v-for="row in col.items">
            <VTLink :href="row.link">{{ row.text }}</VTLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style>
#sitemap {
  background: var(--vt-c-bg-soft);
  padding-bottom: 0;
}

#sitemap .container {
  max-width: 900px;
  margin: 0 auto;
  columns: 1;
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  #sitemap .container {
    columns: 2;
  }
}

@media (min-width: 1024px) {
  #sitemap .container {
    columns: 3;
  }
}

#sitemap h4 {
  font-weight: 500;
  color: var(--vt-c-text-1);
  margin-bottom: 0.25em;
}

.sitemap-col {
  margin-bottom: 1em;
  break-inside: avoid;
  display: flex;
  flex-wrap: wrap;
}
.sitemap-col ul {
  margin-left: 10px;
}
.sitemap-col li {
  margin-right: 10px;
}

#sitemap .vt-link {
  font-size: 0.9em;
  color: var(--vt-c-text-2);
}
</style>
