function togglePassword(id) {
  const input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

function validSignup() {
  const name = document.getElementById("fullname").value.trim();
  const emailVal = document.getElementById("email").value.trim();
  const phoneVal = document.getElementById("phone").value.trim();
  const cityVal = document.getElementById("city").value.trim();
  const pass = document.getElementById("password").value;
  const cpass = document.getElementById("confirmPassword").value;

  const errors = document.getElementsByClassName("error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].innerText = "";
  }

  if (name === "") {
    document.getElementById("nameerror").innerText = "Full name is required";
    return false;
  }

  if (emailVal === "" || !emailVal.includes("@")) {
    document.getElementById("emailerror").innerText = "Enter valid email";
    return false;
  }

  if (phoneVal.length !== 10 || isNaN(phoneVal)) {
    document.getElementById("phoneerror").innerText =
      "Phone number must be 10 digits";
    return false;
  }

  if (cityVal === "") {
    document.getElementById("cityerror").innerText = "City is required";
    return false;
  }

  if (pass.length < 8) {
    document.getElementById("passerror").innerText =
      "Password must be at least 8 characters";
    return false;
  }

  if (pass !== cpass) {
    document.getElementById("cpasserror").innerText =
      "Passwords do not match";
    return false;
  }

  localStorage.setItem(
    "user",
    JSON.stringify({
      email: emailVal,
      password: pass
    })
  );

  alert("Signup successful!");
  window.location.href = "SignIn.html";
  return false;
}

function validSignin() {
  const emailinput = document.getElementById("loginEmail").value.trim();
  const passinput = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const errors = document.getElementsByClassName("error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].innerText = "";
  }

  if (emailinput === "") {
    document.getElementById("loginerror").innerText = "Email is required";
    return false;
  }

  if (passinput === "") {
    document.getElementById("perror").innerText = "Password is required";
    return false;
  }

  if (storedUser === null) {
    alert("No user found. Please signup first");
    return false;
  }

  if (
    emailinput !== storedUser.email ||
    passinput !== storedUser.password
  ) {
    document.getElementById("perror").innerText =
      "Invalid login credentials";
    return false;
  }

  window.location.href = "travelapp.html";
  return false;
}
