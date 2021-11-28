var type = "Coupons"
var api_key = "?api_key=keyNDM4WhNKOapUN7"
var perPage = "&pagesize=2000"
var maxRecords = "&maxRecords=2000"
var filterByFormula = "&filterByFormula=%7Bvip_ou_50%7D%3D%2250%22"
var offset = "&offset"

var url = "https://api.airtable.com/v0/appk3OIY3chtMfqK3/" + type + api_key + filterByFormula + perPage + maxRecords + offset + "'";
const app = document.getElementById('root')

const card = document.createElement('div');
card.setAttribute('class', 'rightcontainer w-container')

app.appendChild(card)

async function catchJson() {
    const response = await fetch(url);
    const data = await response.json();

    if (response.status >= 200 && response.status < 400) {
        data.records.forEach(records => {

            const records_length = document.getElementById('number')
            records_length.innerHTML = 'Liste de coupons 50% <br> <h1> Il y a ' + data.records.length + ' coupons </h1> <a href="" class="button-2 left-aligned w-button"><span class="text-span-2">Ouvrir la Map</span></a>'

            const property_card = document.createElement('a')
            property_card.setAttribute('class', 'property-card left w-inline-block w-clearfix')
            property_card.setAttribute('href', 'coupons/single')
            property_card.style.background = "-webkit-gradient(linear, left top, left bottom, color-stop(29%, hsla(0, 0%, 100%, 0)), color-stop(68%, rgba(0, 0, 0, 0.5))), url('" + records.fields.image_url + "');";
            property_card.style.background = "linear - gradient(180deg, hsla(0, 0 %, 100 %, 0) 29 %, rgba(0, 0, 0, 0.5) 68 %), url('" + records.fields.image_url + "');"

            const image_quantity_div = document.createElement('div')
            image_quantity_div.setAttribute('class', 'image-quantity-div')

            const price_text = document.createElement('h1')
            price_text.setAttribute('class', 'price-text')
            price_text.innerText = records.fields.titre

            const div_lower_info = document.createElement('div')
            div_lower_info.setAttribute('class', 'div-lower-info w-clearfix')

            const info_text = document.createElement('div')
            info_text.setAttribute('class', 'info-text')
            info_text.innerText = records.fields.compagny_name + ' - ' + records.fields.description_sub.substring(0, 100) + '...'

            const view_button = document.createElement('div')
            view_button.setAttribute('class', 'view-button')
            view_button.textContent = 'Plus'

            root.appendChild(card);

            card.appendChild(property_card);

            property_card.appendChild(image_quantity_div);

            property_card.appendChild(price_text);

            div_lower_info.appendChild(info_text);
            div_lower_info.appendChild(view_button);

            property_card.appendChild(div_lower_info);
        })
    } else {
        const errorMessage = document.createElement('a')
        errorMessage.textContent = `Bah, ça ne marche pas !`
        app.appendChild(errorMessage)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    catchJson()
});