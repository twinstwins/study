require "./minruby.rb"

# このハッシュテーブルは、関数名をキーとして、その関数の本体を格納する
genv ={"p" => ["builtin", "p"]
}
# このハッシュテーブルは、変数名をキーとして、その変数の値を格納する
lenv = {}

def evaluate(tree, lenv)
    case tree[0] 
    when "lit"
        tree[1]
    when "+"
        evaluate(tree[1], lenv) + evaluate(tree[2], lenv)
    when "-"
        evaluate(tree[1], lenv) - evaluate(tree[2], lenv)
    when "*"
        evaluate(tree[1], lenv) * evaluate(tree[2], lenv)
    when "/"
        evaluate(tree[1], lenv) / evaluate(tree[2], lenv)
    when "%"
        evaluate(tree[1], lenv) % evaluate(tree[2], lenv)
    when "**"
        evaluate(tree[1], lenv) ** evaluate(tree[2], lenv)
    when "=="
        evaluate(tree[1], lenv) == evaluate(tree[2], lenv)
    when ">"
        evaluate(tree[1], lenv) > evaluate(tree[2], lenv)
    when "<"
        evaluate(tree[1], lenv) < evaluate(tree[2], lenv)
    when "if"
        if evaluate(tree[1], lenv)
            evaluate(tree[2], lenv)
        else
            evaluate(tree[3], lenv)
        end
    when "while"
        while evaluate(tree[1], lenv)
            evaluate(tree[2], lenv)
        end
        when "var_assign"
        lenv[tree[1]] = evaluate(tree[2], lenv)
    when "var_ref"
        lenv[tree[1]]
    when "stmts"
        i = 1
        last = nil
        while tree[i] != nil
            last = evaluate(tree[i], lenv)
            i = i + 1
        end
        last # 最後に評価した式の値を返す。プログラム的にはあまり意味はないが複文の値を返すという点では意味がある
    when "func_call"
        p(evaluate(tree[2], lenv))
    
    else
        pp(tree)
        raise("invalid tree")
    end
end


str = minruby_load()
tree = minruby_parse(str)
answer = evaluate(tree, lenv)