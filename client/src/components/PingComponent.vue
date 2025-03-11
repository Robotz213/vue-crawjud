<template>
  <div>
    <p v-if="msg">
      {{ msg }}
    </p>
  </div>
</template>
<script lang="ts">
export default {
  name: 'PingComponent',
  data() {
    return {
      msg: 'Hello!',
    }
  },
}
</script>
