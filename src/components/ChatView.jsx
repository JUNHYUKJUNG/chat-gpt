import { useEffect, useRef } from "react";
import ChatCard from "./ChatCard";

const ChatView = ({ chatList }) => {
  const ulRef = useRef();
  // ulRef를 생성 시킨다.

  useEffect(() => {
    ulRef.current.scrollTop = ulRef.current.scrollHeight;
  }, [chatList]);
  // 채팅을 입력하면 스크롤이 맨 아래로 내려가도록 설정 시킨다.

  return (
    <div className="h-screen max-w-[560px] flex flex-col justify-end text-center">
      <ul ref={ulRef} className="mb-24 overflow-y-auto">
        {chatList.length === 0
          ? "채팅이 없습니다."
          : chatList.map((v, i) => (
              <ChatCard key={i} answer={v.answer} question={v.question} />
            ))}
      </ul>
    </div>
  );
};
// ulRef를 적용 시키고, 채팅이 없을 경우 "채팅이 없습니다."를 출력하고, 채팅이 있을 경우 ChatCard를 출력 시킨다.

export default ChatView;
