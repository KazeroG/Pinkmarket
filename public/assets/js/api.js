var url = "https://api.airtable.com/v0/appk3OIY3chtMfqK3/Coupons?api_key=keyNDM4WhNKOapUN7";

const app = document.getElementById('root')

const card = document.createElement('div');
card.setAttribute('class', 'card')

app.appendChild(card)

async function catchJson() {

    const response = await fetch(url);
    const data = await response.json();

    if (response.status >= 200 && response.status < 400) {
        data.records.forEach(records => {

            const user_id_p = document.createElement('p')
            user_id_p.textContent = records.fields.user_id

            const username_h3 = document.createElement('h3')
            username_h3.textContent = "Nom de l'utilisateur:"
            const username_p = document.createElement('p')
            username_p.textContent = records.fields.username

            const company_id_h3 = document.createElement('h3')
            company_id_h3.textContent = "Entreprise id:"
            const company_id_p = document.createElement('p')
            company_id_p.textContent = records.fields.company_id

            const categorie_id_h3 = document.createElement('h3')
            categorie_id_h3.textContent = "Categorie-id:"
            const categorie_id_p = document.createElement('p')
            categorie_id_p.textContent = records.fields.categorie_id

            const titre_h3 = document.createElement('h3')
            titre_h3.textContent = "titre:"
            const titre_p = document.createElement('p')
            titre_p.textContent = records.fields.titre

            const description_h3 = document.createElement('h3')
            description_h3.textContent = "description:"
            const description_p = document.createElement('p')
            description_p.description = records.fields.description.substring(0, 300)
            description_p.textContent = `${records.fields.description}...`

            root.appendChild(card)
            card.appendChild(user_id_p)
            card.appendChild(username_h3)
            card.appendChild(username_p)
            card.appendChild(company_id_h3)
            card.appendChild(company_id_p)
            card.appendChild(categorie_id_h3)
            card.appendChild(categorie_id_p)
            card.appendChild(titre_h3)
            card.appendChild(titre_p)
            card.appendChild(description_h3)
            card.appendChild(description_p)
        })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
}

catchJson();