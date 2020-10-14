function pick() {
    fetch('pepsis.json')
        .then(response => response.json())
        .then(result => {
            console.log(result.Pepsis)

            const soda = result.Pepsis[Math.floor(Math.random() * result.Pepsis.length)];

            console.log(soda.name)



            result.Pepsis.forEach(Pepsi => {
                if (Pepsi.name === soda.name) {

                } else {

                }

            });

        })

}

let pickapepsi = document.querySelector(".pick_a_pepsi")

pickapepsi.addEventListener('click', pick)

