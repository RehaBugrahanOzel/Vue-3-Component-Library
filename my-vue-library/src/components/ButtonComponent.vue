<template>
  <button class="button" @click="submit">SUBMIT</button>
</template>

<script>
export default {
  methods: {
    submit() {
      console.log("submitted");
    },
  },
};
</script>

<style>
.button {
  color: red;
}
</style>
