import React from "react";

class Pomo extends React.Component{
    constructor(){
        super();

        this.state = {
            breakLength: 5,
            sessionLength: 25
        }
    };


    render() {
        return(
            <main>
                <h1>Pomodoro Kuroku</h1>
            </main>
        )
        
    };
};

export default Pomo;
