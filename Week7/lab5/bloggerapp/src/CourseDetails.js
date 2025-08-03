import React from "react";

const CourseDetails = ({ courses }) => {
    return (
        <div>
            <h2>📘 Course Details</h2>
            <ul>
                {courses.map((course, idx) => (
                    <li key={course.code}>
                        <b>{course.name}</b> - Code: {course.code}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseDetails;
