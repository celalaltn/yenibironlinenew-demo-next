"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

const Messages = () => {
  const { user } = useSelector((state) => state.AuthReducer || {});
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Burada gerçek bir API çağrısı yapılabilir
    // Şimdilik örnek veriler kullanıyoruz
    setTimeout(() => {
      const mockConversations = [
        {
          id: 1,
          user: {
            id: 101,
            name: "Ahmet Yılmaz",
            avatar: "/images/team/team-01.jpg",
            online: true
          },
          messages: [
            { id: 1, sender: "user", text: "Merhaba, kursunuz hakkında bilgi almak istiyorum.", time: "10:30" },
            { id: 2, sender: "admin", text: "Merhaba Ahmet, hangi kursumuz hakkında bilgi almak istersiniz?", time: "10:32" },
            { id: 3, sender: "user", text: "React kursu hakkında bilgi almak istiyorum. Başlangıç seviyesi için uygun mu?", time: "10:35" },
            { id: 4, sender: "admin", text: "Evet, React kursumuz başlangıç seviyesinden ileri seviyeye kadar tüm konuları kapsamaktadır. Size detaylı bilgi gönderebilirim.", time: "10:40" }
          ],
          unread: 0,
          lastMessage: "10:40"
        },
        {
          id: 2,
          user: {
            id: 102,
            name: "Mehmet Demir",
            avatar: "/images/team/team-02.jpg",
            online: false
          },
          messages: [
            { id: 1, sender: "user", text: "Kurs ücretleri hakkında bilgi alabilir miyim?", time: "Dün" },
            { id: 2, sender: "admin", text: "Merhaba Mehmet, hangi kursumuz için fiyat bilgisi istiyorsunuz?", time: "Dün" },
            { id: 3, sender: "user", text: "Python ve Veri Bilimi kursu için.", time: "Dün" }
          ],
          unread: 1,
          lastMessage: "Dün"
        },
        {
          id: 3,
          user: {
            id: 103,
            name: "Ayşe Kaya",
            avatar: "/images/team/team-03.jpg",
            online: true
          },
          messages: [
            { id: 1, sender: "user", text: "Merhaba, ödeme konusunda bir sorun yaşıyorum.", time: "Pazartesi" },
            { id: 2, sender: "admin", text: "Merhaba Ayşe, ne tür bir sorun yaşıyorsunuz?", time: "Pazartesi" },
            { id: 3, sender: "user", text: "Kredi kartı ile ödeme yapmaya çalışıyorum ama hata alıyorum.", time: "Pazartesi" },
            { id: 4, sender: "admin", text: "Hangi hata mesajını alıyorsunuz? Ayrıca farklı bir ödeme yöntemi denemek ister misiniz?", time: "Pazartesi" }
          ],
          unread: 0,
          lastMessage: "Pazartesi"
        },
        {
          id: 4,
          user: {
            id: 104,
            name: "Fatma Şahin",
            avatar: "/images/team/team-04.jpg",
            online: false
          },
          messages: [
            { id: 1, sender: "user", text: "Merhaba, kurs sertifikası hakkında bilgi almak istiyorum.", time: "29 Haz" },
            { id: 2, sender: "admin", text: "Merhaba Fatma, kurslarımızı tamamladığınızda dijital sertifika alabilirsiniz.", time: "29 Haz" },
            { id: 3, sender: "user", text: "Sertifika uluslararası geçerliliğe sahip mi?", time: "29 Haz" }
          ],
          unread: 1,
          lastMessage: "29 Haz"
        },
        {
          id: 5,
          user: {
            id: 105,
            name: "Ali Yıldız",
            avatar: "/images/team/team-05.jpg",
            online: true
          },
          messages: [
            { id: 1, sender: "user", text: "Merhaba, kurs içeriğine erişim süresi ne kadar?", time: "25 Haz" },
            { id: 2, sender: "admin", text: "Merhaba Ali, kurslarımıza ömür boyu erişim sağlayabilirsiniz.", time: "25 Haz" },
            { id: 3, sender: "user", text: "Teşekkür ederim, bu harika bir haber!", time: "25 Haz" },
            { id: 4, sender: "admin", text: "Rica ederim, başka sorunuz var mı?", time: "25 Haz" }
          ],
          unread: 0,
          lastMessage: "25 Haz"
        }
      ];
      
      setConversations(mockConversations);
      setActiveConversation(mockConversations[0]);
      setLoading(false);
    }, 1000);
  }, []);

  // Konuşmaları filtrele
  const filteredConversations = conversations.filter(conversation => 
    conversation.user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Yeni mesaj gönder
  const sendMessage = (e) => {
    e.preventDefault();
    
    if (!newMessage.trim() || !activeConversation) return;
    
    const updatedConversations = conversations.map(conv => {
      if (conv.id === activeConversation.id) {
        const updatedMessages = [
          ...conv.messages,
          {
            id: conv.messages.length + 1,
            sender: "admin",
            text: newMessage,
            time: "Şimdi"
          }
        ];
        
        return {
          ...conv,
          messages: updatedMessages,
          lastMessage: "Şimdi"
        };
      }
      return conv;
    });
    
    setConversations(updatedConversations);
    setActiveConversation({
      ...activeConversation,
      messages: [
        ...activeConversation.messages,
        {
          id: activeConversation.messages.length + 1,
          sender: "admin",
          text: newMessage,
          time: "Şimdi"
        }
      ],
      lastMessage: "Şimdi"
    });
    
    setNewMessage("");
  };

  // Konuşma seç
  const selectConversation = (conversation) => {
    // Okunmamış mesajları okundu olarak işaretle
    const updatedConversations = conversations.map(conv => {
      if (conv.id === conversation.id) {
        return {
          ...conv,
          unread: 0
        };
      }
      return conv;
    });
    
    setConversations(updatedConversations);
    setActiveConversation(conversation);
  };

  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Mesajlar</h4>
          </div>
          
          <div className="row g-0">
            {/* Konuşma Listesi */}
            <div className="col-lg-4 col-md-12 col-12 border-end">
              <div className="message-list-wrap">
                <div className="search-box mb--20">
                  <input 
                    type="text" 
                    placeholder="Kullanıcı ara..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="message-list">
                  {loading ? (
                    Array(5).fill().map((_, index) => (
                      <div key={index} className="message-item placeholder-wave">
                        <div className="placeholder rounded-circle" style={{width: "50px", height: "50px"}}></div>
                        <div className="message-content w-100">
                          <div className="placeholder col-8 mb-2"></div>
                          <div className="placeholder col-6"></div>
                        </div>
                      </div>
                    ))
                  ) : (
                    filteredConversations.length > 0 ? (
                      filteredConversations.map(conversation => (
                        <div 
                          key={conversation.id} 
                          className={`message-item ${activeConversation?.id === conversation.id ? 'active' : ''}`}
                          onClick={() => selectConversation(conversation)}
                        >
                          <div className="avatar-wrap">
                            <div className="avatar">
                              <Image 
                                src={conversation.user.avatar} 
                                width={50} 
                                height={50} 
                                alt={conversation.user.name}
                                className="rounded-circle"
                              />
                              {conversation.user.online && (
                                <span className="online-status"></span>
                              )}
                            </div>
                          </div>
                          <div className="message-content">
                            <div className="name-time">
                              <h6 className="name">{conversation.user.name}</h6>
                              <span className="time">{conversation.lastMessage}</span>
                            </div>
                            <div className="last-message">
                              <p>{conversation.messages[conversation.messages.length - 1].text.substring(0, 30)}
                                {conversation.messages[conversation.messages.length - 1].text.length > 30 ? '...' : ''}
                              </p>
                              {conversation.unread > 0 && (
                                <span className="badge bg-primary rounded-pill">{conversation.unread}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="no-message text-center py-5">
                        <p>Konuşma bulunamadı</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            
            {/* Mesaj İçeriği */}
            <div className="col-lg-8 col-md-12 col-12">
              <div className="message-content-wrap">
                {activeConversation ? (
                  <>
                    <div className="message-header border-bottom p-3">
                      <div className="d-flex align-items-center">
                        <div className="avatar-wrap me-3">
                          <div className="avatar">
                            <Image 
                              src={activeConversation.user.avatar} 
                              width={50} 
                              height={50} 
                              alt={activeConversation.user.name}
                              className="rounded-circle"
                            />
                            {activeConversation.user.online && (
                              <span className="online-status"></span>
                            )}
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-0">{activeConversation.user.name}</h6>
                          <small className="text-muted">
                            {activeConversation.user.online ? 'Çevrimiçi' : 'Çevrimdışı'}
                          </small>
                        </div>
                      </div>
                    </div>
                    
                    <div className="message-body p-3" style={{height: "400px", overflowY: "auto"}}>
                      {activeConversation.messages.map(message => (
                        <div 
                          key={message.id} 
                          className={`message ${message.sender === 'admin' ? 'message-out' : 'message-in'}`}
                        >
                          <div className="message-bubble">
                            <div className="message-text">{message.text}</div>
                            <div className="message-time">{message.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="message-footer border-top p-3">
                      <form onSubmit={sendMessage} className="d-flex">
                        <input 
                          type="text" 
                          className="form-control me-2" 
                          placeholder="Mesajınızı yazın..." 
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <button type="submit" className="rbt-btn btn-sm btn-gradient">
                          <i className="feather-send"></i>
                        </button>
                      </form>
                    </div>
                  </>
                ) : (
                  <div className="no-conversation text-center py-5">
                    <div className="mb-4">
                      <i className="feather-message-circle" style={{fontSize: "48px"}}></i>
                    </div>
                    <h5>Mesajlarınızı görüntülemek için bir konuşma seçin</h5>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .message-item {
          display: flex;
          padding: 15px;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .message-item:hover, .message-item.active {
          background-color: #f5f5f5;
        }
        
        .avatar-wrap {
          position: relative;
          margin-right: 15px;
        }
        
        .online-status {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 12px;
          height: 12px;
          background-color: #28a745;
          border-radius: 50%;
          border: 2px solid #fff;
        }
        
        .message-content {
          flex: 1;
        }
        
        .name-time {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
        }
        
        .name {
          margin: 0;
        }
        
        .time {
          font-size: 12px;
          color: #6c757d;
        }
        
        .last-message {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .last-message p {
          margin: 0;
          font-size: 14px;
          color: #6c757d;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .message {
          margin-bottom: 15px;
          display: flex;
        }
        
        .message-in {
          justify-content: flex-start;
        }
        
        .message-out {
          justify-content: flex-end;
        }
        
        .message-bubble {
          max-width: 70%;
          padding: 10px 15px;
          border-radius: 18px;
          position: relative;
        }
        
        .message-in .message-bubble {
          background-color: #f5f5f5;
          border-bottom-left-radius: 5px;
        }
        
        .message-out .message-bubble {
          background-color: #e3f2fd;
          border-bottom-right-radius: 5px;
        }
        
        .message-text {
          margin-bottom: 5px;
        }
        
        .message-time {
          font-size: 11px;
          color: #6c757d;
          text-align: right;
        }
      `}</style>
    </>
  );
};

export default Messages;
