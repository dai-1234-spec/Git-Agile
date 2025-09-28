import React from 'react';
import Swal from 'sweetalert2';
import './App.css'; // Giữ nguyên để style cơ bản

function App() {
  const handleClick = () => {
    Swal.fire({
      title: 'Thông điệp',
      text: 'xin chào',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dự án React Git Training</h1>
        <button onClick={handleClick}>
          Nhấn để hiển thị "xin chào"
        </button>
      </header>
    </div>
  );
}

export default App;