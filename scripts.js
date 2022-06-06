const profile = document.querySelector("#profile");

let gitHubUrl = "https://api.github.com/users/Caelll/repos";

let gitHub = "https://api.github.com/users/Caelll";

fetch(gitHub, {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    console.log("My profile: ", data);
    myProfile(data);
  });

function myProfile(profileArray) {
  let myNameElement = document.createElement("div");
  myNameElement.classList.add("profile");
  myNameElement.innerText = `${profileArray.name}`;
  profile.appendChild(myNameElement);

  let imageElement = document.createElement("img");
  imageElement.src = `${profileArray.avatar_url}`;
  imageElement.alt = "Profile Picture";
  imageElement.classList.add("profilepic");
  imageElement.style.height = "150px";
  imageElement.style.width = "150px";
  profile.appendChild(imageElement);

  let locationElement = document.createElement("div");
  locationElement.classList.add("location");
  locationElement.innerHTML = `<b>Location:</b> ${profileArray.location}`;
  profile.appendChild(locationElement);

  let urlElement = document.createElement("url");
  urlElement.classList.add("url");
  urlElement.innerHTML = `<b>Github URL:</b> <a href="${profileArray.html_url}">${profileArray.login}</a>`;
  profile.appendChild(urlElement);

  let userElement = document.createElement("user");
  userElement.classList.add("user");
  userElement.innerHTML = `<b>Github username:</b> ${profileArray.login}`;
  profile.appendChild(userElement);
}

fetch(gitHubUrl, {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    console.log("Response from GitHub API: ", data);
    buildProfile(data);
  });

function buildProfile(profileRepos) {
  let repoElement = document.createElement("repos");
  repoElement.classList.add("repo")
  for (let i = 0; i < profileRepos.length; i++) {
    let myRepos = document.createElement("a");
    myRepos.href = `${profileRepos.html_url}`;
    myRepos.classList.add("myRepos");
    myRepos.innerHTML = `GitHub Repos: ${profileRepos[i].name}`
    repoElement.appendChild(myRepos)
    profile.appendChild(repoElement)
  }
}
//     for (let repo of profileRepos) {
//     let repoElement = document.createElement('div')
//     repoElement.classList.add("repo")

//     let myReposElement = document.createElement('myRepos')
//     myReposElement.classList.add("myRepos")
//     myReposElement.innerHTML = `<a href="${profileRepos.html_url}">${profileRepos.name}</a>`
//     repoElement.appendChild(myReposElement)
//     profile.appendChild(repoElement)
//     }
// }
