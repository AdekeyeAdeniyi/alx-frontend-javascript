interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const James: Student = {
  firstName: 'James',
  lastName: 'Doe',
  age: 25,
  location: 'Sans Francisco',
};

const John: Student = {
  firstName: 'John',
  lastName: 'Darwin',
  age: 21,
  location: 'Florida',
};

const studentsList: Array<Student> = [John, James];

const table = document.createElement('table');
table.style.backgroundColor = '#efefef';
table.style.borderCollapse = 'collapse';

const tbody = table.createTBody();

[...studentsList].forEach((student: Student, index: number): void => {
  const trow = tbody.insertRow(index);
  trow.style.borderBottom = '4px solid #fff';

  for (const [key, value] of Object.entries(student)) {
    if (key === 'firstName' || key === 'location') {
      const cell = trow.insertCell();
      cell.style.borderLeft = '4px solid #fff';
      cell.style.padding = '10px 20px';
      cell.innerHTML = value;
    }
  }
});

document.body.appendChild(table);
