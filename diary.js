function diary(){
    let date = prompt("Bir tarih giriniz.");
    let activity = prompt("Yaptığınız aktiviteyi giriniz.");

    if(date && activity) {
        let daily = JSON.parse(localStorage.getItem("daily")) || [];
        daily.push({date, activity});
        localStorage.setItem("daily", JSON.stringify(daily));
    }

    let daily = JSON.parse(localStorage.getItem("daily")) || [];

    if(daily.length > 0) {
        let msg = daily.map(task => `Tarih: ${task.date} Aktivite: ${task.activity}`).join("\n");
        alert(msg);
    }

}

diary();