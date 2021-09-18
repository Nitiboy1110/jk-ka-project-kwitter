
function  gt_score()
{
    score  = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "<h3> score " + score + "</h3>";
}

function Back()
{
    window.location="activity_1.html";
}