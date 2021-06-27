<!--<template>-->
<!--  <h1>{{ msg }}</h1>-->
<!--  <button @click="count++">count is: {{ count }}</button>-->
<!--  <p>Edit <code>components/TaskPage.vue</code> to test hot module replacement.</p>-->
<!--</template>-->

<template>
  <h1>ToDo App</h1>
  <form @submit.prevent="addTodo()">
    <label>New ToDo </label>
    <input
        v-model="newTodo"
        name="newTodo"
        autocomplete="off"
    >

    <button>Add ToDo</button>
  </form>
  <h2>ToDo List</h2>
  <ul>
    <li
        v-for="(todo, index) in todos"
        :key="index"
    >
            <span
                :class="{ done: todo.done }"
                @click="doneTodo(todo)"
            >{{ todo.content }}</span>
      <button @click="removeTodo(index)">Remove</button>
    </li>
  </ul>
  <h4 v-if="todos.length === 0">Empty list.</h4>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'TaskPage',
  components: {},
  setup() {
    const newTodo = ref('');
    const defaultData = [{
      done: false,
      content: 'Write a blog post'
    }]
    const todosData = JSON.parse(localStorage.getItem('todos')) || defaultData;
    const todos = ref(todosData);

    function addTodo() {
      if (newTodo.value) {
        todos.value.push({
          done: false,
          content: newTodo.value
        });
        newTodo.value = '';
      }
      saveData();
    }

    function doneTodo(todo) {
      todo.done = !todo.done
      saveData();
    }

    function removeTodo(index) {
      todos.value.splice(index, 1);
      saveData();
    }

    function saveData() {
      const storageData = JSON.stringify(todos.value);
      localStorage.setItem('todos', storageData);
    }

    return {
      todos,
      newTodo,
      addTodo,
      doneTodo,
      removeTodo,
      saveData
    }
  }
}
</script>
