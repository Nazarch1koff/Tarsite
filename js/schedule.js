const clock = document.getElementById("clock");
const title = document.getElementById("title");
const timer = document.getElementById("timer");
const statusText = document.getElementById("status");
const progressBar = document.getElementById("progressBar");
const cat = document.querySelector(".cat");

function updateClock() {

    const now = new Date();

    clock.innerHTML =
        "🕒 " + now.toLocaleTimeString("ru-RU");

}

function nextWorkday() {

    let d = new Date();

    do {

        d.setDate(d.getDate() + 1);

    } while (d.getDay() === 0 || d.getDay() === 6);

    d.setHours(9, 0, 0, 0);

    return d;

}

function monday() {

    let d = new Date();

    do {

        d.setDate(d.getDate() + 1);

    } while (d.getDay() !== 1);

    d.setHours(9, 0, 0, 0);

    return d;

}

function format(time) {

    const h = Math.floor(time / 1000 / 60 / 60);

    const m = Math.floor(time / 1000 / 60) % 60;

    const s = Math.floor(time / 1000) % 60;

    return (
        String(h).padStart(2, "0") + ":" +
        String(m).padStart(2, "0") + ":" +
        String(s).padStart(2, "0")
    );

}

function updateTimer() {

    const now = new Date();

    const day = now.getDay();

    let target;
    let percent = 0;

    if (day === 0 || day === 6) {

        document.body.className = "green";

        target = monday();

        title.innerHTML = "🏖️ Выходной";

        statusText.innerHTML = "Отдыхай 🙂";

        progressBar.style.width = "100%";

    }

    else {

        const start = new Date(now);

        start.setHours(9,0,0,0);

        const lunch = new Date(now);

        lunch.setHours(13,0,0,0);

        const lunchEnd = new Date(now);

        lunchEnd.setHours(14,0,0,0);

        const end = new Date(now);

        end.setHours(18,0,0,0);

        if(now < start){

            target = start;

            title.innerHTML = "🌅 До начала рабочего дня";

            statusText.innerHTML = "Можно ещё отдыхать";

            document.body.className = "green";

            progressBar.style.width = "0%";

        }

        else if(now < lunch){

            target = lunch;

            title.innerHTML = "⏳ До обеда";

            statusText.innerHTML = "Ещё немного 🙂";

            document.body.className = "green";

            percent =
                ((now - start) / (lunch - start)) * 50;

            progressBar.style.width = percent + "%";

        }

        else if(now < lunchEnd){

            target = lunchEnd;

            title.innerHTML = "🍔 Обед";

            statusText.innerHTML = "Приятного аппетита!";

            document.body.className = "orange";

            progressBar.style.width = "50%";

        }

        else if(now < end){

            target = end;

            title.innerHTML = "💼 До конца рабочего дня";

            statusText.innerHTML = "Скоро домой 😎";

            document.body.className = "blue";

            percent =
                50 + ((now - lunchEnd) / (end - lunchEnd)) * 50;

            progressBar.style.width = percent + "%";

        }

        else{

            target = nextWorkday();

            title.innerHTML = "🎉 Рабочий день окончен";

            statusText.innerHTML = "Можно домой!";

            document.body.className = "purple";

            progressBar.style.width = "100%";

        }

    }

    timer.innerHTML = format(target - now);

}

updateClock();
updateTimer();

setInterval(updateClock,1000);
setInterval(updateTimer,1000);

/* небольшое оживление котика */

setInterval(()=>{

    cat.style.transform = "scale(1.03)";

    setTimeout(()=>{

        cat.style.transform = "scale(1)";

    },250);

},5000);
