def close_far(a, b, c):
    def is_close_and_far(x, y, z):
        return abs(x - y) <= 1 and abs(x - z) >= 2 and abs(y - z) >= 2

    if is_close_and_far(a, b, c):
        return True
    if is_close_and_far(a, c, b):
        return True
    return False