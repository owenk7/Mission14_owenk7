import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import the json movie data
// import MovieData from './MovieData.json';
import MovieList from './MovieList';

// home page
function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Podcasts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movielist">
                Movie List
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <body>
        <div className="container">
          <center>
            <h1>Welcome to Joel Hilton's Film Collection!</h1>
            <img src="JoelHiltonHeadshot.jpg" alt="Joel Hilton" />
            <br />
            <br />
            <h3>This is Joel Hilton's new and improved movie website.</h3>
            <h3>Navigate using the links in the upper left corner!</h3>
          </center>
        </div>
      </body>
    </div>
  );
}

// podcast link page
function Podcasts() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movielist">
                Movie List
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <body>
        <center>
          <h3>
            <a target="_blank" href="https://baconsale.com/" rel="noreferrer">
              Click me to check out Joel's latest podcasts!
            </a>
          </h3>
        </center>
      </body>
    </div>
  );
}

// Assignment 13 Movie List
// Movie list page with custom syles
// function MovieList() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 Podcasts
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <body>
//         <center>
//           <h3>Joel Hilton's Latest Movie Reviews:</h3>

//           <table className="movie-table">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Category</th>
//                 <th>Year</th>
//                 <th>Director</th>
//                 <th>Rating</th>
//                 <th>Edited</th>
//               </tr>
//             </thead>
//             <tbody>
//               {MovieData.MovieData.map((movie, index) => (
//                 <tr key={index}>
//                   <td>{movie.Title}</td>
//                   <td>{movie.Category}</td>
//                   <td>{movie.Year}</td>
//                   <td>{movie.Director}</td>
//                   <td>{movie.Rating}</td>
//                   <td>{movie.Edited}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </center>
//       </body>
//     </div>
//   );
// }

// routes to each of the pages
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about" element={<Podcasts />} />
          <Route path="/" element={<Home />} />
          <Route path="/movielist" element={<MovieList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// notes from videos just to have them all in the same place.
// // go button function from videos
// function GoButton() {
//   const [count, setCount] = React.useState(0);
//   // can also pass increment into the onCLick
//   const increment = () => setCount(count + 1);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>GO!</button>
//       <br />
//       <label>{count}</label>
//     </div>
//   );
// }

// function AmountofGo(props) {
//   return <label>{props.var}</label>;
// }
// add this to App()
// cost [const, setCount] = useState(0);

// generate a random number
// function Rando() {
//   return (
//     <div>
//       <h3>Random Number: {Math.random()}</h3>
//     </div>
//   );
//
// }
