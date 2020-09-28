import React from 'react'
import './todo.css'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape'){
            props.handleClear()
        }

    }

    return (
        <div role='form' className='Todo'>
            <Grid cols='12 9 10'>            
                <input id='description' className='form-control' 
                    placeholder='Adicione uma tarefa'
                    onChange = {props.handleChange}
                    onKeyUp={keyHandler}
                    value = {props.description}></input>        
            </Grid>
    
            <Grid cols='12 3 2'>
                <div className='Button'>
                    <IconButton style={`primary ml-auto`} icon='plus'
                        onClick={props.handleAdd} ></IconButton>
                    <IconButton style={`info`} icon='search'
                        onClick={props.handleSearch}></IconButton>
                    <IconButton style={`secondary`} icon='close'
                        onClick={props.handleClear}></IconButton>
                </div>
            </Grid>
        </div>
    )
}



