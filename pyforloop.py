i=1
while i<6:
    i+=1
    None

"""
반복문에서 i 값은
빠져나올때의 값이 최종값이 된다
"""


for x in range(3): # 0~2
    print(f"range:{x}")
    None

for x in [1,2,3]: # 1,2,3
    None

fruits = ["apple", "banana", "cherry"]
newlist = [x for x in fruits if "a" in x]
"""
list comprehension
1. for x in fruits
fruits 에 있는 요소 하나를 꺼내서 x 에 담아라
2. if 문 조건 검색 해라
3. True 면 맨 왼쪽에 있는 x 에 담아라
"""


