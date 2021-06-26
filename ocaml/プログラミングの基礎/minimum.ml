(* 受け取ったlstの要素の最小値を返す *)
(* int lst -> int *)
let rec minimum lst = match lst with
[] -> max_int
| first :: rest -> if first <= minimum rest
then first
else minimum rest

let test1 = minimum [0] = 0
let test2 = minimum [1;2;3;3;2;1] = 1
let test3 = minimum [5;2;3;4;1] = 1