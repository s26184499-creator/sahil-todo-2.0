const form = document.getElementById("login-form") //different from register
form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const userdata = {
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
    }
    const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userdata)
    });
    
    
    const result = await response.json();
    console.log(result)
    console.log(result.name)
    alert(result.message);
    if (response.ok) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("name", result.name);

        localStorage.setItem("isLoggedIn", "true");


        window.location.href = "index.html";
    }
});

