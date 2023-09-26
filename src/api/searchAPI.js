const searchTaskApi = (text) => {
  let res = { status: 404, data: {} };

  return new Promise((resolve, reject) => {
    const tasks = [
      { title: "task-1" },
      { title: "task-2" },
      { title: "task-3" },
      { title: "task-4" },
      { title: "task-5" },
      { title: "task-6" },
      { title: "task-7" },
      { title: "task-8" },
      { title: "task-9" },
      { title: "task-10" },
      { title: "task-1" },
      { title: "task-2" },
      { title: "task-3" },
      { title: "task-4" },
      { title: "task-5" },
      { title: "task-6" },
      { title: "task-7" },
      { title: "task-8" },
      { title: "task-9" },
      { title: "task-10" },
    ];

    const result = tasks.filter((task) => task.title.toLowerCase().includes(text.toLowerCase()));
    res.status = 200;
    res.data = result;
    setTimeout(() => resolve(result), 500);
  });
};
export { searchTaskApi };
