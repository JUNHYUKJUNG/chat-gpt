import ChatCard from "./ChatCard";

const ChatView = ({ chatList }) => {
  return (
    <div className="bg-yellow-100 h-screen max-w-[560px] flex flex-col justify-end">
      <ul className="bg-green-100 mb-24 overflow-y-auto">
        {chatList.length === 0
          ? "채팅이 없습니다."
          : chatList.map((v, i) => (
              <ChatCard key={i} answer={v.answer} question={v.question} />
            ))}
      </ul>
    </div>
  );
};

export default ChatView;
