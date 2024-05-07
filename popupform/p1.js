document.getElementById("btn").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});

var b = document.querySelector(".input");
b.addEventListener("change", function (e) {
  const file = e.target.files[0];

  if (!file) {
    alert("No file supported or please connect with admin");

    return;
  }
  
  const reader = new FileReader();
  reader.onload = function (e) {
    const imageDataUrl = e.target.result;
    console.log(e.target)
    console.log(imageDataUrl, e.target);
    const imgTag = document.querySelector(".img1");
    imgTag.src = imageDataUrl;
  };
  reader.readAsDataURL(file);
});

