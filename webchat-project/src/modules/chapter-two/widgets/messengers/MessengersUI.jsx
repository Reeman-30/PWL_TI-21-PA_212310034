import React, { useEffect, useMemo, useRef, useState } from "react";
import { ButtonPrimary, ButtonSecondary } from "./components/ButtonsUI";
import ChatBody from "./components/ChatBody";
import moment from "moment";

export default function MessengersUI({ profile, selectedChat, selectedUser }) {
  const chatArr = [
    {
      id: 1,
      message: "Hi",
      from: "Febry",
      date: "2024-02-22 10:30:00",
    },

    {
      id: 2,
      message: "Iya?",
      from: "Isnan",
      date: "2024-02-22 10:35:00",
    },

    {
      id: 3,
      message: "Apakah itu Micro-Frontend?",
      from: "Febry",
      date: "2024-02-22 10:37:00",
    },

    {
      id: 4,
      message: "Hah?",
      from: "Isnan",
      date: "2024-02-22 10:40:00",
    },

    {
      id: 5,
      message: "Tf!?",
      from: "Isnan",
      date: "2024-02-22 10:40:00",
    },

    {
      id: 6,
      message:
        "Arsitektur pada bagian FrontEnd aplikasi yang berpusat pada independensi suatu fitur dengan fitur lainnya",
      from: "Febry",
      date: "2024-02-22 10:42:00",
    },

    {
      id: 7,
      message: "Bruh",
      from: "Isnan",
      date: "2024-02-22 10:43:00",
    },
  ];

  const [myChat, setMyChat] = useState([]);
  const [search, setSearch] = useState([]);
  const [writeChat, setWriteChat] = useState("");
  const endOfMessageRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessageRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const HandlerSendChat = (e) => {
    e.preventDefault();

    const objChat = {
      id: 100,
      message: writeChat,
      from: "Febry",
      date: moment().format("YYYY-MMM-DD HH:mm"),
    };

    setMyChat([...myChat, objChat]);
    setWriteChat("");
  };

  const ResultMessageData = useMemo(() => {
    let computedData = myChat.map((msg) => ({
      ...msg,
      date_fmt: moment(msg.date).format("YYYY-MM-DD"),
      isOutgoing: msg.from_id === profile.id,
    }));
    if (search) {
      computedData = computedData.filter((listData) => {
        return Object.keys(listData).some((key) =>
          listData[key].toString().toLowerCase().includes(search)
        );
      });
    }
    return computedData;
  }, [myChat, profile.id]);

  useEffect(() => {
    setMyChat(selectedChat);
    scrollToBottom();
  }, [selectedChat]);

  return (
    <div className="card my-3">
      <div className="card-header d-flex justify-content-between flex-row">
        <h5 className="card-title my-auto">
          <span className="fw-bold mb-2" style={{ color: "gray" }}>
            Chat
          </span>
        </h5>

        <div className="card-toolbar">
          <ButtonSecondary
            items={{
              title: "Create new chat",
              btn_class: "btn-link",
            }}
          >
            <i className="bi bi-pencil-square"></i>
          </ButtonSecondary>
        </div>
      </div>

      <div className="card-body p-0">
        {ResultMessageData.length > 0 ? (
          <>
            <div
              className="chat-message px-2 h-100"
              style={styleMessage.chatBox}
            >
              <ChatBodyWithGrouped data={ResultMessageData} profile={profile} />
              <div ref={endOfMessageRef} />
            </div>
            <div className="chat-send bg-light p-3">
              <form
                method="post"
                autoComplete="off"
                onSubmit={(e) => HandlerSendChat(e)}
              >
                ...
              </form>
            </div>
          </>
        ) : (
          <EmptyChat />
        )}

        <div className="chat-send bg-light p-3">
          <form
            method="post"
            autoComplete="off"
            onSubmit={(e) => HandlerSendChat(e)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <input
                type="text"
                className="form-control me-2"
                autoFocus={true}
                value={writeChat}
                onChange={(e) => setWriteChat(e.target.value)}
              />

              <ButtonPrimary
                items={{
                  title: "Create new chat",
                  btn_class: "btn-icon",
                }}
              >
                <i className="bi bi-send"></i>
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const EmptyChat = () => {
  return (
    <div>
      <div className="info text-center">
        <h1>No Conversations</h1>
        <p>You didn't made any conversation yet, please select username</p>
        <span className="badge badge-primary">Start a chat</span>
      </div>
    </div>
  );
};

const styleMessage = {
  chatBox: {
    minHeight: "200px",
    maxHeight: "45vh",
    overflowY: "auto",
  },
};
