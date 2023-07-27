<!-- <script setup lang="ts">
import TestTodoAdd from "./TestTodoAdd.vue";
import TestTodoList from "./TestTodoList.vue";
export default {
  data() {
    return {
      newTodoText: '',
      todos: [
        // { isDone: false, text: 'ToDoの文字列'}
      ],
    }
  },

  methods: {
    addTodo() {
      if (!this.newTodoText) return alert('文字を入力してください')
      this.todos.push({
        isDone: false,
        text: this.newTodoText,
      })
      this.newTodoText = ''
    },
    clearDoneTodos() {
      this.todos = this.todos.filter((todo) => !todo.isDone)
    },
  },
}
</script>
<TestTodoAdd />
<TestTodoList />
<template>

  
</template>

<style>
body {
  background-color: #eee;
}

.todo-done {
  text-decoration: line-through;
}
</style> -->
