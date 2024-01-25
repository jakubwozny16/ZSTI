function showForm() {
    var selectedFormId = document.getElementById('formSelector').value;
    document.getElementById('studentForm').style.display = 'none';
    document.getElementById('bookForm').style.display = 'none';
    document.getElementById(selectedFormId).style.display = 'block';
  }

  function submitStudentData() {
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      class: document.getElementById('class').value,
      birthdate: document.getElementById('birthdate').value
    };
    console.log('Student Data:', formData);
  }

  function submitBookData() {
    const formData = {
      author: document.getElementById('author').value,
      title: document.getElementById('title').value,
      isbn: document.getElementById('isbn').value,
      publishDate: document.getElementById('publishDate').value
    };
    console.log('Book Data:', formData);
  }

  function checkNameLength(inputId) {
    const input = document.getElementById(inputId);
    const length = input.value.length;

    if (length < 3) {
      input.style.backgroundColor = 'red';
    } else {
      input.style.backgroundColor = 'green';
    }
  }

  function checkClassInput() {
    const classInput = document.getElementById('class');
    const inputValue = classInput.value;

    if (/^[0-9a-zA-Z]+$/.test(inputValue) && inputValue.length >= 3) {
      classInput.style.backgroundColor = 'green';
    } else {
      classInput.style.backgroundColor = 'red';
    }
  }

  function checkBirthdate() {
    const birthdateInput = document.getElementById('birthdate');
    const inputDate = new Date(birthdateInput.value);
    const comparisonDate = new Date('2006-01-26');

    if (inputDate > comparisonDate) {
      birthdateInput.style.backgroundColor = 'red';
    } else {
      birthdateInput.style.backgroundColor = 'green';
    }
  }

  function checkNameLength(inputId) {
    const input = document.getElementById(inputId);
    const length = input.value.length;

    if (length < 3) {
      input.style.backgroundColor = 'red';
    } else {
      input.style.backgroundColor = 'green';
    }
  }

  function checkTitleInput() {
    const titleInput = document.getElementById('title');
    const inputValue = titleInput.value;

    if (/^[0-9a-zA-Z]+$/.test(inputValue) && inputValue.length >= 3) {
      titleInput.style.backgroundColor = 'green';
    } else {
      titleInput.style.backgroundColor = 'red';
    }
  }

  function checkIsbnInput() {
    const isbnInput = document.getElementById('isbn');
    const inputValue = isbnInput.value;

    if (/^[0-9]+$/.test(inputValue) && inputValue.length === 13) {
      isbnInput.style.backgroundColor = 'green';
    } else {
      isbnInput.style.backgroundColor = 'red';
    }
  }

  function checkPublishDate() {
    const publishDateInput = document.getElementById('publishDate');
    const inputDate = new Date(publishDateInput.value);
    const comparisonDate = new Date('1455-01-01');

    if (inputDate > comparisonDate) {
      publishDateInput.style.backgroundColor = 'green';
    } else {
      publishDateInput.style.backgroundColor = 'red';
    }
  }