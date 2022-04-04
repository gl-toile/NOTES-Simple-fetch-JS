/**
 * Requête HTTP simple, avec fetch 
 */
function askForGreetings(str) {
    url = "https://mockbin.com/request?greetings=" + str;

    /**
     * Fetch retourne une promesse qui est résolue dès que la réponse est disponible. 
     * La promesse résoud l'objet Response représentant la réponse de votre requête.
     */
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(json => {
            console.log(json);
            document.getElementById("result").innerHTML = json.queryString.greetings;
        })
        .catch(error => {
            console.log(error);
        });
}

form = document.getElementById("my-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    askForGreetings(document.getElementById("source").value);
});

console.log(document.getElementById("source").value);