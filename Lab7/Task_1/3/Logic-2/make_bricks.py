def make_bricks(small, big, goal):
    max_big_inches = big * 5
    if goal >= max_big_inches:
        return goal - max_big_inches <= small
    remaining_inches = goal % 5
    return remaining_inches <= small