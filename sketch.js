
let currentPage = 1; // 현재 페이지 번호 (1 또는 2)

// 1페이지용 버튼 변수들
let btn01, btn02, btn03, btn04, btn05, btn06, btn07, btn08, btn09, btn10;
// 2페이지용 버튼 변수들
let btn_01, btn_02, btn_03, btn_04;
// 3페이지용 버튼 변수들
let btn3_01, btn3_02, btn3_03, btn3_04, btn3_05;

function setup() {
  //createCanvas(402, 874);
  textAlign(CENTER, CENTER);
  textFont('sans-serif');
  
let myCanvas = createCanvas(402, 874);
  myCanvas.position(0, 0, 'relative');
  

  // 1페이지 버튼 생성 및 초기 세팅

  btn01 = createButton('홍조'); btn01.position(63,204); btn01.size(129,39); btn01.mousePressed(toggleButtonPage1); btn01.parent(myCanvas);
  btn02 = createButton('여드름/트러블'); btn02.position(214,204); btn02.size(129,39); btn02.mousePressed(toggleButtonPage1); btn02.parent(myCanvas);
  btn03 = createButton('주름'); btn03.position(63,261); btn03.size(129,39); btn03.mousePressed(toggleButtonPage1); btn03.parent(myCanvas);
  btn04 = createButton('흔적'); btn04.position(214,261); btn04.size(108,39); btn04.mousePressed(toggleButtonPage1); btn04.parent(myCanvas);
  btn05 = createButton('탄력'); btn05.position(66,318); btn05.size(98,39); btn05.mousePressed(toggleButtonPage1); btn05.parent(myCanvas);
  btn06 = createButton('모공'); btn06.position(190,318); btn06.size(100,39); btn06.mousePressed(toggleButtonPage1); btn06.parent(myCanvas);
  btn07 = createButton('건조함/푸석함'); btn07.position(66,375); btn07.size(140,39); btn07.mousePressed(toggleButtonPage1); btn07.parent(myCanvas);
  btn08 = createButton('블랙헤드'); btn08.position(221,375); btn08.size(100,39); btn08.mousePressed(toggleButtonPage1); btn08.parent(myCanvas);
  btn09 = createButton('유분'); btn09.position(66,438); btn09.size(100,39); btn09.mousePressed(toggleButtonPage1); btn09.parent(myCanvas);
  btn10 = createButton('기타'); btn10.position(180,438); btn10.size(100,39); btn10.mousePressed(toggleButtonPage1); btn10.parent(myCanvas);
  
  
  // 2페이지 버튼 생성 및 초기 세팅

  btn_01 = createButton('지성'); btn_01.position(57,293); btn_01.size(129,39); btn_01.mousePressed(toggleButtonPage2); btn_01.parent(myCanvas);
  btn_02 = createButton('민감성/트러블'); btn_02.position(208,293); btn_02.size(129,39); btn_02.mousePressed(toggleButtonPage2); btn_02.parent(myCanvas);
  btn_03 = createButton('건성'); btn_03.position(57,357); btn_03.size(129,39); btn_03.mousePressed(toggleButtonPage2); btn_03.parent(myCanvas);
  btn_04 = createButton('복합성'); btn_04.position(208,357); btn_04.size(129,39); btn_04.mousePressed(toggleButtonPage2); btn_04.parent(myCanvas);
  
  // 3페이지 버튼 생성 및 초기 세팅
  btn3_01 = createButton('10대'); btn3_01.position(61,284); btn3_01.size(129,39); btn3_01.mousePressed(toggleButtonPage3); btn3_01.parent(myCanvas);
  btn3_02 = createButton('20대'); btn3_02.position(212,284); btn3_02.size(129,39); btn3_02.mousePressed(toggleButtonPage3); btn3_02.parent(myCanvas);
  btn3_03 = createButton('30대'); btn3_03.position(61,341); btn3_03.size(129,39); btn3_03.mousePressed(toggleButtonPage3); btn3_03.parent(myCanvas);
  btn3_04 = createButton('40대'); btn3_04.position(212,341); btn3_04.size(129,39); btn3_04.mousePressed(toggleButtonPage3); btn3_04.parent(myCanvas);
  btn3_05 = createButton('50대 이상'); btn3_05.position(61,398); btn3_05.size(129,39); btn3_05.mousePressed(toggleButtonPage3); btn3_05.parent(myCanvas);

  // 처음 시작할 때는 1페이지이므로, 2페이지 버튼들은 일단 숨기기
  updateButtonVisibility();
}

