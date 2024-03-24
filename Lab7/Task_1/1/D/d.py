n = int(input())

array = list(map(int, input().split()))
count_greater = 0

for i in range(1, n):
    if array[i] > array[i - 1]:
        count_greater += 1

print(count_greater)
