import React from 'react';
import Swal from 'sweetalert2';
import './App.css';

function App() {
  const handleHello = () => {
    Swal.fire({
      title: 'Thông điệp',
      text: 'xin chào',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  };

  const handleGoodbye = () => {
    Swal.fire({
      title: 'Thông điệp',
      text: 'tạm biệt',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dự án React Git Training</h1>
        <h3>Chào mừng bạn đến với bài tập Git</h3>
        <button onClick={handleHello}>Nhấn để hiển thị "xin chào"</button>
        <button onClick={handleGoodbye}>Nhấn để hiển thị "tạm biệt"</button>
      </header>
    </div>
  );
}

export default App;