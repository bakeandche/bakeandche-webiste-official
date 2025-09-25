import React from 'react'

export function TestComponent() {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f0f0f0',
      border: '2px solid #333',
      margin: '20px',
      textAlign: 'center'
    }}>
      <h2>Test Component Loaded Successfully!</h2>
      <p>If you can see this, React is working correctly.</p>
      <p>Current time: {new Date().toLocaleString()}</p>
    </div>
  )
}
