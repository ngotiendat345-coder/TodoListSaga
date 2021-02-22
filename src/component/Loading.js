import React from 'react';
import {useSelector} from 'react-redux'
import styled from 'styled-components';

function Loading(){
    const {fetching} = useSelector(state=>state.TodoReducer);
    
        return (
            <Wrapper fetching={fetching}>
                <img src="./img/loadingSpinner.gif"/>
            </Wrapper>
        )
  
}

const Wrapper = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background:${props =>props.fetching ? 'rgba(255,255,255,1)' :'rgba(255,255,255,0)'}
    background:rgba(255,255,255,1);
    z-index:${props =>props.fetching ?'10':'-1'};
    transition:all 0.5s linear;
    img{
        opacity:${props =>props.fetching ?'1':'0'};
        height:100%;
        width:100%;
        transition:all 0.5s linear;
    }
`
export default Loading;