import bearForm from "./Components/bearForm.js";
import riverBuilder  from "./components/river.js"
import utils from "./helpers/utils.js";


const catchFish = (e) => {
  alert(`${e.target.id} tried to catch a fish!`)
  
};

const init = () => {

  bearForm.bearBuilder();
  riverBuilder.riverBuilder();
  $('body').on('click', '.catch-fish-button', catchFish);
    
  };
  
  init();
