require "./minruby.rb"

def evaluate(tree)
    if tree[0] == "lit"
        tree[1]
    elsif tree[0] == "+"
        evaluate(tree[1]) + evaluate(tree[2])
    elsif tree[0] == "-"
        evaluate(tree[1]) - evaluate(tree[2])
    elsif tree[0] == "*"
        evaluate(tree[1]) * evaluate(tree[2])
    elsif tree[0] == "/"
        evaluate(tree[1]) / evaluate(tree[2])
    elsif tree[0] == "%"
        evaluate(tree[1]) % evaluate(tree[2])
    elsif tree[0] == "**"
        evaluate(tree[1]) ** evaluate(tree[2])
    elsif tree[0] == "func_call"
        p(tree[1])
        p(tree[2])
    end
end


str = gets
tree = minruby_parse(str)
answer = evaluate(tree)
p(answer)