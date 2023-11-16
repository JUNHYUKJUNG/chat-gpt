import ChatSideCard from "./ChatSideCard";

const ChatSide = ({ chatList }) => {
  return (
    <ul className="bg-gray-50 w-52 p-4">
      {chatList?.map((v, i) => (
        <ChatSideCard key={i} question={v.question} answer={v.answer} />
      ))}
    </ul>
  );
};

export default ChatSide;
