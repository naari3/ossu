/**
 * 電卓
 */

window.onload = function() {
  /** ============================
   * 変数の定義
   *============================*/

  // 要素の取得
  var uhen = document.getElementById("uhen"); // 右辺
  var sahen = document.getElementById("sahen"); // 左辺

  var result = document.getElementById("result"); // 結果

  var keisanBtn = document.getElementById("keisanBtn"); // けいさん

  var suuji = 0;

  /** ============================
   * 関数の定義
   *============================*/

  keisanBtn.onclick = function() {
    console.log(Number(uhen.value) + Number(sahen.value));
    suuji = suuji + Number(uhen.value) + Number(sahen.value);
    result.innerHTML = suuji;
  };

  /** ============================
   * 初期化処理
   *============================*/
};
