import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form")

const localStorageKey = 'feedback-form-state';

initForm()

formEl.addEventListener('submit', event => {
    event.preventDefault();
    // console.log("submit")

    const formData = new FormData(formEl);
    // console.log(FormData)
    formData.forEach((key, value) => console.log(`${value} - ${key}`));
    localStorage.removeItem(localStorageKey);
    formEl.reset();

});



formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
    // console.log('event.target.name', event.target.name);
    // console.log('event.target.value', event.target.value);
    let parsedFilters = localStorage.getItem(localStorageKey);
    parsedFilters = parsedFilters ? JSON.parse(parsedFilters) : {};
    // console.log(parsedFilters)

    parsedFilters[event.target.name] = event.target.value;
    // console.log(parsedFilters)

    if(!parsedFilters) return;

    localStorage.setItem(localStorageKey, JSON.stringify(parsedFilters));
    


};


function initForm() {
    let inputData = localStorage.getItem(localStorageKey);
  
    if (inputData) {
      let parsedInputData = JSON.parse(inputData);
  
      Object.entries(parsedInputData).forEach(([name, value]) => {
        formEl.elements[name].value = value;
      });
    }
}










