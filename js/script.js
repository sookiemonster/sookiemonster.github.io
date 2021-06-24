function moveReflections() {
  var waveRect = document.getElementById("silhouette").getBoundingClientRect();
  var reflect = document.getElementsByClassName("reflect-clip-1")[0];
  reflect.style.marginTop = (waveRect.top) + 20 + "px";
}
