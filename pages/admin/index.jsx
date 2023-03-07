import { useState } from "react";


import React from "react";

export default function Amin() {
  const [video, setVideo] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      video,
      title,
    };
  
    try {
      const response = await fetch("/api/saveData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const responseData = await response.json();
  
      alert(responseData.message);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="video">Video:</label>
      <input
        type="text"
        id="video"
        value={video}
        onChange={(e) => setVideo(e.target.value)}
      />

      <button type="submit">Save to JSON file</button>
    </form>
  );
}
