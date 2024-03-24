n = int(input())

scores = list(map(int, input().split()))

sorted_scores = sorted(scores, reverse=True)
max_score_index = sorted_scores.index(max(sorted_scores))
sorted_scores.pop(max_score_index)

runner_up_score = max(sorted_scores)
print(runner_up_score)