function draw() {
  background(255);
  
  // 현재 페이지 번호에 따라 스위치처럼 분기해 화면 업로드
  if (currentPage === 1) {
    drawPage1();
  } else if (currentPage === 2) {
    drawPage2();
  } else if (currentPage === 3) {
    drawPage3();
  }
}


// 1페이지 화면  (독립된 관리)

function drawPage1() {
  // 2. 진행률바
  noStroke();    
  fill(217,217,217);
  rect(15, 98, 372, 8, 40);
  
  noStroke();   
  fill(49,48,48);
  rect(15, 98, 150, 8, 40); 
  
  // 3. 메인 질문 텍스트
  fill(0);
  textSize(20);
  textStyle(BOLD);
  text("어떤 피부 고민을 가지고 계신가요?", width / 2, 159);
  
  // 4.하단 안내 문구 및 페이지 번호
  fill(160); 
  textSize(13);
  textStyle(NORMAL);
  text("*다중 선택 가능해요!", width / 2, 500);
  
  fill(180);
  textSize(15);
  text("1/3", width / 2, 749);

  // 5. 하단 '다음' 버튼 (검은색 캡슐)
  fill(0);
  noStroke();
  rect(22, 777, 362, 44, 30); 

  fill(255);
  textSize(20);
  textStyle(BOLD);
  text("다음", width / 2, 800);
}

// 2페이지 화면  (독립된 관리)

function drawPage2() {
  // 2. 진행률바 
  noStroke();   
  fill(217,217,217);
  rect(15, 98, 372, 8, 40);
  
  noStroke(); 
  fill(49,48,48);
  rect(15, 98, 220, 8, 40); 
  
  // 3. 메인 질문 텍스트 및 안내문구
  fill(0);
  textSize(23);
  textStyle(BOLD);
  text("피부 타입은 어떻게 되시나요?", width / 2, 189);
  
  fill(160); 
  textSize(14);
  textStyle(NORMAL);
  text("전용 성분 분석 결과를 확인할 수 있어요", width / 2, 223);
  
  // 4. 페이지 번호
  fill(180);
  textSize(15);
  text("2/3", width / 2, 749);

  // 5. 하단 버튼 (이전 / 다음 나란히 배치)
  // 이전 버튼 (기존 코드 색상이 검정이라 배경 검정으로 유지하되 글씨가 올라감)
  fill(0);
  noStroke();
  rect(22, 777, 171, 44, 30); 
  fill(255);
  textSize(20);
  textStyle(BOLD);
  text("이전", width / 4, 800);
  
  // 다음 버튼
  fill(0);
  noStroke();
  rect(212, 777, 171, 44, 30); 
  fill(255);
  textSize(20);
  textStyle(BOLD);
  text("다음", (width / 4) * 3, 800);
}

// 3페이지 화면  (독립된 관리)

function drawPage3() {
  // 2. 진행률바 (검은색 바가 320만큼 늘어남)
  noStroke(); 
  fill(217, 217, 217);
  rect(15, 98, 372, 8, 40);
 
  noStroke(); 
  fill(49, 48, 48);
  rect(15, 98, 320, 8, 40); 
  
  // 3. 메인 질문 텍스트 및 안내 문구
  fill(0);
  textSize(23);
  textStyle(BOLD);
  text("다 왔어요! 나이대를 입력해주세요", width / 2, 189);

  fill(160); 
  textSize(14);
  textStyle(NORMAL);
  text("나이대에 맞는 인기 제품군을 추천해 드릴게요", width / 2, 223);
  
  // 4. 페이지 번호
  fill(180);
  textSize(15);
  text("3/3", width / 2, 749);

  // 5. 하단 '이전' 버튼
  fill(0);
  noStroke();
  rect(22, 777, 171, 44, 30); 
  fill(255);
  textSize(20);
  textStyle(BOLD);
  text("이전", width / 4, 800);
  
  // 6. 하단 '다음' 버튼 (최종 완료 버튼 역할)
  fill(0);
  noStroke();
  rect(212, 777, 171, 44, 30); 
  fill(255);
  textSize(20);
  textStyle(BOLD);
  text("다음", (width / 4) * 3, 800);
}

