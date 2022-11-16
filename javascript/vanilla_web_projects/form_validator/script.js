const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
// 指定したインプット要素の親要素に
function showError(inputElement, message) {
  const formControl = inputElement.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// フォームの枠を緑にするためのクラスを付与する
function showSuccess(inputElement) {
  const formControl = inputElement.parentElement;
  formControl.className = "form-control success";
}

// Check email is valid
function checkEmail(inputElement) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(inputElement.value.trim())) {
    showSuccess(inputElement);
  } else {
    showError(inputElement, "Email is not valid");
  }
}

// Check required fields
function checkRequired(inputElements) {
  let isRequired = false;
  inputElements.forEach((inputElement) => {
    if (inputElement.value.trim() === "") {
      showError(inputElement, `${getFieldName(inputElement)} is required`);
      isRequired = true;
    } else {
      showSuccess(inputElement);
    }
  });

  return isRequired;
}

// Check input length
function checkLength(inputElement, min, max) {
  if (inputElement.value.length < min) {
    showError(
      inputElement,
      `${getFieldName(inputElement)} must be at least ${min} characters`
    );
  } else if (inputElement.value.length > max) {
    showError(
      inputElement,
      `${getFieldName(inputElement)} must be less than ${max} characters`
    );
  } else {
    showSuccess(inputElement);
  }
}

// Check passwords match
function checkPasswordsMatch(inputElement1, inputElement2) {
  if (inputElement1.value !== inputElement2.value) {
    showError(inputElement2, "Passwords do not match");
  }
}

// input要素の id　名を取得する
/**
 * @param {*} inputElement
 * @returns String
 */
function getFieldName(inputElement) {
  // 開始文字を大文字に変換して返す ex. "username" => "Username"
  return inputElement.id.charAt(0).toUpperCase() + inputElement.id.slice(1);
}

// Event listeners
const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (checkRequired([username, email, password, password2])) {
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
  }
});
