interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
  workFromHome = (): string => 'Working from home'

  getCoffeeBreak = (): string => 'Getting a coffee break';

  workDirectorTasks = (): string => 'Getting to director tasks'
}

class Teacher implements TeacherInterface {
  workFromHome = (): string => 'Cannot work from home'

  getCoffeeBreak = (): string => 'Cannot have a break';

  workTeacherTasks = (): string => 'Getting to work'
}

const createEmployee = (salary: string | number): Director | Teacher => {
  if (typeof (salary) === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
};

const isDirector = (employee: Teacher | Director): boolean => employee instanceof Director;

const executeWork = (employee: Teacher | Director): string => (employee instanceof Director ? employee.workDirectorTasks() : employee.workTeacherTasks());

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects):string => (todayClass === 'Math' ? 'Teaching Math' : 'Teaching History');
