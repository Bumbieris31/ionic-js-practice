const nameCourse = document.querySelector('#course-name');
const ratingCourse = document.querySelector('#course-rating');
const addBtn = document.querySelector('#btn-add');
const listCourses = document.querySelector('#course-list');

const clear = () => {
    nameCourse.value = "";
    ratingCourse.value = "";
};

addBtn.addEventListener('click', () => {
    const enteredName = nameCourse.value;
    const enteredRating = ratingCourse.value;

    if (
        enteredName.trim().length <= 0 ||
        enteredRating < 1 || enteredRating > 5 ||
        enteredRating.trim().length <= 0
    ){
        const alert = document.createElement('ion-alert');
        alert.header = 'Invalid inputs';
        alert.message = 'Please enter valid Name and Rating!';
        alert.buttons = ['Okay'];
        document.body.appendChild(alert);
        return alert.present();
    };

    const newCourse = document.createElement('ion-item');
    newCourse.innerHTML = `<strong>${enteredName}<\strong> - ${enteredRating}/5`
    listCourses.appendChild(newCourse);
    clear();
});