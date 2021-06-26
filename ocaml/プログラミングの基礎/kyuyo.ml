(* 時給 *)
let jikyu = 950

(* 基本給 *)
let kihonkyu = 100

(* kyuyo : int -> int *)
let kyuyo x = jikyu * x + kihonkyu

let test1 = kyuyo 25 = 23850
let test2 = kyuyo 28 = 26700
let test3 = kyuyo 31 = 29550
