(function(){

    function processing() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
    
        if (name === "user" && email === "user1@gmail.com") {
            alert ("Zapisano pomyślnie!");
        } else {
            alert ("Nieprawidłowy login lub hasło!");
        }
    }
    
    var login = function() {
        var loading = document.getElementById("loading");
        loading.classList.remove("hidden");
    
        setTimeout(function(){
            processing();
        }, 1000);    
    }

})();






