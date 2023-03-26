# Flex

>flex란?
+ flexible box, flex box라고 부름
+ flex는 레이아웃 배치 전용 기능으로 고안 <br>
<span style="color: gray"><h5>float나 inline-block 등을 이용한 기존 방식보다 훨씬 강력하고 편리한 기능들이 많음</span>

>flex와 grid
+ 더 나중에 나온 스펙인 grid로도 flex와 똑같이 구현할 수 있는 경우가 많지만, grid로는 구현이 어려운 레이아웃이거나 flex를 쓰는게 더 편리한 경우도 존재
+ 지원해줘야 하는 인터넷 익스플로러같은 경우에는 flex는 표준 스펙을 지원하지만 grid는 legacy 버전만 지원하기 때문에, 적재적소에 활용하는 것이 중요

>flex 레이아웃을 만들기 위한 기본적인 html 구조
<pre>
<code>
    div class="container"
	div class="item" helloflex
	div class="item" abc 
	div class="item"helloflex 
</code>
</pre>
+ 부모 요소를 flex container
+ 자식 요소를 flex item
+ "컨테이너가 flex의 영향을 받는 전체 공간이고, 설정된 속성에 따라 각각의 아이템들이 어떤 형태로 배치되는 것"이라고 생각하면 됨
<img src="flex box.jpg" ></img>

> flex 컨테이너에 적용하는 속성들
 
 display: flex;
<pre>
.container{
    display: flex;
}
</pre>
<img src="flex box2.jpg" ></img>

+ flex 아이템들은 가로 방향으로 배치, 자신이 가진 내용물의 width 만큼만 차지, height는 컨테이너의 높이만큼 늘어남
+ <span style="color: gray"><h5>
inline-flex는 inline-block처럼 동작
 
 flex-direction
 + 아이템들이 배치되는 축의 방향을 결정하는 속성
 <pre>
.container {
	flex-direction: row;
	/* flex-direction: column; */
	/* flex-direction: row-reverse; */
	/* flex-direction: column-reverse; */
}
</pre>
<img src="flex box3.jpg" ></img>

+ row(기본값) : 아이템들이 행(가로)방향으로 배치
+ row-reverse : 아이템들이 역순으로 가로 배치
+ column : 아이템들이 열(세로)방향으로 배치
+ column-reverse : 아이템들이 역순으로 세로 배치 

flex-wrap
+ 컨테이너가 더 이상 아이템들을 한 줄에 담을 여유 공간이 없을 때 아이템 줄바꿈을 어떻게 할지 결정하는 속성
<pre>
.container {
	flex-wrap: nowrap;
	/* flex-wrap: wrap; */
	/* flex-wrap: wrap-reverse; */
}
</pre>
<img src="flex box4.jpg" ></img>

+ nowrap(기본값) : 줄바꿈 x, 넘치면 그냥 빠져 나감
+ wrap : 줄바꿈을 함
+ wrap-reverse: 줄바꿈을 하나, 아이템을 역순으로 배치

flex-flow
+ flex-direction과 flex-wrap을 한꺼번에 지정할 수 있는 단축 속성
+ flex-direction, flex-wrap의 순으로 한 칸 떼고 작성
<pre>
.container {
	flex-flow: row wrap;
	/* 아래의 두 줄을 줄여 쓴 것 */
	/* flex-direction: row; */
	/* flex-wrap: wrap; */
}
</pre>

justify-content
+ 메인축 방향으로 아이템을들 정렬하는 속성
<pre>
.container {
	justify-content: flex-start;
	/* justify-content: flex-end; */
	/* justify-content: center; */
	/* justify-content: space-between; */
	/* justify-content: space-around; */
	/* justify-content: space-evenly; */
}
</pre>
+ flex-start(기본값) : 아이템들을 시작점으로 정렬
+ flex-end : 아이템들을 끝점으로 정렬
+ center : 아이템들을 가운데로 정렬
+ space-between : 아이템들의 “사이(between)”에 균일한 간격
+ space-around : 아이템들의 “둘레(around)”에 균일한 간격
+ space-evenly : 아이템들의 사이와 양 끝에 균일한 간격, IE와 엣지에선 지원X
<img src="flex box5.jpg" ></img>

