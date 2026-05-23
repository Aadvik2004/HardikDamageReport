const startDate = new Date('2024-10-31');
const endDate = new Date('2027-10-31');
const totalRupees = 49050000;

function getComponents(ms) {
    let s = Math.floor(ms / 1000);
    let m = Math.floor(s / 60); s = s % 60;
    let h = Math.floor(m / 60); m = m % 60;
    let d = Math.floor(h / 24); h = h % 24;
    let mo = Math.floor(d / 30.44); d = Math.floor(d % 30.44);
    let y = Math.floor(mo / 12); mo = mo % 12;
    return { y, mo, d, h, m, s };
}

function update() {
    const now = new Date();

    const elapsedMs = now - startDate;
    const remainingMs = endDate - now;
    const totalSeconds = (endDate - startDate) / 1000;
    const perSecond = totalRupees / totalSeconds;
    const wasted = (elapsedMs / 1000) * perSecond;

    document.getElementById('money').textContent = '₹' + Math.floor(wasted).toLocaleString('en-IN');

    const el = getComponents(elapsedMs);
    document.getElementById('el-y').textContent = el.y;
    document.getElementById('el-mo').textContent = el.mo;
    document.getElementById('el-d').textContent = el.d;
    document.getElementById('el-h').textContent = el.h;
    document.getElementById('el-m').textContent = el.m;
    document.getElementById('el-s').textContent = el.s;

    const re = getComponents(remainingMs);
    document.getElementById('re-y').textContent = re.y;
    document.getElementById('re-mo').textContent = re.mo;
    document.getElementById('re-d').textContent = re.d;
    document.getElementById('re-h').textContent = re.h;
    document.getElementById('re-m').textContent = re.m;
    document.getElementById('re-s').textContent = re.s;
}

setInterval(update, 1000);
update();