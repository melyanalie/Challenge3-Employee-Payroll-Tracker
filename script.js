// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];
  let keepAdding = true;

  while (keepAdding) {
    const inputFirstName = window.prompt("Enter First Name");
    const inputLastName = window.prompt("Enter Last Name");
    let inputSalary = window.prompt("Enter Salary");

    // Convert salary to a number
    inputSalary = parseFloat(inputSalary);

    if (isNaN(inputSalary)) {
      window.alert("Invalid salary entered. Please enter a valid number.");
      continue;
    }

// TODO: Create an object to house each employee's data
      const employee = {
        firstName: inputFirstName,
        lastName: inputLastName,
        salary: inputSalary
      };

// TODO: Push that object into the employees array
    employees.push(employee);

    keepAdding = window.confirm("Do you want to add another employee?");
  }
  
  return employees;
};
// Display the average salary
const displayAverageSalary = function (employeesArray) {
  if (employeesArray.length === 0) {
    return "No employees added yet.";
  }
  // TODO: Calculate and display the average salary
  let sum = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    sum += employeesArray[i].salary;
  }

  const averageSalary = sum / employeesArray.length;
  return `Average Salary: ${averageSalary.toFixed(2)}`;
};

// Select a random employee
function getRandomEmployee(employeesArray) {
    if (employeesArray.length === 0) {
        return "No employees added yet.";
    }
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];

    return `Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}, Salary: ${randomEmployee.salary.toFixed(2)}`;
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log();

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);