align-items
+ 수직축 방향으로 아이템을들 정렬하는 속성
<pre>
.container {
	align-items: stretch;
	/* align-items: flex-start; */
	/* align-items: flex-end; */
	/* align-items: center; */
	/* align-items: baseline; */
}
</pre>
+ stretch(기본값) : 아이템들이 수직축 방향으로 끝까지 쭈욱 늘어남
+ flex-start : 아이템들을 시작점으로 정렬
+ flex-end : 아이템들을 끝으로 정렬
+ center : 아이템들을 가운데로 정렬
+ baseline : 아이템들을 텍스트 베이스라인 기준으로 정렬

align-content
+ flex-wrap: wrap;이 설정된 상태에서, 아이템들의 행이 2줄 이상 되었을 때의 수직축 방향 정렬을 결정하는 속성
<pre>
.container {
	flex-wrap: wrap;
	align-content: stretch;
	/* align-content: flex-start; */
	/* align-content: flex-end; */
	/* align-content: center; */
	/* align-content: space-between; */
	/* align-content: space-around; */
	/* align-content: space-evenly; */
}
</pre>
> flex 아이템에 적용하는 속성들

flex-basis
+ Flex 아이템의 기본 크기를 설정(flex-direction이 row일 때는 너비, column일 때는 높이)
+ 기본값 auto는 해당 아이템의 width값을 사용

flex-grow
+ 아이템이 flex-basis의 값보다 커질 수 있는지를 결정하는 속성
+ 숫자값이 들어가며, 0보다 큰 값이 세팅이 되면 해당 아이템이 유연한(Flexible) 박스로 변하고 원래의 크기보다 커지며 빈 공간을 메우게 됨

flex-grow: 0;
<img src="flex box6.jpg" ></img>
flex-grow: 1;
<img src="flex box7.jpg" ></img>

+ flex-grow에 들어가는 숫자의 의미: flex-basis를 제외한 여백 부분을 flex-grow에 지정된 숫자의 비율로 나누어 가짐.
<pre>
/* 1:2:1의 비율로 세팅할 경우 */
.item:nth-child(1) { flex-grow: 1; }
.item:nth-child(2) { flex-grow: 2; }
.item:nth-child(3) { flex-grow: 1; }
</pre>
<img src="flex box8.jpg" ></img>

flex-shrink
+ 아이템이 flex-basis의 값보다 작아질 수 있는지를 결정
+ 숫자값이 들어가는데, 몇이든 일단 0보다 큰 값이 세팅이 되면 해당 아이템이 유연한(Flexible) 박스로 변하고 flex-basis보다 작아짐
+ 기본값이 1이기 때문에 따로 세팅하지 않았어도 아이템이 flex-basis보다 작아질 수 있음

flex-shrink: 1;
<img src="flex box9.jpg" ></img>
flex-shrink: 0;
<img src="flex box10.jpg" ></img>

flex
+ flex-grow, flex-shrink, flex-basis를 한 번에 쓸 수 있는 축약형 속성

align-self
+ 해당 아이템의 수직축 방향 정렬
+ 기본값은 auto로, 기본적으로 align-items 설정을 상속
+ align-self는 align-items보다 우선권

order
+ 각 아이템들의 시각적 나열 순서를 결정하는 속성
<pre>
<code>
 .item:nth-child(1) { order: 3; } /* A */
.item:nth-child(2) { order: 1; } /* B */
.item:nth-child(3) { order: 2; } /* C */
</code>
</pre>
<img src="flex box11.jpg" ></img>

z-index
+ z-index로 Z축 정렬
+ 숫자가 클 수록 위로 올라옴
+  z-index를 설정 안하면 0
