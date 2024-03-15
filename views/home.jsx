const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <img src="./images/Ladle.jpg" alt="ladle noodle" height="400px" width="400px" />
              <p>Photo by Piotr Miazga on Unsplash</p>
              <a href="/places">
              <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  

module.exports = home
