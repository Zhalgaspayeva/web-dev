n = int(input())
k = int(input())

fact_n = 1
for i in range(1, n + 1):
    fact_n *= i

fact_k = 1
for i in range(1, k + 1):
    fact_k *= i

fact_n_minus_k = 1
for i in range(1, n - k + 1):
    fact_n_minus_k *= i

C = fact_n // (fact_k * fact_n_minus_k)

print(C)