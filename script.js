function upDate(previewPic) {
  console.log("upDate:", previewPic.alt);
  var box = document.getElementById("image");
  var link = previewPic.getAttribute("src");
  box.style.backgroundImage = "url('" + link + "')";
  box.innerHTML = '<span class="cap">' + previewPic.alt + "</span>";
}

function unDo() {
  console.log("unDo");
  var box = document.getElementById("image");
  box.style.backgroundImage = "none";
  box.innerHTML = "Chọn một bức ảnh bên dưới";
}

function addTabFocus() {
  console.log("onload đã kích hoạt: addTabFocus chạy");
  var images = document.querySelectorAll(".gallery img");
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("Đã thêm tabindex cho ảnh " + (i + 1));
  }
}

window.onload = addTabFocus;

// Dòng sửa lỗi cho CodePen: cho HTML gọi được các hàm
window.upDate = upDate;
window.unDo = unDo;
