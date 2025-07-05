// Chat.jsx
import React, { useState, useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { FiRefreshCcw, FiCopy, FiSend } from 'react-icons/fi'
import './Chat.css'

export default function Chat() {
  const [messages, setMessages] = useState([
    { from: 'assistant', text: 'Hello! How can I assist you today?' }
  ])
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  // auto–scroll whenever messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    const trimmed = input.trim()
    if (!trimmed) return

    // 1) add the user’s message
    setMessages(m => [...m, { from: 'user', text: trimmed }])
    setInput('')

    try {
      // 2) call your API
      const res = await fetch('https://api.s1mpleai.org/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: trimmed }),
      })
      const { result } = await res.json()

      // 3) split on the ANSI-stripped “Finished chain.\x1b[0m” marker
      const SPLIT_REGEX = /Finished chain\.\x1b\[0m/
      let before = null
      let after = result

      if (SPLIT_REGEX.test(result)) {
        const [b, ...rest] = result.split(SPLIT_REGEX)
        before = b.trim()
        after = rest.join('').trim()
      }

      // 4) push a single assistant message object that may contain both parts
      setMessages(m => [
        ...m,
        { from: 'assistant', before, after }
      ])
    } catch (err) {
      console.error(err)
      setMessages(m => [
        ...m,
        { from: 'assistant', text: 'Sorry, something went wrong.' }
      ])
    }
  }

  const onKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <span className="header-text">Type a message and press enter...</span>
        <div className="header-icons">
          <FiRefreshCcw className="icon" title="Refresh" />
          <FiCopy className="icon" title="Copy" />
        </div>
      </div>

      <div className="messages" ref={scrollRef}>
        {messages.map((m, i) => (
          <div
            key={i}
            className={`message-row ${m.from === 'user' ? 'user' : 'assistant'}`}
          >
            <div className="bubble">
              {m.from === 'assistant' ? (
                // if we split it, render a collapsible + markdown
                m.before != null ? (
                  <>
                    <details>
                      <summary><strong>AI Steps</strong></summary>
                      <ReactMarkdown>{m.before}</ReactMarkdown>
                    </details>
                    <ReactMarkdown>{m.after}</ReactMarkdown>
                  </>
                ) : (
                  // otherwise just plain markdown
                  <ReactMarkdown>{m.text || m.after}</ReactMarkdown>
                )
              ) : (
                // user message
                m.text
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="send-btn" title="Send">
          <FiSend />
        </button>
      </div>
    </div>
  )
}
