<template>
  <transition>
    <div class="modal" v-if="isShow">
      <div class="header">
        <div class="title">{{ title }}</div>
        <div class="closing-icon" @click="closeEvent">
          <img src="../assets/closing_cross.svg" alt="close" />
        </div>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: String,
    open: String,
  },
  data() {
    return {
      closed: false,
    };
  },
  watch: {
    isShow(val) {
      if (val) {
        this.$emit("opened");
      } else {
        setTimeout(() => {
          this.$emit("closed");
        }, 500);
      }
    },
    open(val) {
      val === "false" ? (this.closed = true) : (this.closed = false);
    },
  },
  methods: {
    closeEvent() {
      this.closed = true;
      this.$emit("closing", "false");
    },
  },
  computed: {
    isShow() {
      console.log("values = ", this.open, this.closed);
      console.warn(
        (this.open === "true" ? true : false) && this.closed === false
      );
      return (this.open === "true" ? true : false) && this.closed === false;
    },
  },
};
</script>

<style scoped>
.modal {
  width: 800px;
  height: 800px;
  border: solid;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: bisque;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid;
  padding: 10px;
}
.closing-icon {
  display: flex;
  width: 30px;
}
.content {
  margin: 10px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
