function createChart() {
    let chart = Array.from(document.getElementsByClassName('histogram__chart-column'));
    chart = chart.map(val => val.style.height = `${Math.trunc(Math.random() * 80) + 20}%`);
    // chart = chart.map(val => val.style.width = `50px`);
}
createChart();
setInterval(createChart, 750);

 // let str = '';
    // for (let i = 1; i < 32; i++) {
    //     str += `<xmp><div class="calendar__date-item">${i}</div></xmp>\n`;
    //     // document.getElementById('gg').innerHTML+=
    // }
    // alert(str);
    //document.getElementById('gg').innerHTML = str;