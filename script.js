var sel = document.querySelector('select');

sel.addEventListener('change', function(e) {
    var stars = '';
    for (var i = 0; i < e.target.value; i++) {
        stars += `<i class="ri-star-line"></i>`;
    }
    document.querySelector('.icons').innerHTML = stars;
});
