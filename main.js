function ChangeImage() {
    console.log("changeImagew");
    document.getElementById("image").src = "Images/photo3.jpg";
}

function GetDate() {
    document.getElementById("time").innerHTML = "Date : " + Date();
}

function ChangeStyle() {
    document.getElementById('ChangeStyle').style.color = 'red';
}

function HideORShow() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}