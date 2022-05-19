function myFunction() {
    var txt;
    if (confirm("Pass this test! Are you Member?")) {
      txt = "You are Member!";
    } else {
      txt = "You have to Register/Sign up First!";
    }
    document.getElementById("demo").innerHTML = txt;
    document.getElementById("demo").style.textAlign = "Top"

  }