
// INPUT ELEMENTS
const inputYear = document.querySelector('#year');
const inputMonth = document.querySelector('#month');
const inputDay = document.querySelector('#day');



// OUTPUT ELEMENTS
const outputYear = document.querySelector('#output-year');
const outputMonth = document.querySelector('#output-month');
const outputDay = document.querySelector('#output-day');
const submitBtn = document.querySelector('#submit-btn');




let isValid = false;
const errorDay = document.querySelector('.error-day');
const errorMonth = document.querySelector('.error-month');
const errorYear = document.querySelector('.error-year');






inputDay.addEventListener('input', (e) => {
    if(+inputDay.value > 31) {
        errorDay.textContent = 'must be a valid Date';
        inputDay.style.borderColor = 'red';
        isValid = false;
        return;
    } else {
        isValid = true;
        errorDay.textContent = '';
        inputDay.style.borderColor = 'purple';
    }
    if(+inputDay.value === 0) {
        isValid = false;
        errorDay.textContent = 'This field is required';
        inputDay.style.borderColor = 'red';
        isValid = false;
        return;
    } else {
        errorDay.textContent = '';
        inputDay.style.borderColor = 'purple';
    }
});


inputMonth.addEventListener('input', (e) => {
    if(+inputMonth.value > 12) {
        errorMonth.textContent = 'must be a valid Date';   
        inputMonth.style.borderColor = 'red';
        isValid = false;
        return;
    } else {
        isValid = true;
        errorMonth.textContent = '';
        inputMonth.style.borderColor = 'purple';
    }
    if(+inputMonth.value === 0) {
        isValid = false;
        errorMonth.textContent = 'This field is required';
        inputMonth.style.borderColor = 'red';
        isValid = false;
        return;
    } else {
        errorMonth.textContent = '';
        inputMonth.style.borderColor = 'purple';
    }
});

inputYear.addEventListener('input', (e) => {
    if(+inputYear.value > 2023) {
        errorYear.textContent = 'must be a valid Date';
        inputYear.style.borderColor = 'red';
        isValid = false;
        return;
    } else {
        isValid = true;
        errorYear.textContent = '';
        inputYear.style.borderColor = 'purple';
    }
    if(+inputYear.value === 0) {
        isValid = false;
        errorYear.textContent = 'This field is required';
        inputYear.style.borderColor = 'red';
        isValid = false;
        return;
    } else {
        errorYear.textContent = '';
        inputYear.style.borderColor = 'purple';
    }
});




function CalculateDate() {
    if (isValid) {
      let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
      console.log(birthday);
      let birthdayObj = new Date(birthday);
      let ageDiffMill = Date.now() - birthdayObj;
      let ageDate = new Date(ageDiffMill);
      let ageYears = ageDate.getUTCFullYear() - 1970;
      let ageMonth = ageDate.getUTCMonth();
      let ageDay = ageDate.getUTCDay() - 1;

      outputDay.textContent = ageDay;
      outputMonth.textContent = ageMonth;
      outputYear.textContent = ageYears;
    } else {
      alert("error");
    }
  };

submitBtn.addEventListener('click', CalculateDate);














