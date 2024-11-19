document.addEventListener("DOMContentLoaded", () => {
  const authDropdown = document.getElementById("authDropdown");
  const userInfo = document.getElementById("userInfo");
  const userName = document.getElementById("userName");
  const logout = document.getElementById("logout");

  const userStatus = JSON.parse(localStorage.getItem("userStatus")) || false;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (userStatus && currentUser) {
    authDropdown.classList.add("d-none");
    userInfo.classList.remove("d-none");
    userName.textContent = `${currentUser.name} ${currentUser.surname}`;
  }

  logout.addEventListener("click", () => {
    localStorage.setItem("userStatus", false);
    localStorage.removeItem("currentUser");
    authDropdown.classList.remove("d-none");
    userInfo.classList.add("d-none");
  });
});
