require "./minruby.rb"

def evaluate(tree)
    case tree[0] 
    when "lit"
        tree[1]
    when  "+"
        evaluate(tree[1]) + evaluate(tree[2])
    when "-"
        evaluate(tree[1]) - evaluate(tree[2])
    when "*"
        evaluate(tree[1]) * evaluate(tree[2])
    when "/"
        evaluate(tree[1]) / evaluate(tree[2])
    when "%"
        evaluate(tree[1]) % evaluate(tree[2])
    when "**"
        evaluate(tree[1]) ** evaluate(tree[2])
    when "stmts"
        i = 1
        last = nil
        while tree[i] != nil
            last = evaluate(tree[i])
            i = i + 1
        end
        last # 最後に評価した式の値を返す。プログラム的にはあまり意味はないが複文の値を返すという点では意味がある
    when "func_call"
        p(evaluate(tree[2]))
    end
end


str = minruby_load()
tree = minruby_parse(str)
answer = evaluate(tree)