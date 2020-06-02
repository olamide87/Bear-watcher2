import utils from "../helpers/utils.js";
import bearData from "../helpers/data/bearData.js";
import river from "../Components/river.js";




const bearBuilder = () => {
  let domString = '';

  domString += '<form class="col-6 mx-auto text-center" id="bearForm" >'
  domString += '<div class="form-group">';
  domString += '<label class="text-center" for="">Bear Name</label>';
  domString += '<input type="" class="form-control" id="name" aria-describedby="emailHelp">';

  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label class="" for="image">Image Url</label>';
  domString += '<input type="" class="form-control" id="imageUrl">';
  domString += '</div>';
  domString += '<button id="submit-btn" type="submit" class="btn btn-primary">Submit</button>';
  domString += '</form>';
    utils.printToDom('bear-form', domString)
    eventListener();
};

const addBear = (e) => {
  e.preventDefault();
  const bears = bearData.getBears
  const bearId = `bears${bears.length + 1}`
  const bearName = document .getElementById('name').value
  const bearImage = document.getElementById('imageUrl').value
  bearData.setSelectedBears({name:bearName, imageUrl:bearImage, id:bearId});
  river.riverBuilder();

};

const eventListener = () => {
  document.getElementById('submit-btn').addEventListener('click',addBear);
}

export default { bearBuilder, eventListener }
