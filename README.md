# :: 원티드 프리온보딩 프론트엔드 코스 사전과제 풀이 과정

## Quick Overview

```
npm install

npm start
```

# :: 과제 풀이

---

## Assignment1 Solving - `Login`

- `input`2개 와 `button`1개로 기본적인 로그인 컴포넌트를 개발하였습니다.
- `input`의 값을 `state`로 정의 하지 않고 주신 힌트를 참고 해서 돔에 직접 접근하여 `submit` 될때 `input`의 값을 참조하는 방식으로 렌더링 최적화 하였습니다.
- 로그인 시(ID, PW 입력 후 버튼 클릭)
  - index.js파일에 app이 실행될때 임의로 설정한 id와 pw를 `localstorage`에 저장 될 수 있도록 구현했습니다.
    - 환경변수로 설정 하려고 하였지만 일반적인 개발 환경상 환경변수를 노출시키지 않는 부분을 감안하여 index.js에 하드코딩 하였습니다.
  - `button`클릭시 `localstorage`에 저장된 id와 pw를 비교하여 옳바르면 로그인 상태를 `localstorage`에 저장 하였습니다.
  - `localstorage`의 로그인 상태는`button`컴포넌트에서 변경되지만 그렇게 되면 라우팅을 하고 있는 `App`컴포넌트에서 상태의 변경에 대해 감지 할 수 없으므로 로그인 상태값은 contextApi를 통해 전역으로 관리하였습니다.

## Assignment2 Solving - `GNB`

- 스크롤에 상관없이 고정 되는 `sticky` 메뉴를 구현 했습니다.
- Media Query를 사용하여 모바일 사이즈의 경우 input창이 사라지고 양옆으로(space-between) 정렬 되도록 구현 했습니다.
- icon은 react-icons라이브러리를 사용 하여 구현 하였습니다.
- 가장 오른쪽 아이콘은 Logout아이콘으로 구현 하였습니다.

## Assignment3 Solving - `Validation`

- validation을 정규표현식을 통해 확인하는 함수를 만들어 체크 하도록 구현 하였습니다.
- 하나의 `input`컴포넌트가 ID 와 PW에 공통으로 사용되고 그로 인해 독립적인 validation에 어려움이 있어 커스텀훅을 통해 validation 상태 및 함수를 전달받는 형식으로 구현 하였습니다.
- ID가 Email형식이 아니거나 PW가 지정된 정규 표현식에 맞지 않는경우 `input`의 border색상을 red로 변경되도록 구현하였습니다.
- validation상태와 ID and PW의 값에 대해 `button`컴포넌트도 참조해야 될 필요성이 있어 상태와 `input`의 값을 `contextApi`를 통한 전역상태로 관리 하였고 그로 인해 `button`컴포넌트가 과제의 validation 내용에 맞게 활성화 및 비활성화 될 수 있도록 구현 하였습니다.

## Assignment4 Solving - `Routing`

- 로그인시 localstorage를 확인하여 로그인 상태에 따라 history push를 사용하지 않고 Main Page로 이동 되도록 구현 하였습니다.
- 로그아웃시 localstorage의 로그인 상태 키에 해당하는 값을 제거하여 로그인 화면으로 이동되도록 구현하였습니다.

## Assignment5 Solving - `Feeds`

- Feed 정보는 public/data 디렉토리에 json형식으로 구성하였으며 fetch함수를 이용하여 data fetching을 구현하였습니다.
- 각각 Feed에 댓글을 Enter key & 클릭으로도 추가 할수 있도록 구현 하였습니다.
- Feed의 댓글은 `state`로 추가 되도록 구현하였으며 새로고침 하게 되면 저장된 상태가 초기화 되면서 fetch된 데이터의 댓글만 남도록 구현 하였습니다.
- 댓글 추가시 input태그의 value를 초기화 되도록 구현 하였습니다.
- Feed는 화면 중앙에 위치 해야하며 모바일 대응이 가능하도록 구현 하였습니다.
- image객체의 onload 메소드를 통해 이미지를 불러오는 시간동안 간단한 loading컴포넌트가 보여지도록 구현 하였습니다
