function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    if (x == "" || x == null) {
        alert("Email must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["pw"].value;
    if (y == "" || y == null) {
        alert("Password must be filled out");
        return false;
    }
}