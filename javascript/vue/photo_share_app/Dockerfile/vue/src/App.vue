<template>
  <img alt="Vue logo" src="./assets/logo.png"/>

  <label for="">名前</label>
  <input type="text" v-model="name">
  <label for="">メアド</label>
  <input type="text" v-model="email">
  <button @click="addUser()">
    新規ユーザー追加
  </button>

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
          <Modal
              modalOpenButtonText="編集">

            <div class="edit-user-area">

              <label>名前</label>
              <input type="text" v-model="user.name">

              <label>メアド</label>
              <input type="text" v-model="user.email">

              <!--    <button @click="editUser(user)">-->
              <!--      編集完了-->
              <!--    </button>-->

            </div>

          </Modal>
        </th>
      </tr>

    </table>

  </div>


  <Modal
      modalOpenButtonText="いいい">
  </Modal>




  <!--  <TaskPage></TaskPage>-->

</template>

<script>
import TaskPage from './pages/tasks/TaskPage.vue';
import Modal from './components/common/modal/modal.vue';
import EditUser from "./components/users/editUser.vue";

export default {
  name: 'App',
  components: {
    EditUser,
    Modal,
    TaskPage
  },
  data() {
    return {
      name: "",
      email: "",

      users: [
        {'id': 1, "name": "ユーザー1", 'email': "aaa@gmail.com"},
        {'id': 2, "name": "ユーザー2", 'email': "aaa@gmail.com"},
        {'id': 3, "name": "ユーザー3", 'email': "aaa@gmail.com"},
        {'id': 4, "name": "ユーザー4", 'email': "aaa@gmail.com"},
      ],
      editData: null
    }
  },
  methods: {
    update(inputData) {
      // const inputData = inputData;
      user.name = inputData.name;
      user.name = inputData.name;
    },

    addUser() {
      const newUser = {};
      newUser.name = this.name;
      newUser.email = this.email;
      this.users.push(newUser);
      this.name = ""
      this.email = ""
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
