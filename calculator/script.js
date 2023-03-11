var buttons = document.querySelectorAll(".button");
var string = "";

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {

        try {


            if (e.target.value == '=') {
                document.getElementById("display").value = eval(string);
                string = document.getElementById("display").value;


            }
            else if (e.target.value == 'Del') {
                string = string.slice(0, -1);
                document.getElementById("display").value = string;

            }
            else if (e.target.value == 'AC') {
                document.getElementById("display").value = "";
                string = "";
            }

            else {

                string += e.target.value;
                document.getElementById("display").value = string;
            }
        }
        catch (ex) {
            document.getElementById("display").value = "Invalid";
        }
    });
});