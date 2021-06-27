<template>

  <div class="modal">

    <button @click="openModal">
      {{ modalOpenButtonText }}
    </button>

    <ModalView v-show="isShow">

      <slot @click="closeModal">

      </slot>

      <button @click="closeModal">
        完了
      </button>

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
  props: {
    modalOpenButtonText: {
      type: String
    }
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
