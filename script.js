// ===== UPDATE WAKTU ANALISIS (WITA) =====
function updateTime() {
    const now = new Date();

    const options = {
        weekday: 'long',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Makassar'
    };

    let formatted = now.toLocaleString('id-ID', options);
    formatted = formatted.replace(',', ' -') + " WITA";

    document.getElementById("analysisTime").innerText = formatted;
}

updateTime();
setInterval(updateTime, 60000);


// ===== SUARA ANALYSIS COMPLETE =====
function speakComplete() {
    const message = new SpeechSynthesisUtterance("Analysis Berhasil");
    message.rate = 1;
    message.pitch = 1;
    message.volume = 1;
    speechSynthesis.speak(message);
}


// ===== FUNCTION ANALYTIC =====
function analyze() {

    let high = parseFloat(document.getElementById("high").value);
    let low = parseFloat(document.getElementById("low").value);
    let close = parseFloat(document.getElementById("close").value);

    if (isNaN(high) || isNaN(low) || isNaN(close)) {
        alert("Isi semua input dulu bro.");
        return;
    }

    let resultBox = document.getElementById("result");
    resultBox.classList.remove("show");
    resultBox.style.display = "none";

    document.getElementById("loading").style.display = "block";

    setTimeout(() => {

        let pp = (high + low + close) / 3;
        let r1 = (2 * pp) - low;
        let s1 = (2 * pp) - high;

        document.getElementById("pp").innerText = pp.toFixed(2);
        document.getElementById("r1").innerText = r1.toFixed(2);
        document.getElementById("s1").innerText = s1.toFixed(2);

        document.getElementById("loading").style.display = "none";

        resultBox.style.display = "block";

        setTimeout(() => {
            resultBox.classList.add("show");
            speakComplete();
        }, 50);

    }, 2000);
}