export function getOverlay() {
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  const closebtn = document.createElement("div");
  closebtn.className = "close-btn";
  closebtn.innerHTML = "<div>X</div>";

  return { overlay, closebtn };
}

export function removeOverlay() {
  const overlay = document.querySelector(".overlay");
  const btn = document.querySelector(".close-btn");
  const modal = document.querySelector(".unicorn-modal");

  document.body.removeChild(overlay);
  document.body.removeChild(btn);
  document.body.removeChild(modal);
}
