# 1, 2, 4, 0 네 개의 숫자만 쓰는 1240 나라가 있습니다. 1240 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.
#
# 10진법의 1 → 1
# 10진법의 2 → 2
# 10진법의 3 → 4
# 10진법의 4 → 10
# 10진법의 5 → 11
# 10진법의 6 → 12
# 10진법의 7 → 14
# 10진법의 8 → 20
# 10진법의 9 → 21
# (1) 10진수 숫자를 1240 나라에서 쓰는 숫자로 변환하여 반환해 주는 함수 (리턴 타입은 문자열)
#
# function to1240(num)
# (2) 반대 변환 함수 - 1240 나라 문자열을 입력받아 10진수로 변환해 주는 함수
#
# function toDec(str)
# 를 완성해 보세요.
#
# > to1240(10)
# “22”
# > toDec(“22”)
# 10

#10진법 숫자 int로 받기
dec = int(input("input your Decimal number : "))

#1240으로 변환
def changeto1240(a):
    s = ''
    while a > 0:
        a, r = divmod(a, 4)
        s = str(r)+s
    print("1240 world number is : "+ s.replace('3','4'))
    return s

changeto1240(dec)

#1240 숫자 str로 받기s
str1240 = input("input your 1240world number : ")
#이번엔 4를 3으로 변환하고 자리수별로 쪼개서 list 로 변환
int1240 = list(str1240.replace('4','3'))


def changetodec(a):
    s = 0
    length = int(len(a))
    # print(length)
    while length > 0:
        length = length -1
        r = int(int1240[length-1])
        s = s + r*(4**length)
    print(s)

changetodec(int1240)