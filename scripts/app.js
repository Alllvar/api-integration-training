const init = () => {
    $.ajax({
        url: "/users",
        success: (response) => {
            const { users } = response;

            users.map((person) => {
                const newData = document.createElement("tr");
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");
                const td3 = document.createElement("td");
                const td4 = document.createElement("td");
                const infoButton = document.createElement("button");
                infoButton.className = "btn btn-info";
                const deleteButton = document.createElement("button");

                td1.innerHTML = person.id;
                td2.innerHTML = person.name;
                infoButton.innerHTML = "Details";
                infoButton.type = "button";
                infoButton.id = "button" + person.id;

                td3.appendChild(infoButton);
                deleteButton.onclick = deleteUser.bind(this, person);
                deleteButton.type = "button";
                deleteButton.className = "btn btn-danger";
                deleteButton.innerHTML = "Delete user";

                td4.appendChild(deleteButton);
                newData.appendChild(td1);
                newData.appendChild(td2);
                newData.appendChild(td3);
                newData.appendChild(td4);

                document.getElementById("tableContent").appendChild(newData);
            });
        }
    });
};

const body = document.getElementsByTagName('body')[0];
body.onload = init;

const deleteUser = (person) => {
    //console.log(person.name)
};
