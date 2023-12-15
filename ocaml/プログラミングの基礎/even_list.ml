(* 目的: 整数のリストを受けとって、偶数の要素のみを含むリストを返す *)
(* even_list int list -> int list *)
let even list = match list with
  [] -> []
  | first :: rest -> if first mod 2 == 0 then first::rest
                                         else even rest

let test1 = even [] = []
let test2 = even [2] = [2]
let test3 = even [2; 3] = [2]
let test4 = even [1; 2; 4; 6] = [2; 4; 6]
let test5 = even [2; 4] = [2; 4]
let test6 = even [2; 4; 6] = [2; 4; 6]