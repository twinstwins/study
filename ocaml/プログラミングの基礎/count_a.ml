type gakusei_t = {
  namae : string;
  tensuu :int;
  seiseki: string;
}

let lst1 = []
let lst2 = [{namae = "asai"; tensuu = 70; seiseki = "B"}]
let lst3 = [{namae = "tanaka"; tensuu = 80; seiseki = "A"};
            {namae = "tanakaaa"; tensuu = 80; seiseki = "A"}]
let lst4 = [{namae = "naka"; tensuu = 100; seiseki = "A"}]

(* 目的: 学生リストlstのうち成績がAの人の数を返す *)
(* gakuseit_t list -> int *)
(* let count_A lst = match lst with
[] -> 0
| first :: rest -> (match first with
  {namae = n; tensuu = t; seiseki = s}
  -> 0) *)

  let rec count_A lst = match lst with
[] -> 0
| {namae = n; tensuu = t; seiseki = s} :: rest -> if s = "A" then 1 + count_A rest
                                                             else count_A rest

let test1 = count_A lst1 = 0
let test2 = count_A lst2 = 0
let test3 = count_A lst3 = 2
let test4 = count_A lst4 = 1