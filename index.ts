/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x && x.className === "topnav") {
            x.className += " responsive";
        } else if (x) {
            x.className = "topnav";
        }
}
