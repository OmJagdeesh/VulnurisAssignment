const button = document.getElementById("fetchBtn");
const userInfo = document.getElementById("userInfo");

button.addEventListener("click", fetchUser);

async function fetchUser() {
    try {
        userInfo.innerHTML = "Loading...";

        const response = await fetch("https://randomuser.me/api/");

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();
        const user = data.results[0];

        userInfo.innerHTML = `
            <div class="card">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Country:</strong> ${user.location.country}</p>
                <p><strong>Gender:</strong> ${user.gender}</p>
            </div>
        `;
    } catch (error) {
        userInfo.innerHTML =
            `<p class="error">Unable to fetch user data.</p>`;
    }
}