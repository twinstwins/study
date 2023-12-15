(* match(3,5) with (a,b) -> a + b *)

(* 変数を使用するパターン *)
(* let add pair = match pair with
  (a,b) -> a + b *)

(* パターンを引数として直接受け取る方式 *)
(* let add2(a,b) = a + b *)

(* 上記はpairという変数名を使用可能という違いがあるが、意味としては同じ *)
(* let add3 a b = a + b *)

(* 目的: ふたつの整数の組 を受け取り、その和を返す *)
(* add: int * int -> int *)
(* let add pair = match pair with
(a,b) -> 0

let test1 = add (0,0) = 0
let test2 = add (2,5) = 7
let test3 = add (5,5) = 10 *)

(* 目的: x軸に対して対称な座標を返す *)
(* int * int -> int * int *)
let taisho_x zahyo = match zahyo with
  (x,y) -> (-x,0)

  let test1 = taisho_x (0,0) = (0,0)
  let test2 = taisho_x (1,0) = (-1,0)
  let test3 = taisho_x (10,0) = (-10,0)
