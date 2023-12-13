import { v4 as uuidv4 } from "uuid";

export async function changeData() {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();

  for (let d of data) {
    await rollit(d);
  }
}

async function rollit(d) {
  const res = await fetch(`http://localhost:3000/products/${d.id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ id: uuidv4() }),
  });
}
