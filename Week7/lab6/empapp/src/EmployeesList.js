// src/EmployeesList.js
import React from 'react';
import EmployeeCard from './EmployeeCard';

const employeeData = [
    { id: 1, name: 'Dharani', position: 'Developer' },
    { id: 2, name: 'Alex', position: 'Designer' },
];

function EmployeesList() {
    return (
        <div>
            <h2>Employee List</h2>
            {employeeData.map((emp) => (
                <EmployeeCard key={emp.id} employee={emp} />
            ))}
        </div>
    );
}

export default EmployeesList;
