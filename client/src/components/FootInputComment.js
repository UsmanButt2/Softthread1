import React, { useState } from "react";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const FootInputComment = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      toast.error("Please enter something before submitting.");
    } else {
      toast.success("Thank You For Sharing!");
      setInputValue(""); // Clear the input field
    }
  };

  return (
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          placeholder="How was Shopping "
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="comment-input"
        />
        <button type="submit" className="comment-button">
          Submit
        </button>
      </form>
    
  );
};

export default FootInputComment;