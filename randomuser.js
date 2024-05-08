document.querySelector("form").addEventListener(
    "submit",
    (event) => {
        event.preventDefault();

        const results = document.querySelector("[name=results]").value;
        const nat = document.querySelector("[name=nat]").value;


        fetch(`https://randomuser.me/api/?results=${results}&nat=${nat}`)
            .then(result => result.json())
            .then(data => {

                const userList = data.results;
                const markup = userList.map(user => `
                    <div class="user m-2">
                        <img src="${user.picture.large}" alt="Avatar of ${user.name.first} ${user.name.last}">
                        <div>${user.name.first} ${user.name.last}</div>
                        <div>${user.email}</div>
                        <div>${user.location.city}, ${user.nat}</div>
                    </div>
                `).join("");
                document.querySelector(".js-users").innerHTML = markup;
            });
    }
);