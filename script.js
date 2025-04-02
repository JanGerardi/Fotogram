let photoalbum = [
    { src: "img/brandenburgerTor.jpg", title: "Brandenburger Tor" },
    { src: "img/eiffel.jpg", title: "Eiffelturm" },
    { src: "img/forbiddenCity.jpg", title: "Verbotene Stadt" },
    { src: "img/greatWallOfChina.jpg", title: "Große Mauer von China" },
    { src: "img/mountRushmore.jpg", title: "Mount Rushmore" },
    { src: "img/neuschwanstein.jpg", title: "Schloss Neuschwanstein" },
    { src: "img/operaHouse.jpg", title: "Sydney Opera House" },
    { src: "img/shanghaiTower.jpg", title: "Shanghai Tower" },
    { src: "img/shwezigonPagoda.jpg", title: "Shwezigon Pagode" },
    { src: "img/statue.jpg", title: "Unbekannte Statue" },
    { src: "img/statueOfLiberty.jpg", title: "Freiheitsstatue" },
    { src: "img/waterfall.jpg", title: "Wasserfall" }
]

let currentIndex = 0;

function render(){
    let contentRef = document.getElementById("photoalbum");
    contentRef.innerHTML = "";
    for (let i = 0; i < photoalbum.length; i++) {
        contentRef.innerHTML += `<div class="photos">
                                    <img src="${photoalbum[i].src}" onclick="toggleOverlay(${i})" class="photo">
                                </div>`;
    }
}

function toggleOverlay(index){
    currentIndex = index;
    updateOverlay();
    document.getElementById("overlay").classList.remove("d_none");
}

function closeOverlay() {
    document.getElementById("overlay").classList.add("d_none");
}

function BubblingProtection(event){
    event.stopPropagation()
}

function nextImage() {
    currentIndex = (currentIndex + 1) % photoalbum.length;
    updateOverlay();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + photoalbum.length) % photoalbum.length;
    updateOverlay();
}

function updateOverlay(){
    let overlayRef = document.getElementById("overlay");
    overlayRef.innerHTML = 
        `<div onclick="BubblingProtection(event)" id="overlayContent">
            <div class="overlayTop">
                <h2 class="font imageTitle">${photoalbum[currentIndex].title}</h2>
                <button class="btn-close" onclick="closeOverlay()">&#10005;</button>
            </div>
            <img src="${photoalbum[currentIndex].src}" class="overlayImage">
            <div class="overlayBottom">
                <button class="btn-image" onclick="prevImage()">🡰</button>
                <span class="font imageOf">${currentIndex + 1} / ${photoalbum.length}</span>
                <button class="btn-image" onclick="nextImage()">🡲</button>
            </div>
        </div>`;
}