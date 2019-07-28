/**
 * 簡易スライドショー
 *
 * nextボタンを押したときに画像を切り替える簡単な
 * スライドショーのサンプルプログラムです。
 */

window.onload = function() {
  /** ============================
   * 変数の定義
   *============================*/

  // 画像のリストの定義
  var photoList = [
    { src: "img/spring.jpg", title: "春の桜" },
    { src: "img/summer.jpg", title: "夏のひまわり" },
    { src: "img/autumn.jpg", title: "秋の紅葉" },
    { src: "img/winter.jpg", title: "冬の山" }
  ];
  var photoLength = photoList.length;

  // 要素の取得
  var photo = document.getElementById("photo");
  var nextBtn = document.getElementById("nextBtn");
  var randomBtn = document.getElementById("randomBtn");
  var newBtn = document.getElementById("newBtn");
  var newSrc = document.getElementById("newSrc");
  var newTitle = document.getElementById("newTitle");

  // 現在のインデックスを保存するための変数
  var currentIndex = 0;

  /** ============================
   * 関数の定義
   *============================*/

  // 指定の画像に表示を切り替える関数
  function showPhoto(index) {
    // すべての画像を非表示
    for (var i = 0; i < photoLength; i++) {
      photoList[i].elem.style.display = "none";
    }

    // 憑依する対象の要素を取得
    var targetPhoto = photoList[index];

    // タイトルの表示
    var viewNumber = index + 1;
    title.innerHTML = "[" + viewNumber + "]" + targetPhoto.title;

    // 画像の表示
    targetPhoto.elem.style.display = "inline";
  }

  /** ============================
   * イベントの設定
   *============================*/

  // nextボタンを押したときの処理
  nextBtn.onclick = function() {
    // 表示する画像のインデックスを計算
    currentIndex++;
    if (currentIndex === photoLength) {
      currentIndex = 0;
    }

    showPhoto(currentIndex);
  };

  newBtn.onclick = function() {
    var img = document.createElement("img");

    img.src = newSrc.value;
    img.alt = newTitle.value;
    img.style.display = "none";

    var item = { src: newSrc.value, title: newTitle.value, elem: img };

    photoList.push(item);

    photoLength++;

    photo.appendChild(img);

    newSrc.value = "";
    newTitle.value = "";

    showPhoto(photoLength - 1);
  };

  randomBtn.onclick = function() {
    console.log("PAPA");
    var index = Math.ceil(Math.random() * photoLength - 1);
    showPhoto(index);
  };

  /** ============================
   * 初期化処理
   *============================*/

  // img要素をHTMLに追加
  var item, img;
  for (var i = 0; i < photoLength; i++) {
    item = photoList[i];

    // img要素の作成
    img = document.createElement("img");

    img.src = item.src;
    img.alt = item.title;

    photo.appendChild(img);

    item.elem = img;
  }

  console.log(photoList);
  showPhoto(currentIndex);
};
