console.log("projects.js loaded");
const username = "LiminalElenyx";
const url = "https://api.github.com/users/LiminalElenyx/repos";

fetch(url)
    /*.then(function (response) {
        return response.json();

    })
    .then(function (data) {
        console.log('Repos received:', data);
    })
    .catch(function (error) {
        console.error('Fetch error:', error);
    });
    */
    .then((response) => response.json())
    .then((data) => {
        console.log("Repos received:", data);
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        const container = document.querySelector("#repo-list");

        container.textContent = "";

        data.forEach((repo) => {
            const wrapper = document.createElement("div");

            const link = document.createElement("a");
            link.textContent = repo.name;
            link.href = repo.html_url;
            link.target = "_blank";
            

            const description = document.createElement("p");
            description.textContent = repo.description || "No description provided.";

            wrapper.appendChild(link);
            wrapper.appendChild(description);
            
            container.appendChild(wrapper);
        });
    })
     .catch((error) => {
        console.error("Fetch error:", error);
     });