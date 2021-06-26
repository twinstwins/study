  (* 昇順で並んでいる整数リストlstと整数nを受け取って、照準を崩さないようにnを挿入 *)
  (* insert: int list -> n -> int list *)
  let rec insert lst n = match lst with
  [] -> [n]
  | first :: rest -> if first < n  then  first :: insert rest n
                     else n :: first :: rest

(* let test1 = insert [] 3 = [3]
let test2 = insert [1] 2 = [1;2]
let test3 = insert [1;2] 3 = [1;2;3]
let test4 = insert [1;3] 2 = [1;2;3]
let test5 = insert [1;2;3] 4 = [1;2;3;4]
let test6 = insert [1;3;4;7;8] 5 = [1;3;4;5;7;8] *)

(* 整数のリストを受け取って、照準に整列したリストを返す *)
(* ins_sort: int list -> int list*)
let rec ins_sort lst = match lst with
[] -> []
| first :: rest -> insert(ins_sort rest) first

let test1 = ins_sort [3;2;1] = [1;2;3]
let test2 = ins_sort [3;2;5;1;4] = [1;2;3;4;5]

let test3 = ins_sort [5;3;8;1;7;4] = [1;3;4;5;7;8]
