import React, { Component } from 'react'

export default class Collatz extends Component {

    state = {
        listanumeros: [],
    }

    generarCollatz = () => {
        let num = parseInt(this.props.numero);
        let lista = [];
        do {
            if (num % 2 === 0) {
                num = num / 2;
                lista.push(num);
            } else {
                num = (num * 3) + 1;
                lista.push(num);
            }
        } while (num !== 1)

        this.setState({
            listanumeros: lista,
        })
    }

    componentDidMount = () => {
        this.generarCollatz();
    }

    render() {
        return (
            <div>
                <h1>Collatz</h1>
                <ul>
                    {this.state.listanumeros.map((numeropintar, index) => {
                        //Nunca debe estar vacio, siempre de contener un return
                        return (<li key={index}>{numeropintar}</li>)
                    })}
                </ul>
            </div>
        )
    }
}
