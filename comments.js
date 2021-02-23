let submit = document.getElementById("submit");

function comment() {
  let namee = document.getElementById("namee").value;
  let text = document.getElementById("text").value;
  alert(
    `Hello ${namee}, please contact me if you know how to get this to work! ${text}`
  );
}
