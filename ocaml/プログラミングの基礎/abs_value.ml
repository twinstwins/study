(* 実数の絶対値を計算する *)
(* abs_value: float -> float *)

(* let abs_value x = 0.0
  if (x > 0.0) then 0.0
  else 0.0
;; *)

let abs_value x =
  if (x > 0.0) then x
  else -. x

let test1 = abs_value 2.3 = 2.3
let test2 = abs_value (-2.3) = 2.3
let test3 = abs_value 0.0 = 0.0