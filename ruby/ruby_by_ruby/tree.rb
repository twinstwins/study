# 3つの節からなる木構造を作成する
# 配列の1番目が節の名前、2番目が左の枝、3番目が右の枝を表す
tree = ["節1" , ["節2" , ["葉A"] , ["葉B"]] ,["節3" , ["葉C"] , ["葉D"]]]

# 木構造を表示する
p tree

# 節1の左の枝を表示する
p tree[1]

# 木の名前全てを表示する 
# 再帰的に木をたどる
def preorder(tree)
    p(tree[0])
    if tree[0].start_with?("節")
        preorder(tree[1])
        preorder(tree[2])
    end
end

preorder(tree)
