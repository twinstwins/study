
# arr = [2,5,1,8,7,3]
# arr_lenght = len(arr)
# for x in range(arr_lenght):
#     for y in range(arr_lenght-1-x):
#         if arr[y] > arr[y+1]:
#             arr[y], arr[y+1] = arr[y+1], arr[y]
  
# print(arr)


arr = [2,5,1,8,7,3]
arr_lenght = len(arr)
for x in range(arr_lenght):
  min_index = x
  
  for y in range(x+1, arr_lenght):
    if arr[y] < arr[min_index]:
      min_index = y
  
  arr[min_index], arr[x] = arr[x], arr[min_index]
  
print(arr)



for x in range(1,5):
  print(x)