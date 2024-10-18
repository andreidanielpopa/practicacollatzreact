import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Homes from './Homes'
import NotFound from './NotFound';
import Collatz from './Collatz';

export default class Router extends Component {
    render() {
        function CollatzElement() {
            var { numero } = useParams();
            return (<Collatz numero={numero} />)
        }
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homes />} />
                    <Route path='/collatz/:numero' element={<CollatzElement />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
