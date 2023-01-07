interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract: boolean;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => `${firstName[0]}.${lastName}`;

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
  workOnHomework: () => string;
  displayName: () => string;
}

const StudentClass: StudentConstructor = class Student implements StudentClassInterface {
  firstName: string;

  lastName: string;

  message = 'Currently working';

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return this.message;
  }

  displayName(): string {
    return this.firstName;
  }
};

export { printTeacher, StudentClass };
