<template>

  <div class="todo">

    <div>
      <h1 class="todo__title">My Todo List</h1>
      <input class="todo__input" type="text"  placeholder="Enter task" v-model="task">

      <button class="btn btn__submit" @click="submitTask">SUBMIT</button>
    </div>

    <div class="todo__header">
      <h2 class="todo__header__item--wide">Task</h2>
      <h2 class="todo__header__item">Status</h2>
      <h2 class="todo__header__item">Edit</h2>
      <h2 class="todo__header__item">Delete</h2>
    </div>

    <div v-for="(task, index) in tasks" :key="index" class="tasks" :class="{'done' : task.status == 'Completed'}">
      <div class="tasks__item--wide">{{ task.name }}</div>
      <div class="changeStatus task__item" @click="changeStatus(index)">{{ task.status }}</div>

      <div class="tasks__item"><button class="btn" @click="editTask(index)">Edit</button></div>
      <div class="tasks__item"><button class="btn" @click="deleteTask(index)">Delete</button></div>
    </div>

  </div>
  
</template>

<script>
  export default {
    props: {
      msg: String,
    },

    data() {
      return {
        task: '',
        editedtask: null,
        availableStatuses: ['Todo', 'In progress', 'Completed'],
        tasks: [
          {
            name: 'Walk the dog',
            status: 'Todo'
          },
          {
            name: 'Make a grocery list for this week',
            status: 'In progress'
          },
        ]
        
      }
    },
    methods: {
      submitTask() {
        // Sjekker at input ikke er tomt
        if(this.task.length === 0) return;

        if(this.editedTask === null){
        this.tasks.push({
          name: this.task,
          status: 'to-do',
          
        });
      } else {
        this.tasks[this.editedTask].name = this.task,
        this.editedTask = null
      }
        // tømmer input field
        this.task = ''
      },

      deleteTask(index) {
        this.tasks.splice(index, 1);
      },

      editTask(index) {
        this.task = this.tasks[index].name,
        this.editedTask = index
      },

      changeStatus(index) {
        let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
        if(++newIndex > 2) newIndex = 0;
        this.tasks[index].status = this.availableStatuses[newIndex];
      }
    }
  }
  // git clone url && cd vue_template && rm -rf .git && npm install && npm run
  // Det samme som vue create
</script>

<style>
  .todo {
    background: var(--highlight);
    width: 80vw;
    margin: auto;
    padding: 12px;
  }

  .changeStatus {
    cursor: pointer;
  }

  .todo__header {
    display: flex;
    justify-content: space-between;
    color: var(--red);
    margin-top: 12px;
    margin-bottom: 12px;
    
  }

  .tasks {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    
  }

  .todo__header__item,
  .tasks__item,
  .changeStatus
  {
    width: 10vw;
  }

  .todo__header__item--wide,
  .tasks__item--wide {
    width: 25vw;
    text-align: left;
  }

  .todo__title {
    color: var(--dblue);
  }

  .todo__input {
    border: 1px solid black;
    width: 40vw;
    color: var(--red);
    padding: 6px;
  }

  .btn__submit {
    margin-left: 4px;
  }
  
  .done {
    background: var(--lblue);
    opacity: 0.5;
  }
</style>