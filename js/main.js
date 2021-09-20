var rangeTl = document.getElementById('tlr'),
    rangeTr = document.getElementById('trr'),
    rangeBl = document.getElementById('blr'),
    rangeBr = document.getElementById('brr');

var resultTl = document.getElementById('result-tlr'),
    resultTr = document.getElementById('result-trr'),
    resultBl = document.getElementById('result-blr'),
    resultBr = document.getElementById('result-brr');

var inputs = document.querySelectorAll('.input'),
    cube = document.getElementById('cube');

var btn = document.getElementById('btn'),
    result = document.getElementById('result');

function createsAString() {
    return rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBr.value + 'px ' + rangeBl.value + 'px'
};

function changeRadius() {
    resultTl.innerHTML = rangeTl.value;
    resultTr.innerHTML = rangeTr.value;
    resultBl.innerHTML = rangeBl.value;
    resultBr.innerHTML = rangeBr.value;

    cube.style.borderRadius = createsAString()
};

for (node of inputs) {
    node.addEventListener('input', changeRadius)
};

function totalResult() {
    result.innerHTML = 'border-radius: ' + createsAString()
};

btn.addEventListener('click', totalResult);