document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  e.preventDefault();

  const number = document.querySelector("#number").value;
  let numberInput = document.querySelector("#number");

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const respone = JSON.parse(this.responseText);
      let output = "";
      if (parseInt(number, 10) < 1) {
        numberInput.value = "";
        numberInput.focus();
      } else {
        if (respone.type === "success") {
          respone.value.forEach(joke => {
            output += `<li>${joke.joke}</li>`;
          });
        } else {
          output += `<li>Something went Wrong</li>`;
        }
        numberInput.value = "";
        document.querySelector(".jokes").innerHTML = output;
        numberInput.focus();
      }
    }
  };

  xhr.send();
}
