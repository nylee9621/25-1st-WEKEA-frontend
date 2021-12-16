# WEKEA
> 가구 및 생활 소품 판매를 하는 다국적 기업인 [IKEA](https://www.ikea.com/kr/ko/)를 모티브로 한 팀 프로젝트.

## Introduction
- 진행 기간: 2021년 10월 5일 ~ 2021년 10월 15일 (2주)
- 참여 인원: 프론트엔드 4명, 백엔드 2명 (총 6명)

## Technology
- `HTML`, `CSS`, `JavaScript`, `React`, `Sass`
- `Slack`, `Zoom`, `Trello`, `Github`, `Git`

## Links
- [시연 영상 보러가기](https://youtu.be/T7oaFLtjy6U)
- [백엔드 github](https://github.com/wecode-bootcamp-korea/25-1st-WEKEA-backend.git)

## View & Function
#### 1. 레이아웃: 제품 상세, 장바구니 페이지
![Screenshot 2021-10-17 at 21 40 37](https://user-images.githubusercontent.com/40952119/146351510-1c113a91-9b0b-4c4a-985c-28c5b4797e55.jpg)


#### 2. 슬라이드: 이미지 모달과 상품 리스트 부분에서 사용
- 왼쪽/오른쪽 화살표를 누르면 화면에 보이는 영역이 이동한다.
- 이때 이동하는 영역은 화면에 완전히 보이는 item만큼.
  ex) 화면에서 완전히 보이는 item 3개와 절반 가려진 item이 존재한다면 3개만큼의 너비만 이동한다.
- 스크롤바에서 다른 영역을 클릭하면 해당 위치로 이동한다. 위와 동일한 너비 계산이 적용된다.
- 스크롤바 thumb를 누르면 thumb의 높이가 2배로 증가한다.
<img width="924" alt="슬라이드 모달" src="https://user-images.githubusercontent.com/40952119/146351462-3c262b19-01ab-47ac-8851-8808779683b4.png">

#### 3. 모달: 사이드(제품 설명, 제품 크기, 상품평, 규격), 센터(이미지)
- 모달 열고 닫음.
- 영역 밖 클릭시 모달 닫힘.
- 모달이 열릴 때 애니메이션 적용.

#### 
