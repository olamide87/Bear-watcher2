import utils from "../helpers/utils.js";
import bearData from "../helpers/data/bearData.js";


const riverBuilder = () => {
    const allBears = bearData.getBears();

    let domString = '';
    allBears.forEach((bears) => {
      domString += '<div class="card m-5 col-3" style="width: 18rem;">';
      domString += `<img src= "${bears.imageUrl}" class="card-img-top" alt="...">`;
      domString += '<div class="card-body">';
      domString += `<p class="card-text text-center">"${bears.name}".</p>`;
      domString += `<button class="btn btn-danger catch-fish-button" id="${bears.id}">Catch Fish</button>`
      domString += '</div>';
      domString += '</div>';
    });
    utils.printToDom('river', domString)

    }

    export default { riverBuilder };
