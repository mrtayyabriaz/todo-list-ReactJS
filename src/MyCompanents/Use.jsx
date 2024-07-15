import React from "react";
import "../style/use.min.css";

export default function Use() {
  return (
    <>
      <div className="use-body">

        <h1 id="to-do-list-app" className="mt-2">To-Do List App Usge</h1>
        <h2 id="overview">Overview</h2>
        <p>Welcome to the To-Do List App! This simple web application allows you to create and delete your to-dos effortlessly. Stay organized and manage your tasks with ease.</p>
        <h2 id="project-url">Project URL</h2>
        <a href="https://my-todo-place.netlify.app/" className="text-primary ms-5">https://my-todo-place.netlify.app/</a>
        <h2 id="how-to-use" className="mt-2">How to Use</h2>
        <h3 id="-creating-a-todo"><code>Creating</code> a ToDo</h3>
        <p>Enter the title and description for your ToDo. <br />
          Press Enter to activate the input fields OR Click the Add button to create your ToDo.<br /></p>
        <h3 id="-deleting-a-todo"><code>Deleting</code> a ToDo</h3>
        <p>Locate the ToDo you want to delete.<br />
          Click on the Delete button next to the ToDo.<br /></p>

        <h3 id="editing-a-todo"><code>Editing</code> a ToDo</h3>
        <p>Locate the ToDo you want to edit.<br />
          Click on the Edit button next to the ToDo.<br />
          Make the necessary changes to the title and/or description.<br />
          Click the Save button to save your changes.<br />
        </p>

        <h3 id="project-structure">Project Structure</h3>
        <pre className="ms-5">my-vite-react-app/
          <br />  ├── node_modules/
          <br />  ├── public/
          <br />  │   └── index.html
          <br />  ├── src/
          <br />  │   ├── context/
          <br />  │   │   └── TodoContext.js
          <br />  │   ├── MyCompanents/
          <br />  │   │   ├── images/
          <br />  │   │   ├── AddToDo.jsx
          <br />  │   │   ├── Album.jsx
          <br />  │   │   ├── Footer.jsx
          <br />  │   │   ├── Header.jsx
          <br />  │   │   ├── Todos.jsx
          <br />  │   │   ├── Ttodoitem.jsx
          <br />  │   │   └── Use.jsx
          <br />  │   ├── style/
          <br />  │   │   ├── App.css
          <br />  │   │   ├── index.css
          <br />  │   │   ├── use.min.css
          <br />  │   │   ├── use.min.css.map
          <br />  │   │   └── use.scss
          <br />  │   ├── App.jsx
          <br />  │   ├── main.jsx
          <br />  │   └── index.css
          <br />  ├── .eslintrc.cjs
          <br />  ├── .gitignore
          <br />  ├── index.html
          <br />  ├── package-lock.json
          <br />  ├── package.json
          <br />  ├── README.md
          <br />  ├── todo-list.code-workspace
          <br />  └── vite.config.js
        </pre>

        <h3 id="technologies-used">Technologies Used</h3>
        <p><code>Vite</code>
          <code>React</code>
          <code>JavaScript</code></p>


        <section>
          <h3>Dependencies</h3>
          <ul>
            <li><code>react</code>: ^18.2.0</li>
            <li><code>vite</code>: ^5.0.8</li>
            <li><code>react-dom</code>: ^18.2.0</li>
            <li><code>react-router-dom</code>: ^6.22.0</li>

            <li><code>@types/react</code>: ^18.2.43</li>
            <li><code>@types/react-dom</code>: ^18.2.17</li>
            <li><code>@vitejs/plugin-react</code>: ^4.2.1</li>
            <li><code>eslint</code>: ^8.55.0</li>
            <li><code>eslint-plugin-react</code>: ^7.33.2</li>
            <li><code>eslint-plugin-react-hooks</code>: ^4.6.0</li>
            <li><code>eslint-plugin-react-refresh</code>: ^0.4.5</li>
          </ul>
        </section>
      </div>

    </>
  );
}