// 🖱️ 클릭 이벤트를 감지하여 페이지를 바꾸는 함수
function mousePressed() {
  if (currentPage === 1) {
    if (mouseX >= 22 && mouseX <= 384 && mouseY >= 777 && mouseY <= 821) {
      currentPage = 2;
      updateButtonVisibility();
    }
  } 
  else if (currentPage === 2) {
    // 2페이지에서 '이전' 누르면 1페이지로
    if (mouseX >= 22 && mouseX <= 193 && mouseY >= 777 && mouseY <= 821) {
      currentPage = 1;
      updateButtonVisibility();
    }
    // 2페이지에서 '다음' 누르면 이제 3페이지로 이동합니다!
    else if (mouseX >= 212 && mouseX <= 383 && mouseY >= 777 && mouseY <= 821) {
      currentPage = 3;
      updateButtonVisibility();
    }
  }
  // 3페이지에서의 이전/다음 클릭 좌표 인식 로직 추가
  else if (currentPage === 3) {
    // 3페이지에서 '이전' 누르면 다시 2페이지로 백!
    if (mouseX >= 22 && mouseX <= 193 && mouseY >= 777 && mouseY <= 821) {
      currentPage = 2;
      updateButtonVisibility();
    }
    // 3페이지에서 '다음' 누르면 최종 데이터 조합 완료 단계!
    else if (mouseX >= 212 && mouseX <= 383 && mouseY >= 777 && mouseY <= 821) {
      console.log("온보딩 최종 완료! 데이터 분석 페이지로 이동해야 합니다.");
    }
  }
}

// 버튼 조작 및 라디오 시스템 유틸리티 함수들 (다중선택/단일선택)

// [1페이지 전용] 다중 선택
function toggleButtonPage1() {
  this.toggleClass('selected');
}

// [2페이지 전용] 단일 선택 라디오 방식
function toggleButtonPage2() {
  let page2Buttons = [btn_01, btn_02, btn_03, btn_04];
  for (let i = 0; i < page2Buttons.length; i++) {
    page2Buttons[i].removeClass('selected');
  }
  this.addClass('selected');
}

// [3페이지 전용] 단일 선택 라디오 방식
// 2페이지와 로직은 똑같지만 검사하는 대상을 3페이지용 버튼들로만 콕 찝어 한정
function toggleButtonPage3() {
  let page3Buttons = [btn3_01, btn3_02, btn3_03, btn3_04, btn3_05];
  for (let i = 0; i < page3Buttons.length; i++) {
    page3Buttons[i].removeClass('selected');
  }
  this.addClass('selected');
}

// 버튼 보이기/숨기기 시스템에 3페이지 타겟 버튼들도 포함시킵니다.
function updateButtonVisibility() {
  let page1Buttons = [btn01, btn02, btn03, btn04, btn05, btn06, btn07, btn08, btn09, btn10];
  let page2Buttons = [btn_01, btn_02, btn_03, btn_04];
  let page3Buttons = [btn3_01, btn3_02, btn3_03, btn3_04, btn3_05]; // 3페이지 배열 추가

  if (currentPage === 1) {
    for (let b of page1Buttons) b.show();
    for (let b of page2Buttons) b.hide();
    for (let b of page3Buttons) b.hide(); // 3페이지 숨김
  } else if (currentPage === 2) {
    for (let b of page1Buttons) b.hide();
    for (let b of page2Buttons) b.show();
    for (let b of page3Buttons) b.hide(); // 3페이지 숨김
  } else if (currentPage === 3) {
    //3페이지 활성화 상태일 때의 제어법 규칙 추가
    for (let b of page1Buttons) b.hide();
    for (let b of page2Buttons) b.hide();
    for (let b of page3Buttons) b.show(); // 3페이지 버튼만 등장!
  }
}
