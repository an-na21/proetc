<template>
<body>

    <div class="app">
    
      <h1>Список заданий</h1>
      
  
      <div class="add-task">
        <input v-model="newTask" placeholder="Введите новую задачу" @keyup.enter="addTask" />
        <button @click="addTask">Добавить</button>
        <div v-show="error" class="error">{{ error }}</div>
      </div>
  
      <div class="task-list">
        <h2>Невыполненные задачи:</h2>
        <ul class="bb">
          <li v-for="(task, index) in tasks" :key="index">
            <span :class="{ done: task.done }">{{ task.title }}</span>
            <button  @click="editTask(index)">Редактировать</button>
            <button @click="deleteTask(index)">Удалить</button>
            <button @click="toggleTaskDone(index)">
              {{ task.done ? "Отметить как невыполненное" : "Отметить как выполненное" }}
            </button>
          </li>
        </ul>
  
        <h2>Выполненные задачи:</h2>
        <ul class="bb">
          <li v-for="(task, index) in completedTasks" :key="index">
            <span>{{ task.title }}</span>
            <button @click="deleteCompletedTask(index)">Удалить</button>
          </li>
        </ul>
      </div>
      <div class="stats">
        <p class="sss">Выполнено: {{ completedTasks.length }} / {{ tasks.length }} заданий</p>
      </div>
    </div>
  </body>
  </template>
  
  <script>
  export default {
    name: "App",
    data() {
      return {
        newTask: "",
        error: "",
        tasks: [],
        editingIndex: null,
      };
    },
    methods: {
      addTask() {
        if (!this.newTask) {
          this.error = "Поле не может быть пустым";
          return;
        }
  
        if (this.editingIndex === null) {
          this.tasks.push({
            title: this.newTask,
            done: false,
          });
        } else {
          this.tasks.splice(this.editingIndex, 1, {
            title: this.newTask,
            done: this.tasks[this.editingIndex].done,
          });
          this.editingIndex = null;
        }
  
        this.newTask = "";
        this.error = "";
  
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
      editTask(index) {
        this.newTask = this.tasks[index].title;
        this.editingIndex = index;
        
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
  
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
      toggleTaskDone(index) {
        this.tasks[index].done = !this.tasks[index].done;
  
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
      deleteCompletedTask(index) {
        this.completedTasks.splice(index, 1);
  
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      }, 
    }, 
    computed: {
      completedTasks() {
        return this.tasks.filter((task) => task.done);
      },
    },
    mounted() {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        this.tasks = JSON.parse(storedTasks);
      }
    },
    };
  </script>
  
  <style>

body { 
  width: 100%;   
}

.app {
  max-width: 100%px;
  
margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
 
}


h1 {
  text-align: center;
margin-top: 15px;
margin-bottom: 15px;
}

.add-task {
  display: flex;
  align-items: center;
}


input {
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
}

button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.error {
  color: red;
}

.task-list {
  margin-top: 20px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.done {
  text-decoration: line-through;
}

.stats {
  margin-top: 20px;
  text-align: center;
}

h2{
  color: rgb(174, 98, 245);
}

.sss{
  color: rgb(59, 99, 16);
}

  </style>

  