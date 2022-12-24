import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)])
    .then((values) => {
      const arr = [];
      for (const item of values) {
        arr.push({ status: item.status, value: item.value || item.reason });
      }
      return arr;
    });
}

export default handleProfileSignup;
