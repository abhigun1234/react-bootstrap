import React, { Component } from 'react';

class Calc extends Component {
    constructor() {


        super()
        this.state = { val1: '', val2: '', op: '' }
        this.buttunClicked = this.buttunClicked.bind(this)

    }

    buttunClicked(e) {
        console.log("value", e.target.value)
        // console.log(isNaN(e.target.value))

        if (isNaN(e.target.value)) {
            this.setState({ op: e.target.value })


        }
        else {
            
            if (this.state.val1 == "") {
               
                console.log("e.target.value",e.target.value)
                // this.setState({  ,val1: e.target.value })
                console.log("state",this.state)
            }
            if(this.state.val1!=="" && this.state.val2==="" ){
                this.setState({ val2: e.target.value })
            }
            
        }
        // const myArr = str.split(" ");

     

    }

    render() {
        return (
            <div>
                <div class="calc container ">



                    <div class="calculator card">

                        <input type="text" class="calculator-screen z-depth-1" value={this.state.val1} disabled />

                        <div class="calculator-keys">

                            <button onClick={this.buttunClicked} type="button" class="operator btn btn-info" value="+">+</button>
                            <button onClick={this.buttunClicked} type="button" class="operator btn btn-info" value="-">-</button>
                            <button onClick={this.buttunClicked} type="button" class="operator btn btn-info" value="*">&times;</button>
                            <button onClick={this.buttunClicked} type="button" class="operator btn btn-info" value="/">&divide;</button>

                            <button onClick={this.buttunClicked} onClick={this.buttunClicked} type="button" class="operator btn btn-info" value="+">+</button>
                            <button onClick={this.buttunClicked} onClick={this.buttunClicked} type="button" value="7" class="btn btn-light waves-effect">7</button>
                            <button onClick={this.buttunClicked} type="button" value="8" class="btn btn-light waves-effect">8</button>
                            <button onClick={this.buttunClicked} type="button" value="9" class="btn btn-light waves-effect">9</button>


                            <button onClick={this.buttunClicked} type="button" value="4" class="btn btn-light waves-effect">4</button>
                            <button onClick={this.buttunClicked} type="button" value="5" class="btn btn-light waves-effect">5</button>
                            <button onClick={this.buttunClicked} type="button" value="6" class="btn btn-light waves-effect">6</button>


                            <button onClick={this.buttunClicked} type="button" value="1" class="btn btn-light waves-effect">1</button>
                            <button onClick={this.buttunClicked} type="button" value="2" class="btn btn-light waves-effect">2</button>
                            <button onClick={this.buttunClicked} type="button" value="3" class="btn btn-light waves-effect">3</button>


                            <button onClick={this.buttunClicked} type="button" value="0" class="btn btn-light waves-effect">0</button>
                            <button onClick={this.buttunClicked} type="button" class="decimal function btn btn-secondary" value=".">.</button>
                            <button onClick={this.buttunClicked} type="button" class="all-clear function btn btn-danger btn-sm" value="all-clear">AC</button>

                            <button onClick={this.buttunClicked} type="button" class="equal-sign operator btn btn-default" value="=">=</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calc;