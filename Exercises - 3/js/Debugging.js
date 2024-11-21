const list = document.getElementById("catfacts");

try {
  fetch("https://cat-fact.herokuapp.com/facts") //fetching this API of catfacts
    .then((response) => response.json()) //It's calling to json 
    .then((result) => { //taking the results
      result.forEach((item) => { //going through each of them 
        const li = document.newElement("li"); // making a new list
        // const li = document.createElement("li");
        li.innerText = item.fact;
        // li.innerText = item.text;
        list.appendChild(li); // appending
      });
    });
} catch (e) {
  // Silence is golden
}
