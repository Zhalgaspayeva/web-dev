def lucky_sum(a, b, c):
    sum_ = 0

    for num in (a, b, c):
        if num == 13:
            break
        sum_ += num
    
    return sum_
