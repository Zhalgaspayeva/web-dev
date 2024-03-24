def count_code(s):
    count = 0
    for i in range(len(s) - 3):  # Stop iterating 3 characters before the end
        if s[i:i+2] == 'co' and s[i+3] == 'e':
            count += 1
    return count