const form=document.getElementById("register-form")
form.addEventListener("submit", async (e) =>{
    e.preventDefault()
    const userdata={
        name:document.getElementById("name").value,
        password:document.getElementById("password").value,
        email:document.getElementById("email").value,
    }
    const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userdata)
    });


    const result = await response.json();
    alert(result.message);
    if (response.status === 201) {
        window.location.href = "login.html";
    }
});
