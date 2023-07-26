import { formatCode } from '../src/lib';

describe('format', () => {
  test('格式化Vue代码', async () => {
    const code = await formatCode({
      sourceCode: `
<template>
<div class="app-container">
                 <div class="app-header">
<div class="app-header__left">
                                       <a
          href="/"
          class="app-header__label"
                        @mouseenter="linkColor = 'var(--vt-c-primary)'"
                        @mouseleave="linkColor = 'var(--vt-c-text-1)'"
        >
          <apih-logo :color="linkColor" />
              <span style="margin-left: 4px">API HELPER</span>
                          </a>
</div>
      <div class="app-header__right">
<a-space :size="20">
                            <a href="https://apih.andou.live" target="_blank">文档</a>
                          <a href="https://apih.andou.live/config/cli.html" target="_blank"
          >CLI</a
        >
        <a href="https://github.com/ztz2/api-helper" target="_blank">
<icon-github :size="24" />
</a>
      </a-space>
</div>
    </div>
<div class="app-content">
      <router-view />
    </div>
    <div class="app-footer"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
    import { useCheckUpdateTemplate } from '@/hooks/use-check-update-template';
  import AhLogo from '@/components/apih-logo/index.vue';

const linkColor = ref('rgba(0,0,0,.8509803922)');

      useCheckUpdateTemplate();
</script>

<style lang="scss">
@import './style/variable.scss';

.app-header {
                  height: 64px;
                  position: sticky;
                  top: 0;
left: 0;
                  background: #fff;
  border-bottom: 2px solid #f0f1f2;
  z-index: 10;
display: flex;
  justify-content: space-between;
padding: 0 24px;
  color: rgba(0, 0, 0, 0.8509803922);
@at-root .app-header__left {
                  display: flex;
                  align-items: center;
    @at-root .app-header__label {
      color: var(--vt-c-text-1);
                font-size: 18px;
font-weight: 600;
    text-decoration: none;
                align-items: center;
      display: flex;
      > svg {
        color: red;
                      transition: color 0.25s;
      }
      &:hover {
color: var(--vt-c-primary);
        > svg {
                          color: var(--vt-c-primary) !important;
        }
      }
    }
  }
  @at-root .app-header__right {
                      display: flex;
align-items: center;
    > svg {
                        cursor: pointer;
                        color: $link-color;
            transition: color 0.25s;
      &:hover {
            color: $link-color--active;
}
    }
  }
  @at-root .app-content {
  padding: 20px;
            //background: $root-background;
}
      }
                            </style>


`,
      formatCodeExtension: '.vue',
      prettierOptions: {
        singleQuote: false,
        semi: false,
      }
    });
    expect(code.toString()).toMatchSnapshot('format.格式化Vue代码');
  });
});
