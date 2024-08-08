import React, { FormEvent, useState } from "react";
import { api } from "server/api";

export default function PostForm() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState<any>(null)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // const response = await fetch("/api/test", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name }),
    // });

    const response = await api.test.$post({
      json: {
        name: name
      }
    })

    const result = await response.json();
    setResponse(result)
    console.log(result);
  };

  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Send your name to API</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <label className="block mb-2">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </label>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Send
        </button>
        <pre>{response ? JSON.stringify(response, null, 2) : 'No response'}</pre>
      </form>
    </div>
  );
}