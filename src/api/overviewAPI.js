const getOverviewApi = () => {
  let res = { status: 404, data: {} };

  return new Promise((resolve, reject) => {
    let data = {
      total_unresolved: 400,
      total_overview: 400,
      total_open: 400,
      total_onHold: 400,
      ticket: [
        { month: "jan", total: 100 },
        { month: "feb", total: 150 },
        { month: "mar", total: 340 },
        { month: "apr", total: 790 },
        { month: "mei", total: 230 },
        { month: "jun", total: 560 },
        { month: "jul", total: 120 },
        { month: "aug", total: 110 },
        { month: "sept", total: 100 },
        { month: "oct", total: 100 },
        { month: "nov", total: 190 },
        { month: "dec", total: 300 },
      ],
      unresolved: [
        { title: "ticket-unresolved-1" },
        { title: "ticket-unresolved-2" },
        { title: "ticket-unresolved-3" },
        { title: "ticket-unresolved-4" },
        { title: "ticket-unresolved-5" },
        { title: "ticket-unresolved-6" },
        { title: "ticket-unresolved-7" },
        { title: "ticket-unresolved-8" },
        { title: "ticket-unresolved-9" },
        { title: "ticket-unresolved-10" },
        { title: "ticket-unresolved-1" },
        { title: "ticket-unresolved-2" },
        { title: "ticket-unresolved-3" },
        { title: "ticket-unresolved-4" },
      ],
      latest_task: [
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
      ],
    };
    res.status = 200;
    res.data = data;
    setTimeout(() => resolve(res), 500);
  });
};

export { getOverviewApi };
