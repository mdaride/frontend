import React from 'react'

export default props => (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container'>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">
                <i className='fa fa-calendar-check-o'></i>Todo                
            </a>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#/todos">Todo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#/about">Sobre</a>
                </li>
                </ul>
                
            </div>
        </div>
    </nav>





/*

    <nav className='navbar navbar-light bg-light'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <i className='fa fa-calendar-check-o'></i> TodoApp
                </a>
            </div>
                
            <div id='navbarText' className='navbar-collapse collapse'>
                <ul className="navbar-nav mr-auto">
                    <li><a href='#/todos'>Tarefas</a></li>
                    <li><a href='#/about'>Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
 */   
)