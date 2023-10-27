function passData() {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let un = document.getElementById("un");
    let ea = document.getElementById("ea");
    let pn = document.getElementById("pn");
    let pass = document.getElementById("pass");

    console.log("First name : " + fname.value);
    console.log("Last name : " + lname.value);
    console.log("Username : " + un.value);
    console.log("Email address : " + ea.value);
    console.log("Phone number : " + pn.value);
    console.log("Password : " + pass.value);
}