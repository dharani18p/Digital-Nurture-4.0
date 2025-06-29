-- Clean up if already exists
DROP TABLE IF EXISTS Employees;
-- Create table
CREATE TABLE Employees (
    EmpID INT,
    EmpName VARCHAR(50),
    Department VARCHAR(50),
    Salary INT
);
-- Insert clean data
INSERT INTO Employees (EmpID, EmpName, Department, Salary)
VALUES (101, 'Dhru', 'HR', 60000),
    (102, 'Arun', 'IT', 75000),
    (103, 'Nive', 'HR', 62000),
    (104, 'Charan', 'IT', 80000),
    (105, 'Vijis', 'Finance', 72000),
    (106, 'Yuva', 'IT', 76000);
-- Query 1: ROW_NUMBER
SELECT EmpID,
    EmpName,
    Department,
    Salary,
    ROW_NUMBER() OVER (
        PARTITION BY Department
        ORDER BY Salary DESC
    ) AS RowNum
FROM Employees;
-- Query 2: RANK
SELECT EmpID,
    EmpName,
    Department,
    Salary,
    RANK() OVER (
        PARTITION BY Department
        ORDER BY Salary DESC
    ) AS RankNum
FROM Employees;
-- Query 3: DENSE_RANK
SELECT EmpID,
    EmpName,
    Department,
    Salary,
    DENSE_RANK() OVER (
        PARTITION BY Department
        ORDER BY Salary DESC
    ) AS DenseRankNum
FROM Employees;