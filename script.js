function square() {
    const a = parseFloat(document.getElementById('inputA').value);
    const b = parseFloat(document.getElementById('inputB').value);
    const c = parseFloat(document.getElementById('inputC').value);
    const resultDiv = document.getElementById('quadResult');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultDiv.innerHTML = '<span class="text-danger">Введите корректные числа</span>';
        return;
    }

    if (a === 0) {
        resultDiv.innerHTML = '<span class="text-danger">Коэффициент A не может быть равен 0</span>';
        return;
    }

    const d = b * b - 4 * a * c;

    if (d < 0) {
        resultDiv.innerHTML = 'Корней нет. D &lt; 0';
    } else if (d === 0) {
        const x = -b / (2 * a);
        resultDiv.innerHTML = `Один корень.<br>D = 0<br>x = ${x.toFixed(2)}`;
    } else {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        resultDiv.innerHTML = `Два корня.<br>D = ${d}<br>x₁ = ${x1.toFixed(2)}<br>x₂ = ${x2.toFixed(2)}`;
    }
}

function calculate() {
    const initial = parseFloat(document.getElementById('depAmount').value) || 0;
    const years = parseFloat(document.getElementById('depTerm').value) || 0;
    const rate = parseFloat(document.getElementById('depRate').value) || 0;

    const interest = rate / 100;
    const result = Math.round(initial * (1 + interest) ** years);

    document.getElementById('oldAmountText').textContent = initial;
    document.getElementById('newAmountText').textContent = result;

    const barOld = document.getElementById('barOld');
    const barNew = document.getElementById('barNew');

    if (result > 0) {
        const oldPercent = (initial / result) * 100;
        barOld.style.height = `${oldPercent}%`;
        barNew.style.height = `100%`;
    } else {
        barOld.style.height = `0%`;
        barNew.style.height = `0%`;
    }
}

calculate();