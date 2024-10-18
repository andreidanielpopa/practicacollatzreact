import React, { Component } from 'react'

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/collatz/33'>Collatz 33</a></li>
                    <li><a href='/collatz/3'>Collatz 3</a></li>
                    <li><a href='/collatz/54'>Collatz 54</a></li>
                    <li><a href='/collatz/23'>Collatz 23</a></li>
                    <li><a href='/noesxistenideblas'>Not Found</a></li>
                </ul>
            </div>
        )
    }
}
