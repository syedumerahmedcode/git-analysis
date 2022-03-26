// var js = JSON.parse(json);Pass string in json

const language = "language";
const programmingLanguageToSearchFor = "Java";

// console.log(allRepoResultsForLanguage);

function httpGet(theUrl) {
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", theUrl, false);
  xmlHttpReq.send(null);
  return xmlHttpReq.responseText;
}
// console.log(httpGet("https://api.github.com/users/syedumerahmedcode/repos"));
// console.log(getRequest());
const reposAsJSON = JSON.parse(
  httpGet("https://api.github.com/users/syedumerahmedcode/repos")
);
// const reposAsJSON = JSON.parse(json);
// console.log(reposAsJSON);

const reposWithSpecificLanguage = reposAsJSON.filter(function (repo) {
  console.log("##########################################");
  if (repo.language === programmingLanguageToSearchFor) {
    console.log(
      repo.name + " project contains " + programmingLanguageToSearchFor
    );
    // console.log(repo.url);
    const currentInternalRepo = JSON.parse(httpGet(repo.url));
    // console.log(currentInternalRepo);
    console.log(currentInternalRepo.html_url);
    console.log(currentInternalRepo.contents_url);

    const srcFolderInsideRepo = JSON.parse(
      httpGet(currentInternalRepo.contents_url)
    );
    console.log(srcFolderInsideRepo);
    // console.log("In the sub json, we need to call html_url property");
    console.log("##########################################");
  }
});
