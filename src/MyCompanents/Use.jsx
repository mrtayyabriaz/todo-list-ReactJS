import React from "react";
import "../style/use.min.css";

export default function Use() {
  return (
    <>
      {/* <h1 className="heading">Use</h1> */}
      <div className="use-body">

        <h1 id="to-do-list-app" className="mt-2">To-Do List App Usge</h1>
        <h2 id="overview">Overview</h2>
        <p>Welcome to the To-Do List App! This simple web application allows you to create and delete your to-dos effortlessly. Stay organized and manage your tasks with ease.</p>
        <h2 id="project-url">Project URL</h2>
        <p>Visit the To-Do List App to get started.</p>
        <h2 id="how-to-use">How to Use</h2>
        <h3 id="-creating-a-todo"><code>Creating</code> a ToDo</h3>
        <p>Enter the title and description for your ToDo. <br />
          Press Enter to activate the input fields OR Click the Add button to create your ToDo.<br /></p>
        <h3 id="-deleting-a-todo"><code>Deleting</code> a ToDo</h3>
        <p>Locate the ToDo you want to delete.<br />
          Click on the Delete button next to the ToDo.<br /></p>
        <h3 id="project-structure">Project Structure</h3>
        <p><b>index.html:</b> The main HTML file for the project. <br />
          <b>styles.css:</b> Contains the styles for the application. <br />
          <b>script.js:</b> Manages the functionality of the To-Do List.</p>
        <h3 id="technologies-used">Technologies Used</h3>
        <p><code>HTML</code>
          <code>CSS</code>
          <code>JavaScript</code></p>
        <h3 id="project-preview">Project Preview</h3>
        <p>To-Do List App Preview</p>
        <h2 id="feedback">Feedback</h2>
        <p>Your feedback is highly appreciated. If you encounter any issues or have suggestions for improvement, feel free to open an issue here.</p>
        <h2 id="license">License</h2>
        <p>This project is licensed under the MIT License - see the LICENSE file for details.</p>
        <p>Happy organizing! 📝✨</p>
      </div>

    </>
  );
}
