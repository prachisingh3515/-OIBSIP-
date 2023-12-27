const calcTemp = () => {
    const inputT = document.getElementById('temp').value;

    const tempSelect = document.getElementById('temp_diff');
    const valueT = temp_diff.options[tempSelect.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueT == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputT) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputT) + "&#176; Celsius";
    }
}
