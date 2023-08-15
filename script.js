const images = document.querySelectorAll("img");
const wrapper = document.getElementById("wrapper");
const imgWrapper = document.getElementById("fullImg");
const close = document.querySelector("span");


images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(`images/waterfall-${index}.jpg`);
  });
})

close.addEventListener("click", () => wrapper.style.display = "none");


function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}