<template>
  <footer
    class="footer"
    :class="{
      'border': showBorder
    }"
  >
    <div
      class="footer-container"
    >
      <p
        class="text"
      >
        <Octocat />
        MIT Licensed | Copyright © 2020-PRESENT <a
          target="_blank"
          :href="link"
          class="github-link"
        >
          Wisdom
        </a>
      </p>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import Octocat from './octocat.vue'

withDefaults(
  defineProps<{
    showBorder?: boolean
  }>(),
  {
    showBorder: false
  }
)

const link = ref('https://github.com/pdsuwwz')

</script>
<style lang="scss" scoped>
.footer {
  margin: 0 auto;
  width: 100%;

  &.border {
    border-top: 1px solid rgba(#3c3c43, 0.12);
  }

  .footer-container {
    padding: 14px 0;

    .text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin: 0;
      text-align: center;
      line-height: 1;
      font-size: 1em;
      color: #929292;
    }
  }
}

.github-link {
  color: #555;
  border-bottom: 1px solid rgba(#7d7d7d, 0.3);
  transition: border 0.3s ease-in-out;
  margin-left: 6px;

  &:hover {
    border-color: #7d7d7d;
  }
}
</style>
