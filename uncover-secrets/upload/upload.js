var fileObj = {};

var imgElem = document.querySelector(".images");
var fileElem = document.createElement('input');
fileElem.type = 'file';

imgElem.addEventListener('click', function() {
  fileElem.click();
});

fileElem.addEventListener('change', function() {
  startProgress();
  var file = this.files[0];
  imgElem.innerHTML = '<img src="' + window.URL.createObjectURL(file) + '" />';

  btnSave.disabled = true;

  var img = document.createElement("img");
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  img.src = window.URL.createObjectURL(file);
  img.onload = function() {
    var MAX_WIDTH = 800;
    var MAX_HEIGHT = 600;
    var width = img.width;
    var height = img.height;

    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
    } else {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
    }
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);
    canvas.toBlob(function(blob) {
      var form = new FormData()
      form.append('file', blob);
      fetch('/api/upload', {method: 'POST', body: form })
        .then(function(rsp) {return rsp.json()})
        .then(function(rsp) {
          fileObj = rsp;
          stopProgress();
          btnSave.disabled = false;
        })
        .catch(function(rsp) {
          console.log(rsp);
          stopProgress();
          btnSave.disabled = false;
        })
    })
  }
});
