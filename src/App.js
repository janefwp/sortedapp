// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, {useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const [updateAticles, setUpdateAticles]=useState(articles)

    const sortbyupvotedHandle =()=>{
        var sortarticles =articles.sort((a,b)=>{return b.upvotes - a.upvotes})
        setUpdateAticles([...sortarticles])
        // console.log(updateAticles)
    }
    const sortbydateHandle = ()=>{
        var datearticles = articles.sort((a,b)=>{return new Date(b.date) - new Date(a.date)})
        setUpdateAticles([...datearticles])
        // console.log(updateAticles)
    }
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={sortbyupvotedHandle}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={sortbydateHandle}>Most Recent</button>
            </div>
            <Articles articles={updateAticles}/>
        </div>
    );

}

export default App;

