<template>
  <img alt="Vue logo" src="./assets/logo.png"/>


  <ModalView>

  </ModalView>

  <TaskPage></TaskPage>

</template>

<script>
import TaskPage from './pages/tasks/TaskPage.vue';
import ModalView from './components/common/ModalView.vue'

export default {
  name: 'App',
  components: {
    ModalView,
    TaskPage
  }
}
</script>

<style lang="scss" scoped>
</style>
