<template>
  <div>1</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getPath() {
      this.$api.getPath().then((res) => {});
    },
  },
  created() {
    this.getPath();
  },
};
</script>