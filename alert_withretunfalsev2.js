<script>

// Check if Cookie exists
function checkCookie() {

    // Get the cookie called "visited"
    var visited = getCookie("visited");

    // If it exists, print the Cookie to the Console
    if (visited == "true") {
        console.log("cookie is here !!! do nowt ");
    }
    else {
        function() {
 window.setTimeout(function() {
 alert('Please check availability - some of our gorgeous boots and shoes are custom made (( 01905 753254 | info@loveme-shoes-boots.co.uk ))');
}, 5000);

return false;
	);
}

//  Set the Cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

    }
}

</script>
