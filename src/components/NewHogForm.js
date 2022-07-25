import React from "react";

const NewHogForm = ({ onAddHog }) => {
  //   const [formData, setFormData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = {
      name: e.target.name.value,
      specialty: e.target.specialty.value,
      greased: e.target.greased.checked,
      weight: e.target.weight.value,
      image: e.target.image.value,
    };
    onAddHog(newHog);
  };

  return (
    <form onSubmit={handleSubmit} className="hog-form">
      <label htmlFor="name">Name: </label>
      <input id="name" type="text" name="name" placeholder="Enter Name..." />
      <label htmlFor="specialty">Specialty: </label>
      <input
        id="specialty"
        type="text"
        name="specialty"
        placeholder="Enter Specialty..."
      />
      <label htmlFor="greased">Is Greased: </label>
      <input id="greased" type="checkbox" name="greased" />
      <label htmlFor="weight">Weight: </label>
      <input id="weight" type="number" name="weight" />
      <label htmlFor="image">Image: </label>
      <input id="image" type="text" name="image" />
      <input type="submit" />
    </form>
  );
};

export default NewHogForm;
