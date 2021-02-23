let namee = document.getElementById("namee").value;
let text = document.getElementById("text").value;
let submit = document.getElementById("submit");

function comment() {
  console.log(namee);
  console.log(text);
  console.log(submit);
  alert(
    `Hello ${namee}, please contact me if you know how to get this to work ${text}`
  );
}
