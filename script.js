const startDate = new Date('2024-10-31'); // today, 2 seasons already done
const endDate = new Date('2027-05-31');
const completedRupees = 32700000; // 2 seasons already wasted
const remainingRupees = 16350000; // 3rd season still to tick

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
    const totalMs = endDate - startDate;
    const perSecond = remainingRupees / (totalMs / 1000);
    const wasted = completedRupees + (elapsedMs / 1000) * perSecond;

    document.getElementById('money').textContent = '₹' + Math.floor(wasted).toLocaleString('en-IN');

    // Elapsed since IPL 2025 started
    const elapsedSinceBeginning = now - new Date('2025-03-22');
    const el = getComponents(elapsedSinceBeginning);
    document.getElementById('el-y').textContent = el.y;
    document.getElementById('el-mo').textContent = el.mo;
    document.getElementById('el-d').textContent = el.d;
    document.getElementById('el-h').textContent = el.h;
    document.getElementById('el-m').textContent = el.m;
    document.getElementById('el-s').textContent = el.s;

    // Remaining until contract ends
    const remainingMs = endDate - now;
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
