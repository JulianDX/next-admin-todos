export const apiCall = async (id: string, complete: boolean) => {
  await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify({ complete }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const apiCallCreate = async (description: string) => {
  await fetch(`http://localhost:3000/api/todos`, {
    method: "POST",
    body: JSON.stringify({ description }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const apiCallDelete = async () => {
  await fetch(`http://localhost:3000/api/todos`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
