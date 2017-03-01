# 아래와 같은 모양의 map 문자열이 있습니다.
#
# var map = "10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n"
# 문자열 구조
# 첫번째 줄: width, height
# 두번째 줄 ~ 끝 줄: 실제 데이터
# 1) 문자열을 읽어 json으로 저장하는 함수
#
# function parseData(map_string)
# 를 작성하세요. 리턴 타입은 json 객체 또는 json 문자열, 단 줄바꿈 문자는 모두 제거해야 합니다.
#
# json string 형식
#
# {
#   "width": 10,
#   "height": 5,
#   "data": "++++++++ P    ++     ... "
# }
# 2) 1의 json을 2차원 배열로 변환하고 해달 배열을 화면에 출력하는 함수를 작성하세요.. 단 - 는 공백으로 바꾸어 출력합니다.
#
# function drawMap(json)
# 작성 프로그램 실행 결과 예시 (자바스크립트)
#
# > var map_data="10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n"
# > var json = parseData(map_data)
# > drawMap(json)
# ++++++++++
# + P      +
# +        +
# +     o  +
# ++++++++++

import json

# given data(string)
map = "10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n".replace("-", " ")


def parsedata(a):
    # splite by \n
    splitmap = a.split('\n')
    # set a width and height, data
    width = int(splitmap[0].split(',')[0])
    height = int(splitmap[0].split(',')[1])
    data = "".join(splitmap[1:])
    # dictionary 형태로 배치
    dictobj = {'width':width, 'height':height, 'data':data}
    # json으로 변환/출력
    jsonobj = json.dumps(dictobj)
    print(jsonobj)
    # json으로 리턴
    return jsonobj


# map 받아서 parsedata 함수 실행
tempdata = parsedata(map)

# 리턴을 dict으로 바꿔봄
mapdata = json.loads(tempdata)

#
# drawmap 함수 시작
def drawmap(a):
    # height 만큼 돌면서, width너비로 \n 붙여줌
    number = 1
    b = ''
    for i in range(1, mapdata['height']+1):
        # data에서 루프 번호에 해당하는 width끊고
        a = mapdata['data'][mapdata['width'] * (number-1):mapdata['width'] * number]
        # number 하나 올리기
        number = number + 1
        # 개행, 합치기
        b = b + a +'\n'
    print(b)

# mapdata받아서 drawmap 함수 실행
drawmap(mapdata)