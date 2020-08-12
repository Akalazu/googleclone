function myFunction() {
    var first = document.getElementById("fname").value;
    var last = document.getElementById("lname").value;
    swal({
      title: "Congratulations",
      text: "You have won",
      icon: "success"
    });
  }