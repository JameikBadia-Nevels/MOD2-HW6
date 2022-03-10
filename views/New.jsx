const React = require('react')

class New extends React.Component{
    render(){
        return (
        <div>New Page
            <h1>New Pokemon Page</h1>
            <form action = "/pokemon" method = "POST">
                Name:<input type = "text" name = "name" /> <br></br>
                Image:<input type = "text" name='img'/>
                <br/>
                <input type ="submit" name = "" value = "Create Pokemon"/>
            </form>
            <br/>
            <nav>
                <a href = '/pokemon'> Go Back </a>
            </nav>
        </div>
        )
    }
}

module.exports = New