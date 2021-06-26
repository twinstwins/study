(* 時間xが午前か午後かを判定する *)
(* jikan : int -> int *)
let jikan x = if x <= 12 then "am" else "pm"

let test1 = jikan 1 = "am"
let test2 = jikan 13 = "pm"
let test3 = jikan 12 = "am"
