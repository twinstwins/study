<template>
  <img alt="Vue logo" src="./assets/logo.png"/>

  <div class="users-area">

    <table>
      <tr>
        <th>名前</th>
        <th>メール</th>
      </tr>
      <tr v-for="user in users">
        <th>{{ user.name }}</th>
        <th>{{ user.email }}</th>
        <th>
          <button @click=update(user)>更新する</button>
        </th>
      </tr>

    </table>

  </div>


  <Modal>

  </Modal>


  <TaskPage></TaskPage>

</template>

<script>
import TaskPage from './pages/tasks/TaskPage.vue';
import Modal from './components/common/modal/modal.vue';

export default {
  name: 'App',
  components: {
    Modal,
    TaskPage
  },
  data() {
    return {
      users: [
        {'id': 1, "name": "ユーザー1", 'email': "aaa@gmail.com"},
        {'id': 2, "name": "ユーザー2", 'email': "aaa@gmail.com"},
        {'id': 3, "name": "ユーザー3", 'email': "aaa@gmail.com"},
        {'id': 4, "name": "ユーザー4", 'email': "aaa@gmail.com"},
      ]
    }
  },
  methods: {
    update(inputData) {
      const inputData = inputData;
      user.name = inputData.name;
      user.name = inputData.name;
    }
  }

}
</script>

<style lang="scss" scoped>

.users-area {
  display: flex;
  justify-content: center;
}

</style>
