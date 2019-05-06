(function() {

    var zapisz = document.getElementById("form");
    zapisz.addEventListener("submit", login, false);
    
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var loading = document.getElementById("loading");
    var message_loading = document.getElementById("message_loading");
    var message_success = document.getElementById("message_success");
    var message_fail = document.getElementById("message_fail");
    
    function login(e) {
        e.preventDefault();
        loading.classList.remove("hidden");
        showMessage(1);

        setTimeout(function(){
            processing();
        }, 2000);    
    }

    function processing() {
        if (name.value === "user" && email.value === "user@user") {
            resetButtons();
            name.classList.add("correct");
            email.classList.add("correct");
            showMessage(2);
            
        } else {
            name.classList.add("error");
            email.classList.add("error");
            showMessage(3);
        }

        setTimeout(function(){
            loading.classList.add("hidden");
        }, 3000)
    }

    function resetButtons() {
        name.classList.remove("error");
        email.classList.remove("error");
    }

    function showMessage(number) {
        switch (number) {
            case 1: 
                loading.classList.remove("success");
                loading.classList.remove("fail");
                message_loading.classList.remove("hidden");
                message_success.classList.add("hidden");
                message_fail.classList.add("hidden");
                break;
            case 2: 
                loading.classList.add("success");
                loading.classList.remove("fail");
                message_loading.classList.add("hidden");
                message_success.classList.remove("hidden");
                message_fail.classList.add("hidden");
                break;
            case 3: 
                loading.classList.remove("success");
                loading.classList.add("fail");
                message_loading.classList.add("hidden");
                message_success.classList.add("hidden");
                message_fail.classList.remove("hidden");
                break;
        }
    }
    
})();
     





