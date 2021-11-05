import React  from 'react';
import long from './images/long.jpg';
import square from './images/square.jpg';
import toMap from './images/to-map.png';
import './App.css';

function App() {
  const doCopy = text => {
    // 흐름 1.
    if (!document.queryCommandSupported("copy")) {
      return alert("복사하기가 지원되지 않는 브라우저입니다.");
    }

    // 흐름 2.
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.top = 0;
    textarea.style.left = 0;
    textarea.style.position = "fixed";

    // 흐름 3.
    document.body.appendChild(textarea);
    // focus() -> 사파리 브라우저 서포팅
    textarea.focus();
    // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
    textarea.select();
    // 흐름 4.
    document.execCommand("copy");
    // 흐름 5.
    document.body.removeChild(textarea);
    alert("클립보드에 복사되었습니다.");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="top">
          <h1 className="main-title">Invitation</h1>
          {/* <div className="only-box"></div> */}
          {/* <img src={long} className="long" alt="logo" /> */}
          <img src={square} className="squre" alt="logo" />
        </div>
        <div className="invite">
          <h2 style={{marginTop:"3rem"}}>모시는 글</h2>
          <p>그동안 보내주신 응원과 후의에
          <br/>
          진심으로 감사드립니다.
          <br/>
          지금껏 쌓아온 왕홍으로써의 노하우를
          <br/>
          정리하고 다듬어
          <br/>
          <strong>'왕홍의 모든 것'</strong> 도서를 출간했습니다.
          <br/>
          부디 참석하시어 자리를 빛내 주시고
          <br/>
          작가로써 내딛는 첫 발걸음을
          <br/>
          응원해주시기 바랍니다.
          </p>
          <br/>
          <h4>작가 이혜란 드림.</h4>
        </div>
        <hr className="line"/>
        <div className="schedule">
          <h2>행사 순서</h2>
          <ul >
            <li><strong>14:30</strong> : 행사 안내 및 착석</li>
            <li><strong>14:50</strong> : 이혜란 작가 북콘서트</li>
            <li><strong>15:00</strong> : Q and A</li>
            <li><strong>15:40</strong> : 저자 싸인회</li>
          </ul>
        </div>
        <hr className="line"/>
        <div className="map">
          <h2>오시는 길</h2>
          <img src={toMap} className="to-map" alt="중소기업중앙회 더파티움"/>
          <p>
            <strong>도로명 주소</strong><br/>서울시 영등포구 은행로 30<br/>(여의도동, 중소기업중앙회)<br/><br/>
            <strong>지번 주소</strong><br/>서울시 영등포구 여의도동 16-2<br/>중소기업중앙회 지하 1층<br/><br/>
            <strong>문의 대표번호</strong><br/>02-784-0000
          </p>
        </div>
        <hr className="line"/>
        <button
          className="copyBtn"
          onClick={() => doCopy("https://kapable.github.io/everything/")}>🔗 모바일 초대장 링크 복사하기</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* 링크 넣기 */}
        </a>
      </header>
    </div>
  );
}

export default App;
