

fetch("https://dummyjson.com/users?limit=100")
    .then(javob => javob.json())
    .then(data => {
        davlatlar = data.users;
        chizish(davlatlar);
    });

const ota = document.getElementById("ota");
const input = document.getElementById("input");
const select = document.getElementById("select");

function chizish(malumot) {
    ota.innerHTML = "";

    malumot.map(davlat => {
        const div = document.createElement("div");
        div.classList.add("card");


        div.innerHTML = ` 
            <img src="${davlat.image}" alt="hrd">
            <h2>${davlat.lastName} ${davlat.firstName}</h2>
            <h3>Email: ${davlat.email}</h3>
            <h3>Phone: ${davlat.phone}</h3>
            <h3>Gender: ${davlat.gender}</h3>
            <p>Address: ${davlat.address.address}, ${davlat.address.city}</p>
        `;
        ota.appendChild(div);
    });
}

input.addEventListener("input", () => {
    const qidiruv = input.value.toLowerCase();
    const filterQilingan = davlatlar.filter((d) =>
        (d.firstName + " " + d.lastName).toLowerCase().includes(qidiruv)
    );
    chizish(filterQilingan);
});

select.addEventListener("change", () => {
    if (select.value == "All") {
        chizish(davlatlar);
    } else {
        const regionDavlat = davlatlar.filter(d => d.gender == select.value);
        chizish(regionDavlat);
    }
});
