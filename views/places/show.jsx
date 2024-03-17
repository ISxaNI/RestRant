const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            <h3>Not Rated</h3>
            <h2>Description</h2>
            <h3>Located in {data.city}, {data.state}</h3>
            <h2>Comments</h2>
            <h3>No Comments Yet!</h3>
          </main>
        </Def>
    )
}

module.exports = show

