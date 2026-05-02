rm = document.getElementById("todoForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const taskData = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        dueDate: document.getElementById("dueDate").value,
        priority: document.getElementById("priority").value,
        status: document.getElementById("status").value
    };

    try {
        const response = await fetch("http://localhost:5000/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskData)
        });

        const result = await response.json();
        alert(result.message);

        if (response.ok) {
            alert("task added!")
            form.reset(); // clear form
            
        }

    } catch (error) {
        console.error(error);
        alert("Error adding task");
    }
});


