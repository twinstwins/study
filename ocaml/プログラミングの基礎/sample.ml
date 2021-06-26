(* 時給 *)
let jikyu = 950

(* 基本給 *)
let kihonkyu = 100

(* 目的: 働いた時間xに応じたアルバイト代を計算する *)
(* kyuyo : int -> int *)
let kyuyo x = jikyu * x + kihonkyu

let test1 = kyuyo 25 = 23850
let test2 = kyuyo 28 = 26700
let test3 = kyuyo 31 = 29550
