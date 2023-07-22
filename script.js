document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const createTodoForm = document.getElementById('create-todo-form');
    const todoList = document.getElementById('todo-list');
    const userGreeting = document.getElementById('user-greeting');
  
    let currentUser = null;
  
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Perform login API request and handle response
      // Example:
      // login(username, password).then((response) => {
      //   if (response.success) {
      //     currentUser = response.user;
      //     userGreeting.textContent = currentUser.username;
      //     loginForm.reset();
      //     loginForm.style.display = 'none';
      //     todoSection.style.display = 'block';
      //     loadTodoList();
      //   } else {
      //     alert('Login failed. Please try again.');
      //   }
      // });
  
      // For now, simulate successful login
      currentUser = { username };
      userGreeting.textContent = currentUser.username;
      loginForm.reset();
      loginForm.style.display = 'none';
      todoSection.style.display = 'block';
      loadTodoList();
    });
  
    createTodoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const todoInput = document.getElementById('todo-input');
      const todoText = todoInput.value.trim();
  
      if (todoText !== '') {
        // Perform create todo API request and handle response
        // Example:
        // createTodoItem(currentUser.id, todoText).then((response) => {
        //   if (response.success) {
        //     addTodoItem(response.todoItem);
        //     todoInput.value = '';
        //   } else {
        //     alert('Failed to create a todo item. Please try again.');
        //   }
        // });
  
        // For now, simulate successful todo creation
        const todoItem = { id: generateTodoItemId(), text: todoText, completed: false };
        addTodoItem(todoItem);
        todoInput.value = '';
      }
    });
  
    function loadTodoList() {
      // Perform API request to fetch user's todo list
      // Example:
      // getTodoList(currentUser.id).then((response) => {
      //   if (response.success) {
      //     response.todoList.forEach((todoItem) => {
      //       addTodoItem(todoItem);
      //     });
      //   } else {
      //     alert('Failed to fetch todo list. Please try again.');
      //   }
      // });
  
      // For now, simulate loading todo list
      const todoListData = [
        { id: 1, text: 'Finish project', completed: false },
        { id: 2, text: 'Go grocery shopping', completed: true },
        { id: 3, text: 'Exercise', completed: false }
      ];
      todoListData.forEach((todoItem) => {
        addTodoItem(todoItem);
      });
    }
  
    function addTodoItem(todoItem) {
      const li = document.createElement('li');
      li.textContent = todoItem.text;
      if (todoItem.completed) {
        li.classList.add('completed');
      }
      todoList.appendChild(li);
  
      li.addEventListener('click', () => {
        li.classList.toggle('completed');
        // Perform API request to update todo item completion status
        // Example:
        // updateTodoItemCompletion(todoItem.id, !todoItem.completed).then((response) => {
        //   if (response.success) {
        //     todoItem.completed = !todoItem.completed;
        //   } else {
        //     alert('Failed to update todo item. Please try again.');
        //   }
        // });
  
        // For now, simulate updating completion status
        todoItem.completed = !todoItem.completed;
      });
  
      li.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        // Perform API request to delete todo item
        // Example:
        // deleteTodoItem(todoItem.id).then((response) => {
        //   if (response.success) {
        //     todoList.removeChild(li);
        //   } else {
        //     alert('Failed to delete todo item. Please try again.');
        //   }
        // });
  
        // For now, simulate deleting todo item
        todoList.removeChild(li);
      });
    }
  
    function generateTodoItemId() {
      // Generate a unique ID for a new todo item
      // Example:
      // Use a library like uuid.js to generate a unique ID
      return Math.floor(Math.random() * 100000);
    }
  });