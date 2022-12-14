import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";

function PostFormPage() {
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await fetch("/api/micro_posts", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content,
        }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Server error while creating a new micro post", error);
      setError(true);
    }
  };

  if (success) return <Navigate to="/" />;

  return (
    <div className="col-10 col-md-8 col-lg-7 container">
      {error && <ErrorAlert details={"failed to save the category name"} />}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" placeholder="Create a category" value={content} className="form-control" onChange={handleContentChange} autoFocus />
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostFormPage;