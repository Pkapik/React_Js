import { useParams } from 'react-router-dom'
import { MessageList } from "../components/MessageList/MessageList"
import { ChatsList } from "..//components/ChatsList/ChatsList"
import styles from './Pages.module.css'
import { WithCLasses } from '../HOC/WithCLasses'
import { Message } from '../components/Message'

export function ChatsPage ({messageDB, chats}) {
  
  const {chatId} = useParams()
  const MessageListWithClass = WithCLasses(MessageList)
  const messagesChat = chats.find((chat) => chat?.name === chatId)

  const messages = Object.entries(messagesChat.messages).map((mes) => ({
    id: mes[0],
    text: mes[1].text,
    author: mes[1].author,
  }))

  return (
    <>
        <h1>Welcome to chat!</h1>
        <ChatsList chats={chats} messageDB={messageDB}/>
        <div className={styles.messageStyle}>
          <div>
          </div>
          <div className="styles.listStyle">
            <MessageListWithClass
              messages={chatId ? messages : []} 
              classes={styles.border}
            />
          </div>
        </div>
        <Message />

    </>
  )
}