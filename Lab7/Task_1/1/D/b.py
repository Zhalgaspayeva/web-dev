N = int(input())

A = list(map(int, input().split()))

for num in A:
    if num % 2 == 0:
        print(num, end=" ")