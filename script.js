// selecciona el comtenedor (carta) donde se monta la vacante
const sliderContainer = document.getElementById('vacancies-slider');

// procesa el json
async function loadVacancies() {
    try {
        // busca el archivo json
        const file = await fetch('vacancies.json'); 
        
        // convierte el archivo en texto plano
        const text = await file.json(); 
        
        // recorre los datos y genera el codigo html
        text.forEach(vacancy => {
            const card = document.createElement('div');
            card.classList.add('vertical-slider');
            
            card.innerHTML = `
                <div class="vacancy-content">
                    <img src=${vacancy.image}></img>
                    
                    <div class="vacancy-info">
                        <h3 class="endLine">${vacancy.company_name}</h3>
                        <p class="endLine"><i>Direccion:</i> ${vacancy.location}</p>
                        <p><i>Vacante:</i> ${vacancy.vacancy}</p>
                        <p class="endLine"><i>Descripcion:</i> ${vacancy.description}</p>
                        <p class="endLine"><i>Horario:</i> ${vacancy.schedule}</p>
                        <p><i>Salario:</i> ${vacancy.salary}</p>
                        <div class="whatsapp-contact">
                        <img class="whatsapp-icon" src="icons/whatsapp_logo.svg">
                        <button class="whatsapp-button" onclick="window.open('https://wa.me/${vacancy.phone}', '_blank')"><i>Contacto: ${vacancy.phone}</i></button>
                        </div>
                    </div>
                </div>
            `;
            
            sliderContainer.appendChild(card);
        });
        
    } catch (error) {
        // muestra un mensaje en consola si el archivo no se encuentra o está mal escrito
        console.error('Error al cargar el archivo de vacantes:', error);
    }
}

// ejecutar la función inmediatamente al cargar la página
loadVacancies();
