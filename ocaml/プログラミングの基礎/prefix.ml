(* 目的: 受け取った lst の要素それぞれの先頭に n を追加する *)
(* add_to_each : int -> int list list -> int list list *)
let rec add_to_each n lst = match lst with
[] -> []
| first :: rest -> (n::first) :: add_to_each n rest

(* テスト *)
let test1 = add_to_each 1 [] = []
let test2 = add_to_each 1 [[2]] = [[1; 2]]
let test3 = add_to_each 1 [[2]; [2; 3]] = [[1; 2]; [1;2;3]]


(* 目的: 受け取った lst の接頭辞のリストを求める *)
(* prefix: int list -> int list list *)
let rec prefix lst = match lst with
[] -> []
| first :: rest -> [first] :: add_to_each first (prefix rest)

let test4 = prefix [] = []
let test5 = prefix [1] = [[1]]
let test6 = prefix [1; 2] = [[1]; [1; 2]]
