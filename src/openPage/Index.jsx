import { useState } from "react";
import styled from "styled-components";

const Index = () => {
  const [isOpenModal, setIsModalOpen] = useState(true);
  var location = window;
  const redireactApp = () => {
    exeDeepLink();
    checkInstallApp();
  };

  function checkInstallApp() {
    function clearTimers() {
      clearInterval(check);
      clearTimeout(timer);
    }

    function isHideWeb() {
      if (document.webkitHidden || document.hidden) {
        clearTimers();
      }
    }
    const check = setInterval(isHideWeb, 200);

    const timer = setTimeout(function() {
      redirectStore();
    }, 500);
  }

  const redirectStore = () => {
    const ua = navigator.userAgent.toLowerCase();

    if (window.confirm("스토어로 이동하시겠습니까?")) {
      location.href = "https://apps.apple.com/kr/app/id1639296945";
      window.open(location.href);
    }
  };

  function exeDeepLink() {
    const url = "yourapp://path/";
    location.href = url;
  }

  return (
    <DeepLinkBlock>
      <div className="modal">
        <p className="title">앱을 여시겠습니까?</p>
        <div className="button-group">
          <button className="open btn" onClick={redireactApp}>
            네 열래요
          </button>
        </div>
      </div>
    </DeepLinkBlock>
  );
};

const DeepLinkBlock = styled.div`
  background: #d1d1d1;
  position: fixed;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    width: 278px;
    height: 171px;
    padding: 26px 14px 14px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(192, 192, 192, 0.25);
    border-radius: 8px;
    position: relative;
    bottom: 50px;
    .title {
      font-weight: bold;
      font-size: 17px;
      margin-bottom: 12px;
    }
    .desc {
      font-size: 12px;
      color: #777777;
    }
    .button-group {
      display: flex;
      justify-content: space-around;
      margin-top: 38px;
      .btn {
        height: 40px;
        width: 120px;
        background: #eeeeee;
        color: #555555;
        font-size: 14px;
        letter-spacing: -1px;
        border-radius: 6px;
      }
      .open {
        background: orange;
        color: #ffffff;
      }
    }
  }
`;

export default Index;