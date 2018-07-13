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
            displayCalc:'block'
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
        handleClick9 = (e)=>{
            e.preventDefault();
            this.setState({
                displayCalc:this.state.displayCalc==='none'?'block':'none'
            })

        }
        render() {
            let firstAbs1 = Number(this.state.input1),
                secondAbs1 = Number(this.state.input2),
                fourthAbs1 = Number(this.state.input3),
                fifthAbs1 = Number(this.state.input4),
                firstAbs2 = Number(this.state.input5),
                secondAbs2 = Number(this.state.input6),
                fourthAbs2 = Number(this.state.input7),
                fifthAbs2 = Number(this.state.input8);

            //obliczanie średnich
            let firstAbs = (firstAbs1 + firstAbs2)/2;
            let secondAbs = (secondAbs1 + secondAbs2)/2;
            let fourthAbs = (fourthAbs1 + fourthAbs2)/2;
            let fifthAbs = (fifthAbs1 + fifthAbs2)/2;

            let chlorWolny = firstAbs.toFixed(2);
            let chlorOgolny = secondAbs.toFixed(2);
            let chlorZwiazany = (secondAbs - firstAbs).toFixed(2);
            let mono = (fourthAbs - firstAbs).toFixed(2);
            let di = (secondAbs - (2*(fifthAbs)) + fourthAbs).toFixed(2);
            let tri = (2*(fifthAbs - fourthAbs)).toFixed(2);

            let resultDiv;
            resultDiv =
                    <table style={{display:this.state.displayCalc}}>
                        <tbody>
                            <tr>
                                <td>Chlor wolny </td>
                                <td>{chlorWolny} mg/dm<sup>3</sup></td>
                            </tr>
                            <tr>
                                <td>Chlor ogólny </td>
                                <td>{chlorOgolny} mg/dm<sup>3</sup></td>
                            </tr>
                            <tr>
                                <td>Chlor związany </td>
                                <td>{chlorZwiazany} mg/dm<sup>3</sup></td>
                            </tr>
                            <tr>
                                <td>Monochloramina </td>
                                <td>{mono} mg/dm<sup>3</sup></td>
                            </tr>
                            <tr>
                                <td>Dichloramina </td>
                                <td>{di} mg/dm<sup>3</sup></td>
                            </tr>
                            <tr>
                                <td>Trichloramina </td>
                                <td>{tri} mg/dm<sup>3</sup></td>
                            </tr>
                        </tbody>
                    </table>
                    ;

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
                            <input type="submit" id="result" value="Oblicz" onClick={this.handleClcik9}/>
                        </label>
                        {resultDiv}
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


