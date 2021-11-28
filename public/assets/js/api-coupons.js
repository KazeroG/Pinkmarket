var type = "Coupons"
var api_key = "?api_key=keyNDM4WhNKOapUN7"
var maxRecords = "&maxRecords=10"
var filterByFormula = "&filterByFormula=%7Bvip_ou_50%7D%3D%2250%222"
var offset = [];

var url = "https://api.airtable.com/v0/appk3OIY3chtMfqK3/" + type + api_key + offset + "&sort%5B0%5D%5Bfield%5D=coupons_id";

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
            records_length.innerHTML = 'Liste de coupons <br> <a href="" class="button-2 left-aligned w-button"><span class="text-span-2">Ouvrir la Map</span></a>'

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

        const offset_page = document.createElement('a');
        offset_page.setAttribute('class', 'button-2 left-aligned w-button')
        offset_page.setAttribute('id', 'next')
        offset_page.setAttribute('href', data.offset)
        offset_page.innerHTML = "Page Suivante"

        card.appendChild(offset_page);

        document.getElementById("nextPageBtn").addEventListener('click', function () {
            console.log(offset.toString());
            //clear array before setting new item
            offset = [];
            offset.push(data.offset);
            console.log(offset.toString());
        })
    } else {
        const errorMessage = document.createElement('a')
        errorMessage.textContent = `Bah, ça ne marche pas !`
        app.appendChild(errorMessage)
    }
}

catchJson()
