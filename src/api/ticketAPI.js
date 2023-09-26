const getTicketsApi = () => {
  let res = { status: 404, data: {} };

  return new Promise((resolve, reject) => {
    const ticket = [
      {
        id: "1",
        detail: "Customer_A Ticket detail is here",
        customer: "A customer",
        priority: "high",
        status: null,
        date: new Date("2023-09-27"),
      },
      {
        id: "2",
        detail: "Customer_B Ticket detail is here",
        customer: "B customer",
        priority: "high",
        status: null,
        date: new Date("2023-09-28"),
      },
      {
        id: "3",
        detail: "Customer_C Ticket detail is here",
        customer: "C customer",
        priority: "medium",
        status: null,
        date: new Date("2023-10-05"),
      },
      {
        id: "4",
        detail: "Customer_D Ticket detail is here",
        customer: "D customer",
        priority: "low",
        status: null,
        date: new Date("2023-10-10"),
      },
      {
        id: "5",
        detail: "Customer_E Ticket detail is here",
        customer: "E customer",
        priority: "high",
        status: null,
        date: new Date("2023-10-13"),
      },
      {
        id: "6",
        detail: "Customer_F Ticket detail is here",
        customer: "F customer",
        priority: "medium",
        status: null,
        date: new Date("2023-10-18"),
      },
      {
        id: "7",
        detail: "Customer_G Ticket detail is here",
        customer: "G customer",
        priority: "low",
        status: null,
        date: new Date("2023-10-23"),
      },
      {
        id: "8",
        detail: "Customer_H Ticket detail is here",
        customer: "H customer",
        priority: "high",
        status: null,
        date: new Date("2023-10-25"),
      },
      {
        id: "9",
        detail: "Customer_I Ticket detail is here",
        customer: "I customer",
        priority: "high",
        status: null,
        date: new Date("2023-10-27"),
      },
      {
        id: "10",
        detail: "Customer_J Ticket detail is here",
        customer: "J customer",
        priority: "high",
        status: null,
        date: new Date("2023-11-02"),
      },
      {
        id: "11",
        detail: "Customer_K Ticket detail is here",
        customer: "K customer",
        priority: "medium",
        status: null,
        date: new Date("2023-11-03"),
      },
      {
        id: "12",
        detail: "Customer_L Ticket detail is here",
        customer: "L customer",
        priority: "high",
        status: null,
        date: new Date("2023-11-10"),
      },
      {
        id: "13",
        detail: "Customer_M Ticket detail is here",
        customer: "M customer",
        priority: "high",
        status: null,
        date: new Date("2023-11-17"),
      },
      {
        id: "14",
        detail: "Customer_N Ticket detail is here",
        customer: "N customer",
        priority: "medium",
        status: null,
        date: new Date("2023-11-20"),
      },
      {
        id: "15",
        detail: "Customer_O Ticket detail is here",
        customer: "O customer",
        priority: "low",
        status: null,
        date: new Date("2023-11-21"),
      },
      {
        id: "16",
        detail: "Customer_P Ticket detail is here",
        customer: "P customer",
        priority: "high",
        status: null,
        date: new Date("2023-11-22"),
      },
      {
        id: "17",
        detail: "Customer_Q Ticket detail is here",
        customer: "Q customer",
        priority: "medium",
        status: null,
        date: new Date("2023-12-04"),
      },
      {
        id: "18",
        detail: "Customer_R Ticket detail is here",
        customer: "R customer",
        priority: "high",
        status: null,
        date: new Date("2023-12-13"),
      },
      {
        id: "19",
        detail: "Customer_S Ticket detail is here",
        customer: "S customer",
        priority: "high",
        status: null,
        date: new Date("2023-12-15"),
      },
      {
        id: "20",
        detail: "Customer_T Ticket detail is here",
        customer: "T customer",
        priority: "medium",
        status: null,
        date: new Date("2023-12-20"),
      },
    ];

    res.status = 200;
    res.data = ticket;
    setTimeout(() => resolve(res), 500);
  });
};

const updateTicketApi = (data) => {
  let res = { status: 404, data: {} };

  return new Promise((resolve, reject) => {
    res.status = 200;
    res.data = data;
    setTimeout(() => resolve(res), 500);
  });
};

const addTicketApi = (data) => {
  let res = { status: 404, data: {} };

  return new Promise((resolve, reject) => {
    res.status = 200;
    res.data = data;
    setTimeout(() => resolve(res), 500);
  });
};

export { getTicketsApi, updateTicketApi, addTicketApi };
