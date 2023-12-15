const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie-select");

// 読み込み時にローカルストレージから保存データを画面に反映する
populateUI();

let ticketPrice = Number(movieSelect.value);

// ローカルストレージに <select>で選択された movie の index と value を保存
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // TODO: 選択したシートのインデックスの保存を関数として切り出す
  // 選択シートオブジェクトをシートのインデックスに変換して保存　結果例: [1,2,4,8]
  const selectedSeatsIndex = [...selectedSeats].map((selectedSeat) =>
    [...seats].indexOf(selectedSeat)
  );
  localStorage.setItem(
    "selectedSeatsIndex",
    JSON.stringify(selectedSeatsIndex)
  );

  // チケット代と座席の計算結果を反映
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}

// ローカルストレージからデータを取得して、HTMLに反映
function populateUI() {
  const selectedSeatsIndex = JSON.parse(
    localStorage.getItem("selectedSeatsIndex")
  );

  if (selectedSeatsIndex !== null && selectedSeatsIndex.length > 0) {
    // 選択済みの座席の HTML要素に"選択済み"のクラスを付与
    seats.forEach((seat, index) => {
      if (selectedSeatsIndex.includes(index)) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = Number(e.target.value);
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event リファクタのため削除
// container.addEventListener("click", (e) => {
//   console.log(e.target);
//   if (
//     e.target.classList.contains("seat") &&
//     !e.target.classList.contains("occupied")
//   ) {
//     e.target.classList.toggle("selected");

//     updateSelectedCount();
//   }
// });

seats.forEach((seat) => {
  seat.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("occupied")
    ) {
      e.target.classList.toggle("selected");
      updateSelectedCount();
    }
  });
});

// Initial count and total set
updateSelectedCount();
