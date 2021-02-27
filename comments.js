let submit = document.getElementById("submit");
let commentList = document.getElementById("commentList");

//get comments from database

function renderComments(doc){
let li = document.createElement('div');
let name = document.createElement('p');
let time = document.createElement('p')
let text = document.createElement('p');

li.setAttribute('dataID', doc.id);
li.classList.add('comments');
name.classList.add('commentName');
time.classList.add('commentTime');
text.classList.add('commentText');
name.textContent = doc.data().name;
time.textContent = new Date(doc.data().timestamp.seconds*1000).toDateString();
text.textContent = doc.data().text;
li.appendChild(name);
li.appendChild(time);
li.appendChild(text);
commentList.appendChild(li)
console.log(new Date(doc.data().timestamp.seconds*1000))
}

const db = firebase.firestore();
  db.settings({timestampsInSnapshots: true})
db.collection('comments').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data());
    renderComments(doc)});
  
})

//upload comments to database

function comment() {
 
  let namee = document.getElementById("namee").value;
  let text = document.getElementById("text").value;
  /*alert(
    `Hello ${namee}, please contact me if you know how to get this to work! ${text}`
  );*/
  db.collection('comments').add({
    name: namee,
    text: text,
    timestamp: new Date()
  })
}
