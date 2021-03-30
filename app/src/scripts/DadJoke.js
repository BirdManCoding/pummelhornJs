export async function getDadJoke() {
  let json;
  try {
    const response = await fetch("https://icanhazdadjoke.com/slack");
    if (response.status !== 200) throw new Error("Someting went wrong");
    json = await response.json();
  } catch (err) {
    throw new Error(err);
  }
  return json;
}

export async function postDadJoke(data) {
  let json;
  try {
    const response = await fetch("http://localhost:3000/quotes", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    json = await response.json(); // parses JSON response into native JavaScript objects
  } catch (err) {
    throw new Error(err);
  }
  return json;
}
