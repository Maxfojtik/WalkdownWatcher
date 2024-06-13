const counter = document.getElementById('counter')

window.electronAPI.onData((value) => {
//   console.log(value);
    //{"watchingFolder": watchingFolder, "outputFolder": outputFolder, "lastRenamedFile": lastRenamedFile}
    $("#watchingFolder").text(value["watchingFolder"]);
    $("#outputFolder").text(value["outputFolder"]);
    $("#lastRenamedFile").text(value["lastRenamedFile"]);
})