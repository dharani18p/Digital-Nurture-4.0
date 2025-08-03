import React, { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const [view, setView] = useState("books");

  const books = [
    { title: "React Explained", author: "Zell Liew" },
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford" },
  ];

  const blogs = [
    { id: 1, title: "React vs Angular", content: "React is more flexible..." },
    { id: 2, title: "JSX Deep Dive", content: "JSX compiles to React.createElement..." },
  ];

  const courses = [
    { code: "REACT101", name: "Intro to React" },
    { code: "JSX202", name: "Advanced JSX" },
  ];

  // Element variable for conditional rendering
  let content;
  if (view === "books") {
    content = <BookDetails books={books} />;
  } else if (view === "blogs") {
    content = <BlogDetails blogs={blogs} />;
  } else if (view === "courses") {
    content = <CourseDetails courses={courses} />;
  } else {
    content = <p>Select a view to display content.</p>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📰 Blogger App</h1>

      {/* Ternary Rendering Buttons */}
      <div>
        <button onClick={() => setView("books")}>Show Books</button>&nbsp;
        <button onClick={() => setView("blogs")}>Show Blogs</button>&nbsp;
        <button onClick={() => setView("courses")}>Show Courses</button>&nbsp;
        <button onClick={() => setView("")}>Clear View</button>
      </div>

      <hr />

      {/* Logical && rendering */}
      {view && <h3>Currently showing: {view.toUpperCase()}</h3>}

      {/* Final content rendering */}
      {content}
    </div>
  );
}

export default App;
