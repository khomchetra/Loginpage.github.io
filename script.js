document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("form_login")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        var Gmail = document.getElementById("Gmail").value;
        var Password = document.getElementById("Password").value;
        var validGmail = /^[A-Za-z0-9._%+-]+@gmail\.com$/;

        var isvalid = true;
        if (Gmail === "") {
          showerror("Gmail-error", "**Please enter your Gmail");
        } else if (!validGmail.test(Gmail)) {
          showerror(
            "Gmail-error",
            "Please enter a valid Gmail address ending with gmail.com"
          );
          isvalid = false;
        } else {
          hide("Gmail-error");
        }

        if (Password === "") {
          showerror("Password-error", "**Please enter your password ");
        } else {
          hide("Password-error");
        }

        if (isvalid) {
          console.log("Validation passed. Proceeding with authentication...");
          Authentication(Gmail, Password); // Pass Gmail and Password to the function
        } else {
          console.log("Validation failed. Check input fields.");
        }
      });

    function Authentication(Gmail, Password) {
      var UserValidate = {
        Gmail: Gmail,
        Password: Password,
      };

      console.log("Gmail : ", Gmail);
      console.log("Password :", Password);
    }

    function showerror(id, message) {
      var element = document.getElementById(id);
      element.innerHTML = message;
      element.style.display = "block";
    }
    function hide(id) {
      var element = document.getElementById(id);
      element.style.display = "none";
    }
    document.getElementById("Gmail").addEventListener("input", function () {
      clear("Gmail-error");
    });
    document.getElementById("Password").addEventListener("input", function () {
      clear("Password-error");
    });

    function clear(id) {
      var Error = document.getElementById(id);
      Error.style.display = "none";
    }
  });