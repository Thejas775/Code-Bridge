var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
function signup(event) {
    event.preventDefault();

    var isConfirmed = confirm("This is a prototype website. Do you want to continue to the courses page?");
    
    if (isConfirmed) {
        window.location.href = "courses.html";
    }
}
function coming(){
    alert("Coming Soon")
}




document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('codelabButton');
    const listItems = document.querySelectorAll('.left-section ul li');

    listItems.forEach(function (listItem) {
        listItem.addEventListener('click', function () {
            const listItemText = listItem.textContent.trim();
            const codelabName = listItemText.replace(/\s/g, ''); // Remove spaces
            const codelabLink = `codelab${codelabName}.html`;

            button.textContent = `Take the codelab ${listItemText}`;
            button.setAttribute('onclick', `window.location.href='${codelabLink}'`);
        });
    });
});