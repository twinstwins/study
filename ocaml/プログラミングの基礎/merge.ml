(* 目的: lst1とlst2を受け取り、それらを結合したリストを返す *)
(* a list -> a list -> a list *)
(* let rec append lst1 lst2 = match lst1 with
[] -> lst2
| first :: rest -> first :: append rest lst2 *)

(* let test1 = append [] [] = []
let test2 = append [1;2] [] = [1;2]
let test3 = append [1] [2] = [1;2]
let test4 = append [] [1;2] = [1;2] *)

(* 目的: 照準で並んでいるlst1とlst2をマージする *)
(* a list -> a list -> a list *)
let rec merge lst1 lst2 = match (lst1,lst2) with
([],[])-> []
|([], first2::rest2) -> lst2
|(first1 ::rest1,[]) -> lst1
|(first1::rest1, first2::rest2) ->
    if first1 < first2
    then first1 :: merge rest1 lst2
    else first2 :: merge rest2 lst1

let test1 = merge [] [] = []
let test2 = merge [1;2] [] = [1;2]
let test3 = merge [] [1;2] = [1;2]
let test4 = merge [1] [2] = [1;2]
let test5 = merge [1;3] [2;4] = [1;2;3;4]
let test6 = merge [2;4] [1;3] = [1;2;3;4]
let test7 = merge [1;4] [1;3] = [1;1;3;4]