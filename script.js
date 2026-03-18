const start = Date.now();
const uptime = document.getElementById("uptime");

function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `uptime ${hours}:${minutes}:${seconds}`;
}

function tick() {
  uptime.textContent = formatDuration(Date.now() - start);
}

tick();
setInterval(tick, 1000);
