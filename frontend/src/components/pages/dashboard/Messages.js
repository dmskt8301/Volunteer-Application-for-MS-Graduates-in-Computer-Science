import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import fetch from '../../../util/fetch'
import notify from '../../../util/notify'
import { renderImage } from '../../../common/Avatar'
import moment from 'moment'
import { fetchChatsList } from '../../../slice/appSlice'

export default function Chat() {
  const dispatch = useDispatch()
  const { appUser, chatsList } = useSelector(state => state.app)
  const [currentChatId, setCurrentChatId] = React.useState(null)
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState([])
  const [users, setUsers] = React.useState([])
  const [search, setSearch] = React.useState('')
  const [searchResults, setSearchResults] = React.useState([])
  const scrollToBottom = React.useRef(null)

  const scrollToBottomOfMessages = () => {
    if (scrollToBottom.current) {
      scrollToBottom.current.scrollIntoView({ behavior: 'smooth' });
      scrollToBottom.current.scrollTop = scrollToBottom.current.scrollHeight;
    }
  };
  
  const fetchMessages = async receiverId => {
    setCurrentChatId(receiverId)
    try {
      const { data } = await fetch.get({
        url: `/api/chat/${appUser.id}/${receiverId}`,
      })
      // sort data by id ascending
      setMessages(data.data.sort((a, b) => a.id - b.id))
      scrollToBottomOfMessages();
    } catch (error) {
      notify({
        type: 'error',
        message: error.message || 'Something went wrong',
      })
    }
  }

  const sendMessage = async e => {
    e.preventDefault()
    try {
      await fetch.post({
        url: `/api/chats`,
        data: {
          senderId: appUser.id,
          receiverId: currentChatId,
          message,
          status: 'unread',
        },
      })
      setMessage('')
      fetchMessages(currentChatId)
      fetchChatsList()
    } catch (error) {
      notify({
        type: 'error',
        message: error.message || 'Something went wrong',
      })
    }
  }

  const fetchUsers = async () => {
    try {
      const { data } = await fetch.get({
        url: `/api/users`,
      })
      setUsers(data.users)
    } catch (error) {
      notify({
        type: 'error',
        message: error.message || 'Something went wrong',
      })
    }
  }

  const handleSearch = value => {
    setSearch(value)
    if (value) {
      const results = users.filter(user =>
        user.name.toLowerCase().includes(value.toLowerCase())
      )
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }

  React.useEffect(() => {
    dispatch(fetchChatsList())
  }, [currentChatId])

  React.useEffect(() => {
    fetchUsers()
  }, [])

  React.useEffect(() => {
    scrollToBottomOfMessages();
  }, [messages]);

  return (
    <div
      className="middle-sidebar-left bg-white dark-bg-transparent mr-3 pr-0"
      style={{ height: '88vh' }}
    >
      <div className="row">
        <div className="col-lg-6 col-xl-4 col-md-6 chat-left scroll-bar border-right-light pl-4 pr-4">
          <form action="#" className="mt-0 pl-3 pt-3">
            <div className="search-form">
              <i className="ti-search font-xs" />
              <input
                type="text"
                className="form-control text-grey-500 mb-0 bg-greylight border-0"
                placeholder="Search here."
                value={search}
                onChange={e => handleSearch(e.target.value)}
              />
            </div>
          </form>
          <div className="section full mt-2 mb-2 pl-3">
            <ul className="list-group list-group-flush">
              {searchResults.length
                ? searchResults.map(search => (
                    <li
                      key={search.id}
                      className={`list-group-item no-icon pl-2`}
                      style={{
                        cursor: 'pointer',
                        backgroundColor:
                          currentChatId === search.id ? '#f2f2f2' : 'white',
                      }}
                      onClick={() => {
                        fetchMessages(search.id)
                        setSearch('')
                        setSearchResults([])
                      }}
                    >
                      <figure className="avatar float-left mb-0 mr-3">
                        <img
                          src={renderImage(search.image)}
                          alt="user-7.png"
                          className="w45"
                        />
                      </figure>
                      <h3 className="fw-700 mb-0 mt-1">
                        <Link className="font-xsss text-grey-900 text-dark d-block">
                          {search.name}
                        </Link>
                      </h3>
                      <span className="d-block">{search.message}</span>
                    </li>
                  ))
                : chatsList.map(chat => (
                    <li
                      key={chat.id}
                      className={`list-group-item no-icon pl-2`}
                      style={{
                        cursor: 'pointer',
                        backgroundColor:
                          currentChatId === chat.id ? '#f2f2f2' : 'white',
                      }}
                      onClick={() => fetchMessages(chat.id)}
                    >
                      <figure className="avatar float-left mb-0 mr-3">
                        <img
                          src={renderImage(chat.image)}
                          alt="user-7.png"
                          className="w45"
                        />
                      </figure>
                      <h3 className="fw-700 mb-0 mt-1">
                        <Link className="font-xsss text-grey-900 text-dark d-block">
                          {chat.name}
                        </Link>
                      </h3>
                      <span className="d-block">{chat.message}</span>
                      {chat.unread_count > 0 && (
                        <span className="badge badge-warning text-white badge-pill">
                          {chat.unread_count}
                        </span>
                      )}
                    </li>
                  ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-xl-8 col-md-6 pl-0 d-none d-lg-block d-md-block">
          {currentChatId ? (
            <>
              <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar" ref={scrollToBottom}>
                <div className="chat-body p-3">
                  <div className="messages-content">
                    {messages.map(message => {
                      if (message.sender.id === appUser.id) {
                        return (
                          <div
                            key={message.id}
                            className="message-item outgoing-message"
                          >
                            <div className="message-user">
                              <figure className="avatar">
                                <img
                                  alt="ig"
                                  src={renderImage(appUser.image)}
                                />
                              </figure>
                              <div>
                                <h5>{appUser.name}</h5>
                                <div className="time">
                                  {moment(message.timestamp).fromNow()}
                                </div>
                              </div>
                            </div>
                            <div className="message-wrap">
                              {message.message}
                            </div>
                          </div>
                        )
                      } else {
                        return (
                          <div key={message.id} className="message-item">
                            <div className="message-user">
                              <figure className="avatar">
                                <img
                                  src={renderImage(message.sender.image)}
                                  alt="user-9.png"
                                />
                              </figure>
                              <div>
                                <h5>{message.sender.name}</h5>
                                <div className="time">
                                  {moment(message.timestamp).fromNow()}
                                </div>
                              </div>
                            </div>
                            <div className="message-wrap">
                              {message.message}
                            </div>
                          </div>
                        )
                      }
                    })}

                    <div
                      style={{
                        visibility: 'hidden',
                      }}
                      className="py-4"
                    >
                      Hello
                    </div>

                    <div className="clearfix" />
                  </div>
                </div>
              </div>
              <div
                className="chat-bottom dark-bg p-3 shadow-xss"
                style={{ width: '98%' }}
              >
                <form
                  onSubmit={sendMessage}
                  className="chat-form d-flex align-items-center"
                >
                  <div className="form-group">
                    <input
                      className="form-control"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      type="text"
                      placeholder="Start typing.."
                    />
                  </div>
                  <button type="submit" className="bg-current">
                    <i className="ti-arrow-right text-white" />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="card-body p-4 w-100 text-center">
              <h4 className="font-xs  fw-600 ml-4 mb-0 mt-5">Select a chat</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
