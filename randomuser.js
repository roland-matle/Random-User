document.querySelector("form").addEventListener(
    "submit",
    (event) => {
        event.preventDefault();

        fetch("https://randomuser.me/api/?results=5&nat=US")
            .then(result => result.json())
            .then(data => {
                document.querySelector(".js-users").innerHTML = JSON.stringify(data);

                const userList = data.results;
                const markup = userList.map(user => `
                    <div class="user">
                        <img src="${user.picture.large}" alt="Avatar of ${user.name.first} ${user.name.last}">
                        <div>${user.name.first} ${user.name.last}</div>
                        <div>${user.email}</div>
                    </div>
                `).join("");
                document.querySelector(".js-users").innerHTML = markup;
            });
    }
);