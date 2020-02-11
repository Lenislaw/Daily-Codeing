class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  // UI profile
  showProfile(user) {
    ui.clearAlert();
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src=${user.avatar_url}>
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary mb-2">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary mb-2">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-primary mb-2">Followers: ${user.followers}</span>
                <span class="badge badge-primary mb-2">Following: ${user.following}</span>
                <br><br>
                <ul ckass="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: <div class="location" style="display:inline">${user.location}</div></li>
                    <li class="list-group-item">Company: ${user.created_at}</li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3"> Latest Repos </h3>
    <div id="repos"></div>
    `;
  }
  // Corect null values
  correctNullValues() {
    const location = document.querySelector(".location");
    if (location.innerText === "null") {
      location.innerText = "Brak";
    }
  }
  // Show alert message
  showAlert(msg, className) {
    // Clear any remaining alerts
    ui.clearAlert();
    // Create div
    const div = document.createElement("div");
    // Add class
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(msg));
    // Get parent
    const container = document.querySelector(".searchContainer");
    // Get search box
    const search = document.querySelector(".search");
    // Insert alert
    container.insertBefore(div, search);

    // //Timeout after 3s
    // setTimeout(() => {
    //   ui.clearAlert();
    // }, 3000);
  }
  // Show repos
  showRepos(repos) {
    let output = "";
    repos.forEach(function(repo) {
      output += `
          <div class="card card-body mb-2>
            <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank"> ${repo.name} </a>
                </div>
                <div class="col-md-6">
                    <span class="badge badge-primary mb-2">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary mb-2">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-primary mb-2">Forks: ${repo.forms_count}</span>
                </div>
            </div>
          </div>`;
    });

    //Output repos
    document.getElementById("repos").innerHTML = output;
  }
  // Clear alert msg
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  // Clear div profile
  clearProfile() {
    this.profile.innerHTML = "";
    ui.clearAlert();
  }
}
