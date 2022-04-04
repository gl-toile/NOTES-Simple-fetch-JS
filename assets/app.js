import retrieveContent from './query.js';

/**
 * Requête HTTP simple, avec fetch 
 */
 async function askForGreetings(str) {
        var url = "https://mockbin.com/request?greetings=" + str;
    
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
                document.getElementById("result").innerHTML = "RETOUR : " + json.queryString.greetings;
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    var form = document.getElementById("my-form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        askForGreetings(document.getElementById("source").value);
    });
    
    console.log(document.getElementById("source").value);

    async function showContent() {
        try {
          const content = await retrieveContent();
      
          let elt = document.createElement('div');
          elt.innerHTML = content.join('<br />');
      
          document.getElementsByTagName('body')[0].appendChild(elt);
        } catch (e) {
          console.log('Error', e);
        }
      }
      
      showContent();