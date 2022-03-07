import React from 'react';

import './Bar.css';

  function Bar(props){
    const columnList = (
        <ul className='columns__lists'>
            {props.items.map((item) =>
                <li key={item.id}>
                    <span className='columns__lists--caption'>{item.caption}</span>
                    <span className='columns__lists--bar' style={{height: item.percent}}>
                        <span className='columns__lists--bar-value'>{item.value}</span>
                        <span className='column__tooltip'>{item.percent}</span>
                    </span>
                </li>
            )}
        </ul>
    )

    const lineList = (
        <ul className='lines__lists'>
            {props.lines.map((line) => 
                <li key={line.id}>
                    <span className='lines__lists--num'>{line.value}</span>
                    <span className='line'></span>
                </li>
            )}
        </ul>
    )
    return(
        <div className='lines'>
            {lineList} 
            {columnList}
        </div>
    )
            }
export default Bar;