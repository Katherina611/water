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
        render() {
            return (
                <form>
                    <fieldset>Obliczenia chloramin<br></br>
                        <label>
                            <input type="number" id="c1" placeholder="Podaj absorbancje 1"/>
                            <input type="number" id="c1-2" placeholder="Podaj absorbancje 1'"/>
                        </label><br></br>
                        <label>
                            <input type="number" id="c2" placeholder="Podaj absorbancje 2"/>
                            <input type="number" id="c2-2" placeholder="Podaj absorbancje 2'"/>
                        </label><br></br>
                        <label>
                            <input type="number" id="c4" placeholder="Podaj absorbancje 3"/>
                            <input type="number" id="c4-2" placeholder="Podaj absorbancje 3'"/>
                        </label><br></br>
                        <label>
                            <input type="number" id="c5" placeholder="Podaj absorbancje 4"/>
                            <input type="number" id="c5-2" placeholder="Podaj absorbancje 4'"/>
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


