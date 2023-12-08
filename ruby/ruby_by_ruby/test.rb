# 複数の式(複文)のテスト
p(40+2) # => 42
p(40+2) # => 42

# 変数の代入テスト
x = 1
# 変数の参照テスト
y = x + 2 # => 3
p(y)

# 比較演算子のテスト
# 等しい
p(1 == 1)     # => true
p(1 == 2)     # => false
p(1 + 1 == 2) # => true

# より大きい
p(2 > 1) # => true
p(1 > 2) # => false

# より小さい
p(2 < 1) # => false
p(1 < 2) # => true

# if文
if 0 == 0
    p("成功です")
else
    p("失敗です")
end

# while文
i = 0
while i < 5
    p(i)
    i = i + 1
end

# fizzbuzz
i = 1
while i < 16
    if i % 15 == 0
        p("FizzBuzz 15の倍数")
    elsif i % 3 == 0
        p("Fizz 3の倍数")
    elsif i % 5 == 0
        p("Buzz 5の倍数")
    else
        p(i)
    end
    i = i + 1
end
