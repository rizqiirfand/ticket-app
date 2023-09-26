const getNotifApi = () => {
  let res = { status: 404, data: {} };

  return new Promise((resolve, reject) => {
    const notif = [
      { title: "task-1" },
      { title: "task-2" },
      { title: "task-3" },
      { title: "task-4" },
      { title: "task-5" },
      { title: "task-6" },
      { title: "task-7" },
    ];

    res.status = 200;
    res.data = notif;
    setTimeout(() => resolve(notif), 500);
  });
};

export { getNotifApi };
