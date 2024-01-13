document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission
    var firstName = document.getElementById("full-name").value;
    var lastName = document.getElementById("mob-no").value;
    var password = document.getElementById("create-password").value;

    console.log("Last Name: " + lastName);
    console.log("First Name: " + firstName);
    console.log("Password: " + password);
    // document.location.replace("file:///home/samanth/Code/CyberCypher/homePage/index.html");
    // window.location.href = "https://www.example.com";
    window.open("../homePage/index.html", '_self');
    // window.close()




});