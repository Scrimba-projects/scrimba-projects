const colorPicker = document.getElementById('color-picker');
const ddColorScheme = document.getElementById('dd-color-scheme');
const btnGetColorScheme = document.getElementById('btn-get-color-scheme');
const divColorArea = document.getElementById('color-area');

btnGetColorScheme.addEventListener('click', getColorScheme);

function getColorScheme() {
    let colorHex = colorPicker.value.replace('#', '');
    let colorScheme = ddColorScheme.value;
    let colorHtml = ''

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&format=json&mode=${colorScheme}&count=5`)
        .then(res => res.json())
        .then(data => {
            for (let color of data["colors"]) {
                colorHtml += `
                    <div class="clr-div">
                        <div class="clr-color" style="background: ${color.hex.value}"></div>
                        <div class="clr-hex">${color.hex.value}</div>
                    </div>
                `;
            }
            divColorArea.innerHTML = colorHtml;
        })
}

getColorScheme();