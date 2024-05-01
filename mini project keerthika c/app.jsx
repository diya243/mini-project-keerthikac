import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to My React Website</h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <h2>About Us</h2>
            <p>We are a team of passionate developers creating awesome React applications.</p>
          </section>
          <section>
            <h2>Contact Us</h2>
            <p>Email: contact@example.com</p>
            <p>Phone: 123-456-7890</p>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 My React Website. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));