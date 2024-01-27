const box = document.querySelector(".box");
const select = document.getElementById("select");
let url = "https://islomapi.uz/api/present/day?region=Toshkent";

select.addEventListener("change", (e) => {
  let url = `https://islomapi.uz/api/present/day?region=${e.target.value}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const { tong_saharlik, quyosh, peshin, asr, shom_iftor, hufton } =
        data.times;
      box.innerHTML = `
      <div class="time1">
      <div class="time_in"><h2>Tong: <h3>${tong_saharlik}</h3></h2></div>
    </div>
    <div class="time1">
    <div class="time_in"><h2>Quyosh: </h2>
    <h3>${quyosh}</h3></div>
    </div>

    <div class="time1">
    <div class="time_in"><h2>Peshin: </h2> <h3>${peshin}</h3></div>
    </div>

    <div class="time1">
    <div class="time_in"><h2>Asr:</h2> <h3>${asr}</h3></div>
    </div>

    <div class="time1">
    <div class="time_in"><h2>Shom:</h2> <h3>${shom_iftor}</h3></div>
    </div>

    <div class="time1">
    <div class="time_in"><h2>Hufton: </h2> <h3>${hufton}</h3></div>
    </div>`;
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const weekSection = document.querySelector(".week");
  const select = document.getElementById("select");

  select.addEventListener("change", function () {
      const selectedRegion = select.value;
      const url = `https://islomapi.uz/api/present/week?region=${selectedRegion}`;

      fetch(url)
          .then(response => response.json())
          .then(data => {
              weekSection.innerHTML = ""; 

              data.forEach((item, index) => {
                  weekSection.innerHTML += `
                      <div class="namoz-vaqtlari-item">

                          <p><strong>Sana:</strong> ${item.date}</p>
                          <p><strong>Kun:</strong> ${item.weekday}</p>
                          <p><strong>Tong Saharlik:</strong> ${item.times.tong_saharlik}</p>
                          <p><strong>Quyosh:</strong> ${item.times.quyosh}</p>
                          <p><strong>Peshin:</strong> ${item.times.peshin}</p>
                          <p><strong>Asr:</strong> ${item.times.asr}</p>
                          <p><strong>Shom Iftor:</strong> ${item.times.shom_iftor}</p>
                          <p><strong>Hufton:</strong> ${item.times.hufton}</p>
                      </div>
                  `;
              });
          })
          .catch(error => console.error('Xatolik:', error));
  });
});