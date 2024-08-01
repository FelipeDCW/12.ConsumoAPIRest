let id = prompt("Ingresa un ID: ")
$.ajax({
    type: "GET",
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
    /* data: "data", */
    dataType: "json",
    success: function (response) {
        console.log(response)
        console.log(response.address.geo.lat)

        let iduno = document.querySelector(`#iduno`)
        let iddos = document.querySelector(`#iddos`)
        let idtres = document.querySelector(`#idtres`)
        let idcuatro = document.querySelector(`#idcuatro`)

        iduno.innerHTML=response.id
        iddos.innerHTML=response.name
        idtres.innerHTML=response.username
        idcuatro.innerHTML=response.email

    }
});
