match [1; 2; 3;] with
  [] -> [0; 1;]
  | first :: rest -> rest ;;

  (* int list
  - [] 空リスト
  - first :: rest 最初の要素がfirstで残りのリストがrest *)
  (* 受け取ったリストlstに0が含まれているかを調べる *)
  (* contain_zero: int list -> bool *)
  let rec contain_zero lst = match lst with
    [] -> false
    | first :: rest -> if first = 0 then true
                                    else contain_zero rest

  let test1 = contain_zero [] = false
  let test2 = contain_zero [0; 2] = true
  let test3 = contain_zero [1; 1] = false
  let test4 = contain_zero [1; 2; 3; 4;] = false
  let test5 = contain_zero [1; 2; 3; 4; 0] = true

(* 目的: 受け取ったリストの各要素の和を求める *)
(* sum: int list -> int *)
let rec sum lst = match lst with
[] -> 0
| first :: rest -> first + sum rest

(* テスト *)
let test1 = sum [] = 0
let test2 = sum [2] = 2
let test3 = sum [1; 3] = 4
let test4 = sum [1; 3; 6] = 10
let test5 = sum [1; 3; 6; 5;] = 15