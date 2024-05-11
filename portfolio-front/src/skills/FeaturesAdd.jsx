import React, { useState } from "react";

const FeaturesAdd = () => {
  const [formData, setFormData] = useState({ items: [{ imgUrl: "", title: "", content: "", color: "" }] });

  const handleAddField = () => {};

  return (
    <div>
      <form>
        <div>
          <label>
            Image URL:
            <input type="text" name="imgUrl" />
          </label>
          <label>
            Title:
            <input type="text" name="title" />
          </label>
          <label>
            Content:
            <textarea name="content" />
          </label>
          <label>
            Color:
            <input type="text" name="color" />
          </label>
        </div>
        <button onClick={handleAddField} className="dowanload-btn" type="button">
          + Add Field
        </button>
        <button className="dowanload-btn" type="submit">
          Save Data
        </button>
      </form>
    </div>
  );
};

export default FeaturesAdd;
