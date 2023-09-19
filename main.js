
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
    <div class="time2">
      <h2>Quyosh: <h3>${quyosh}</h3> </h2>
    </div>
    <div class="time3">
      <h2>Peshin: <h3>${peshin}</h3> </h2>
    </div>
    <div class="time4">
      <h2>Asr: <h3>${asr}</h3> </h2>
    </div>
    <div class="time5">
      <h2>Shom: <h3>${shom_iftor}</h3> </h2>
    </div>
    <div class="time6">
      <h2>Hufton: <h3>${hufton}</h3> </h2>
    </div>`
    });
});

