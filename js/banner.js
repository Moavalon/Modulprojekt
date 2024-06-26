window.onload = function () {
    var randomBanner = Math.floor(Math.random() * 12) + 1;
    var randomBanner2 = Math.floor(Math.random() * 12) + 1;
    banner.innerHTML = `<img src="../bilder/banner/Banner${randomBanner}.png" alt="Banner der Seitenleiste" style="height:80vh;" class="img-fluid">`;
    banner2.innerHTML = `<img src="../bilder/banner/Banner${randomBanner2}.png" alt="Banner der Seitenleiste" style="height:80vh;" class="img-fluid">`;
}
