<template>
  <footer
    class="footer"
    :class="{
      'border': showBorder
    }"
  >
    <div
      class="container"
    >
      <p
        class="text"
      >
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
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Footer',
  props: {
    showBorder: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const link = ref('https://github.com/pdsuwwz')
    return {
      link
    }
  }
})
</script>
<style lang="scss" scoped>
.footer {
  margin: 0 auto;
  width: 100%;
  &.border {
    border-top: 1px solid rgba(#3c3c43, .12);
  }
  .container {
    padding: 1rem 1.5rem 1.25rem;
    .text {
      margin: 0;
      text-align: center;
      line-height: 1.4;
      font-size: 1rem;
      color: #929292;
    }
  }
}
.github-link {
  color: #555;
  border-bottom: 1px solid rgba(#7d7d7d, .3);
  transition: border .3s ease-in-out;
  &:hover {
    border-color: #7d7d7d;
  }
}
</style>
