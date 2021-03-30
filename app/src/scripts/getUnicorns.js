export async function getUnicorns() {
  let json;
  try {
    const response = await fetch("http://localhost:3000/unicorns");
    if (response.status !== 200) throw new Error("Someting went wrong");
    json = await response.json();
  } catch (err) {
    throw new Error(err);
  }
  return json;
}

export async function getUnicornById(id) {
  let json;
  try {
    const response = await fetch(
      `http://localhost:3000/unicorns/${id}?_embed=quotes`
    );
    if (response.status !== 200) throw new Error("Someting went wrong");
    json = await response.json();
  } catch (err) {
    throw new Error(err);
  }
  return json;
}
