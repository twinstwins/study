<template>

  <div class="modal">

    <slot>

    </slot>

    <button @click="openModal">
      開く
    </button>

    <ModalView @close="closeModal" v-show="isShow">
    </ModalView>



  </div>

</template>

<script>
import ModalView from "./ModalView.vue";

export default {
  name: "modal",
  components: {
    ModalView
  },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    openModal() {
      this.isShow = true;
    },
    closeModal() {
      this.isShow = false;
    }
  }
}
</script>

<style scoped>
.modal {

}

</style>
