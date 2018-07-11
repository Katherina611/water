import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/style.scss";
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

document.addEventListener('DOMContentLoaded', function() {
    class Calc extends React.Component {
        state = {
            input1:"",
            input2:"",
            input3:"",
            input4:"",
            input5:"",
            input6:"",
            input7:"",
            input8:"",
        };
        handleClcik1 =(e)=>{
            this.setState({
                input1:e.target.value,
            })
        }
        handleClcik2 =(e)=>{
            this.setState({
                input2:e.target.value,
            })
        }
        handleClcik3 =(e)=>{
            this.setState({
                input3:e.target.value,
            })
        }
        handleClcik4 =(e)=>{
            this.setState({
                input4:e.target.value,
            })
        }
        handleClcik5 =(e)=>{
            this.setState({
                input5:e.target.value,
            })
        }
        handleClcik6 =(e)=>{
            this.setState({
                input6:e.target.value,
            })
        }
        handleClcik7 =(e)=>{
            this.setState({
                input7:e.target.value,
            })
        }
        handleClcik8 =(e)=>{
            this.setState({
                input8:e.target.value,
            })
            console.log(e.target.value);
        }
        render() {
            return (
                <form>
                    <fieldset>Obliczenia chloramin<br></br>
                        <label>
                            <input type="number" id="c1" value={this.state.input1} placeholder="Podaj absorbancje 1" onChange={this.handleClcik1}/>
                            <input type="number" id="c1-2" value={this.state.input2} placeholder="Podaj absorbancje 1'" onChange={this.handleClcik2}/>
                        </label><br></br>
                        <label>
                            <input type="number" id="c2" value={this.state.input3} placeholder="Podaj absorbancje 2" onChange={this.handleClcik3}/>
                            <input type="number" id="c2-2" value={this.state.input4} placeholder="Podaj absorbancje 2'"onChange={this.handleClcik4}/>
                        </label><br></br>
                        <label>
                            <input type="number" id="c4" value={this.state.input5} placeholder="Podaj absorbancje 3" onChange={this.handleClcik5}/>
                            <input type="number" id="c4-2"  value={this.state.input6} placeholder="Podaj absorbancje 3'" onChange={this.handleClcik6}/>
                        </label><br></br>
                        <label>
                            <input type="number" id="c5" value={this.state.input7} placeholder="Podaj absorbancje 4" onChange={this.handleClcik7}/>
                            <input type="number" id="c5-2" value={this.state.input8} placeholder="Podaj absorbancje 4'" onChange={this.handleClcik8}/>
                        </label><br></br>
                        <label>
                            <input type="submit" id="result" value="Oblicz"/>
                        </label>
                        <div class="resultDiv"></div>
                    </fieldset>
                </form>
            )
        }
    }

    ReactDOM.render(
        <Calc/>,
        document.getElementById('app')
    )


});


