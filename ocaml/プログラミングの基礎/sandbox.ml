(* 目的: lst1とlst2を受け取り、それらを結合したリストを返す *)
(* a list -> a list -> a list *)
let rec append lst1 lst2 = match lst1 with
[] -> lst2
| first :: rest -> first :: append rest lst2

let test1 = append [] [] = []
let test2 = append [1;2] [] = [1;2]
let test3 = append [1] [2] = [1;2]
let test4 = append [] [1;2] = [1;2]
