document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var firstName = document.getElementById("mob-no").value;
    var lastName = document.getElementById("password").value;

    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    window.open("../homePage/index.html", '_self')



});