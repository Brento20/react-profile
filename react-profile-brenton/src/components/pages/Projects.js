import React from 'react';

export default function project() {
  return (
    <div id="projectBox">
                <h2>RE:Vamp</h2>

                <text>{`
                REvamp was a group project that I was lucky enough to project manage, we focused on empowering our users to build, repair and improve everyday things in there lives. \n
                  
                We used a combination of NPM packages to build the server side of this app including express.js and sequelize to manage our routes, \n
                handlebars to compile the templates and nodemailer to send confirmation emails when a user submits tips to the database. 
                
                This project was made to be shareable and future developments would focus heavily around social media integration.
                
                Eventually merit points would be acquired by users, adding permissions to their user account, allowing them to approve new submissions and post comments on current projects. 
                Projects would also have a rudimentary voting system allowing us to display first, projects that have gained a lot of attention.  `}</text>

                <p>The full version is currently viewable on <a href="https://revampyourlife.herokuapp.com/" >Heroku</a> and the repository is viewable by going to our shared <a href="https://github.com/Brento20/revamp" >Github profile.</a> </p>
                </div>
  );
}
