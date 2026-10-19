(() => {
  if (document.getElementById("et-loader")) {
    return;
  }

  const SPEED = 10;
  const MAX_WAIT_MS = 4000;
  const style = document.createElement("style");
  style.textContent = `
    #et-loader{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:#fff;transition:opacity .3s ease}
    #et-loader.et-hide{opacity:0;pointer-events:none}
    #et-loader canvas,#et-loader video,#et-loader img{width:min(80vw,520px);height:auto;display:block}
    #et-loader video{position:absolute;opacity:0;pointer-events:none}
    #et-loader video.et-raw{position:static;opacity:1;mix-blend-mode:multiply}
    #et-loader img{display:none}
    #et-loader.et-fallback img{display:block}
    #et-loader.et-fallback canvas,#et-loader.et-fallback video{display:none}
    html.et-loading,html.et-loading body{overflow:hidden}
  `;

  const loader = document.createElement("div");
  loader.id = "et-loader";
  loader.setAttribute("role", "status");
  loader.setAttribute("aria-label", "Seite wird geladen");
  loader.innerHTML = `
    <canvas width="640" height="360"></canvas>
    <video muted playsinline preload="auto" src="/assets/loading.mp4"></video>
    <img src="/assets/EasyTech%20Logo.png" alt="EasyTech IT-Solutions" />`;

  const root = document.documentElement;
  root.classList.add("et-loading");
  document.head.appendChild(style);
  root.appendChild(loader);

  const video = loader.querySelector("video");
  const canvas = loader.querySelector("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });
  let videoDone = false;
  let pageLoaded = document.readyState === "complete";
  let closed = false;
  let keyingFailed = false;

  function close() {
    if (closed) {
      return;
    }

    closed = true;
    loader.classList.add("et-hide");
    root.classList.remove("et-loading");
    video.pause();
    setTimeout(() => {
      loader.remove();
      style.remove();
    }, 400);
  }

  function maybeClose() {
    if (videoDone && pageLoaded) {
      close();
    }
  }

  // Makes the light video background transparent while keeping the dark and cyan logo colors.
  function drawKeyedFrame() {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const frame = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = frame.data;

    for (let index = 0; index < data.length; index += 4) {
      const lowest = Math.min(data[index], data[index + 1], data[index + 2]);
      const alpha = Math.max(0, Math.min(1, (215 - lowest) / 60));
      data[index + 3] = Math.round(alpha * 255);
    }

    context.putImageData(frame, 0, 0);
  }

  function renderLoop() {
    if (closed || videoDone) {
      return;
    }

    if (!keyingFailed) {
      try {
        drawKeyedFrame();
      } catch (error) {
        keyingFailed = true;
        video.classList.add("et-raw");
        canvas.style.display = "none";
      }
    }

    requestAnimationFrame(renderLoop);
  }

  video.addEventListener("loadedmetadata", () => {
    video.playbackRate = SPEED;
  });
  video.addEventListener("playing", () => {
    video.playbackRate = SPEED;
    requestAnimationFrame(renderLoop);
  });
  video.addEventListener("ended", () => {
    videoDone = true;
    maybeClose();
  });
  video.addEventListener("error", () => {
    loader.classList.add("et-fallback");
    videoDone = true;
    setTimeout(maybeClose, 600);
  });

  const playAttempt = video.play();
  if (playAttempt && typeof playAttempt.catch === "function") {
    playAttempt.catch(() => {
      loader.classList.add("et-fallback");
      videoDone = true;
      setTimeout(maybeClose, 600);
    });
  }

  if (!pageLoaded) {
    window.addEventListener("load", () => {
      pageLoaded = true;
      maybeClose();
    });
  }

  setTimeout(close, MAX_WAIT_MS);
})();
