
(* 気温tが快適どうかを判定する *)
(* kaiteki : int->bool *)
let kaiteki t = if t >= 15 && t <= 25 then true else false


(* 気温xから快適度を表す文字列を計算する *)
(* kion : int -> string *)
let kion t = if kaiteki t
   then "快適"
   else "普通"

let test1 = kion 15 = "快適"
let test2 = kion 1 =  "普通"
let test3 = kion 26 =  "普通"
