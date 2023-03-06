import ModalComponent from "./ModalComponent.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue) {
    registerComponent(vue, ModalComponent);
  },
};

export default Plugin;

export { ModalComponent };
