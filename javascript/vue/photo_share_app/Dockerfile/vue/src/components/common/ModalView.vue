<template>
  <div class="modal-view">

    <button @click="openModal" v-show="!isShow">
      open
    </button>

    <div class="content" v-show="isShow" @click="closeModal">
      <p>こいつがモーダルウィンドウです</p>
    </div>

  </div>


</template>
<script>

export default {
  name: 'ModalView',
  components: {},

  data() {
    return {
      isShow: false
    }
  },
  methods: {
    openModal() {
      this.isShow = true;
    },
    closeModal() {
      this.isShow = false
    }
  }


}

</script>

<style lang="scss" scoped>

.modal-view {

  /*　要素を重ねた時の順番　*/
  z-index: 1;

  /*　画面全体を覆う設定　*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /*　画面の中央に要素を表示させる設定　*/
  display: flex;
  align-items: center;
  justify-content: center;

  > .content {
    z-index: 2;
    width: 50%;
    padding: 1em;
    background: #fff;
  }
}



</style>
