<template>
  <global-footer className="footer custom-render">
    <template v-slot:links>
    </template>
    <template v-slot:copyright>
      @niudaii
    </template>
  </global-footer>
</template>

<script>
import { GlobalFooter } from '@ant-design-vue/pro-layout'

export default {
  name: 'ProGlobalFooter',
  components: {
    GlobalFooter
  }
}
</script>
