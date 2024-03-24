n = int(input())

min_divisor = None
divisor = 2

while min_divisor is None and divisor * divisor <= n:
    if n % divisor == 0:
        min_divisor = divisor
    divisor += 1

if min_divisor is None:
    min_divisor = n

print(min_divisor)
