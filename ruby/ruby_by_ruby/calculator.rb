require "./minruby.rb"

env = {}
def evaluate(tree, env)
    case tree[0] 
    when "lit"
        tree[1]
    when "+"
        evaluate(tree[1], env) + evaluate(tree[2], env)
    when "-"
        evaluate(tree[1], env) - evaluate(tree[2], env)
    when "*"
        evaluate(tree[1], env) * evaluate(tree[2], env)
    when "/"
        evaluate(tree[1], env) / evaluate(tree[2], env)
    when "%"
        evaluate(tree[1], env) % evaluate(tree[2], env)
    when "**"
        evaluate(tree[1], env) ** evaluate(tree[2], env)
    when "=="
        evaluate(tree[1], env) == evaluate(tree[2], env)
    when ">"
        evaluate(tree[1], env) > evaluate(tree[2], env)
    when "<"
        evaluate(tree[1], env) < evaluate(tree[2], env)
    when "if"
        if evaluate(tree[1], env)
            evaluate(tree[2], env)
        else
            evaluate(tree[3], env)
        end
    when "while"
        while evaluate(tree[1], env)
            evaluate(tree[2], env)
        end
        when "var_assign"
        env[tree[1]] = evaluate(tree[2], env)
    when "var_ref"
        env[tree[1]]
    when "stmts"
        i = 1
        last = nil
        while tree[i] != nil
            last = evaluate(tree[i], env)
            i = i + 1
        end
        last # 最後に評価した式の値を返す。プログラム的にはあまり意味はないが複文の値を返すという点では意味がある
    when "func_call"
        p(evaluate(tree[2], env))
    
    else
        pp(tree)
        raise("invalid tree")
    end
end


str = minruby_load()
tree = minruby_parse(str)
answer = evaluate(tree, env)