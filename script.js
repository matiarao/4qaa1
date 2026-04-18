function validateForm(event) {

  event.preventDefault();

  const errorSpans = document.getElementsByClassName("error");
  for (let i = 0; i < errorSpans.length; i++) {
    errorSpans[i].innerHTML = "";
    errorSpans[i].style.display = "none";
  }
  document.getElementById("formsuccess").innerHTML = "";
  document.getElementById("formsuccess").style.display = "none";
  let isValid = true;

  if (document.getElementById("fullname").value.trim() === "") {
    document.getElementById("nameError").style.display = "inline-block";
    document.getElementById("nameError").innerHTML = "Full name is required";;
    isValid = false;
  }

  if (document.getElementById("birthday").value === "") {
    document.getElementById("bdayError").style.display = "inline-block";
    document.getElementById("bdayError").innerHTML = "Birthday is required";
    isValid = false;
  }

  const sexRadios = document.getElementsByName("sex");
  let sexChecked = false;
  for (let i = 0; i < sexRadios.length; i++) {
    if (sexRadios[i].checked) {
      sexChecked = true;
    }
  }
  if (!sexChecked) {
    document.getElementById("sexError").style.display = "block";
    document.getElementById("sexError").innerHTML = "Please select your sex";
    isValid = false;
  }

  //Account details
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmpassword").value;

  if (email === "") {
    document.getElementById("emailError").style.display = "block";
    document.getElementById("emailError").innerHTML = "Email is required";
    isValid = false;
  }

  if (username === "") {
    document.getElementById("userError").style.display = "block";
    document.getElementById("userError").innerHTML = "Username is required";
    isValid = false;
  }

  if (password === "") {
    document.getElementById("pwError").style.display = "block";
    document.getElementById("pwError").innerHTML = "Password is required";
    isValid = false;
  }

  if (confirmPassword === "") {
    document.getElementById("confirmpwError").style.display = "inline-block";
    document.getElementById("confirmpwError").innerHTML = "Please confirm your password";
    isValid = false;
  }

  if (password !== "" && confirmPassword !== "" && password !== confirmPassword) {
    document.getElementById("confirmpwError").style.display = "inline-block";
    document.getElementById("confirmpwError").innerHTML ="Password is incorrect";
    isValid = false;
  }

  //Topic questions
  const question1 = document.getElementsByName("question1");
  const question2 = document.getElementsByName("question2");
  const question3 = document.getElementsByName("question3");
  const question4 = document.getElementsByName("question4");

  let question1Checked = false;
  let question2Checked = false;
  let question3Checked = false;
  let question4Checked = false;
  for (let i = 0; i < question1.length; i++) {
    if (question1[i].checked) {
      question1Checked = true;
    }
  }
    for (let i = 0; i < question2.length; i++) {
    if (question2[i].checked) {
        question2Checked = true;
    }
    }
    for (let i = 0; i < question3.length; i++) {
    if (question3[i].checked) {
        question3Checked = true;
    }
    }
    for (let i = 0; i < question4.length; i++) {
    if (question4[i].checked) {
        question4Checked = true;
    }
    }      
  if (!question1Checked) {
    document.getElementById("question1Error").style.display = "inline-block";
    document.getElementById("question1Error").innerHTML = "Please answer this question.";
    isValid = false;
  }

  if (!question2Checked) {
    document.getElementById("question2Error").style.display = "inline-block";
    document.getElementById("question2Error").innerHTML = "Please answer this question.";
    isValid = false;
  }

  if (!question3Checked) {
    document.getElementById("question3Error").style.display = "inline-block";
    document.getElementById("question3Error").innerHTML = "Please answer this question.";
    isValid = false;
  }

  if (!question4Checked) {
    document.getElementById("question4Error").style.display = "inline-block";
    document.getElementById("question4Error").innerHTML = "Please answer this question.";
    isValid = false;
  }

  //Success Message
  if (isValid === true) {
    document.getElementById("formsuccess").style.display = "block";
    document.getElementById("formsuccess").innerHTML = "Thank you for registering! Always make sure to eat good and do good!";
  }

  return isValid;
}
