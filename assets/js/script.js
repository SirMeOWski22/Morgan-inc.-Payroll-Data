// reference the #add-employees-btn element
  const addEmployeesBtn = document.getElementById('add-employees-btn');

// Collect employee data
  const employee1 = {firstName: "John", lastName: "Legend", salary: 650000};
  const employee2 = {firstName: "Sally", lastName: "Mae", salary: 850000};
  const employee3 = {firstName: "Jerry", lastName: "Jones", salary: 950000};

  const collectEmployees = function() {
  let employees = [employee1, employee2, employee3];
  let addMore = true;

  console.log('employees:', employees);

  while (addMore) {
    let firstNameInput = prompt("Enter employee's first name:");
    let lastNameInput = prompt("Enter employee's last name:");
    let salaryInput = prompt("Enter employee's salary:");
    let salary = isNaN(parseInt(salaryInput)) ? 0 : parseInt(salaryInput);

  employees.push({
    firstName: firstNameInput,
    lastName: lastNameInput,
    salary: salary
});

  let continueInput = prompt("Do you want to add another employee? (yes/no)");
    addMore = continueInput.toLowerCase() === "yes";
}

  return employees;
}

const displayAverageSalary = function (employees) {
  let totalSalary = 0;
  employees.forEach(employee => {
      totalSalary += employee.salary;
  });
  
  const averageSalary = totalSalary / employees.length;
  
  console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
  
  return averageSalary;
};

// Select a random employee
const getRandomEmployee = function(employees) {

  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];

  console.log(`randomEmployee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
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