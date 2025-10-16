<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>React To-Do List with Tailwind CSS</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- React and ReactDOM CDN -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script crossorigin src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-4">

  <div id="root" class="w-full max-w-md bg-white rounded shadow p-6"></div>

  <script type="text/babel">

    const { useState, useEffect } = React;

    function TodoApp() {
      // Load tasks from localStorage or default to empty array
      const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
      });

      const [newTask, setNewTask] = useState('');

      // Sync tasks to localStorage whenever tasks change
      useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);

      // Add new task
      const addTask = (e) => {
        e.preventDefault();
        if (newTask.trim() === '') return;
        setTasks([
          ...tasks,
          { id: Date.now(), text: newTask.trim(), completed: false }
        ]);
        setNewTask('');
      };

      // Toggle completion
      const toggleTask = (id) => {
        setTasks(tasks.map(task =>
          task.id === id ? { ...task, completed: !task.completed } : task
        ));
      };

      // Delete task
      const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
      };

      return (
        <div>
          <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
          
          <form onSubmit={addTask} className="flex mb-4">
            <input
              type="text"
              className="flex-grow border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Add a new task"
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r"
            >
              Add
            </button>
          </form>

          {tasks.length === 0 ? (
            <p className="text-center text-gray-500">No tasks found</p>
          ) : (
            <ul>
              {tasks.map(({ id, text, completed }) => (
                <li
                  key={id}
                  className="flex items-center justify-between bg-gray-50 p-2 mb-2 rounded"
                >
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={completed}
                      onChange={() => toggleTask(id)}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className={completed ? "line-through text-gray-400" : ""}>
                      {text}
                    </span>
                  </label>
                  <button
                    onClick={() => deleteTask(id)}
                    className="text-red-500 hover:text-red-700 font-bold"
                    aria-label="Delete task"
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<TodoApp />);
  </script>
</body>
</html>