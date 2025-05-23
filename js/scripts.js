fetch('./js/data.json') // Ruta a tu archivo JSON
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON: ' + response.statusText);
        }
        return response.json(); // Parsea la respuesta como JSON
    })
    .then(data => {
        console.log(data);

        const platosDiv = document.querySelector('.platosDiv');
        const platosImg = document.querySelector('.content-img-platos');
        data.forEach(plato => {
            const platoRender = document.createRange().createContextualFragment(
                `
            <div class="${plato.clase}">
              <button type="button" data-id="${plato.id}" onclick="filtroImgPlato(${plato.id})">${plato.nombrePlato}</button>
            </div>
            `
            )
            platosDiv.append(platoRender);

            if (plato.id == 1) {
                const activoBtn = document.querySelector('button[data-id="1"]')
                const platoRender = document.createRange().createContextualFragment(
                    `
                        <div class="plato-img">
                            <img src="${plato.img1}">
                        </div>
                        <div class="plato-img">
                            <img src="${plato.img2}">
                        </div>
                        <div class="plato-img">
                            <img src="${plato.img3}">
                        </div>
                        `
                )
                platosImg.append(platoRender);
                activoBtn.classList.add("activeBtn");
            }
        });
    })
    .catch(error => {
        console.error('Hubo un problema con la operación fetch:', error);
    });

function filtroImgPlato(event) {
    fetch('./js/data.json') // Ruta a tu archivo JSON
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON: ' + response.statusText);
            }
            return response.json(); // Parsea la respuesta como JSON
        })
        .then(data => {
            const platosImg = document.querySelector('.content-img-platos');
            data.forEach(plato => {
                let activoBtn = document.querySelector(`button[data-id="${plato.id}"]`)
                activoBtn.classList.remove("activeBtn");
                if (plato.id == event) {
                    platosImg.innerHTML = ""
                    const platoRender = document.createRange().createContextualFragment(
                        `
                        <div class="plato-img">
                            <img src="${plato.img1}">
                        </div>
                        <div class="plato-img">
                            <img src="${plato.img2}">
                        </div>
                        <div class="plato-img">
                            <img src="${plato.img3}">
                        </div>
                        `
                    )
                    platosImg.append(platoRender);
                    activoBtn.classList.add("activeBtn");
                }
            });
        })
        .catch(error => {
            console.error('Hubo un problema con la operación fetch:', error);
        });
}