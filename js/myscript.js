function bestpack() {
    document.getElementById("konten").innerHTML = '<div class="ratio" style="--bs-aspect-ratio: 300%;"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdnFbQkifXrnRKuHdyI2yRY6JiiV8qyrKQjiufsuPBOvNqooA/viewform?embedded=true" width="640" height="3739" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>'
}

function powerpack() {
    document.getElementById("konten").innerHTML = '<div class="ratio" style="--bs-aspect-ratio: 300%;"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSck3oHzqQvuBHo3Gusrr4sME6oiY0tHSlugV1_eRQPluZmZtw/viewform?embedded=true" width="640" height="3991" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>'
}

function jadwal_pmt(f) {
    fetch(f)
        .then(Response => Response.text())
        .then(data => { document.getElementById('konten').innerHTML = data; })
}