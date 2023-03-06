<template>
  <button class="open" @click="showModal">open</button>
  <modal-component
    title="warning"
    :open="computedOpen"
    @opened="opened"
    @closing="closing"
    @closed="closed"
  >
    content
  </modal-component>
</template>

<script>
import ModalComponent from "./components/ModalComponent.vue";
export default {
  name: "App",
  components: {
    ModalComponent,
  },
  data() {
    return {
      open: "true",
    };
  },
  methods: {
    showModal() {
      this.open = "true";
    },
    opened() {
      console.warn("opened");
    },
    closing() {
      console.warn("closing");
    },
    closed() {
      this.open = "false";
      console.warn("closed");
    },
  },
  computed: {
    computedOpen() {
      console.log(
        "reha ~ file: App.vue:46 ~ computedOpen ~ this.open:",
        this.open
      );
      return this.open;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.open {
  width: 100px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
