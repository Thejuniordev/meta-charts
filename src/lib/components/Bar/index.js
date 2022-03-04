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
    return(
    <div className='lines'>
            <ul className='lines__lists'>
                <li>
                    <span className='lines__lists--num'>200</span>
                    <span className='line'></span>
                </li>
                <li>
                    <span className='lines__lists--num'>150</span>
                    <span className='line'></span>
                </li>
                <li>
                    <span className='lines__lists--num'>100</span>
                    <span className='line'></span>
                </li>
                <li>
                    <span className='lines__lists--num'>50</span>
                    <span className='line'></span>
                </li>
            </ul>
            {columnList}
        </div>
    )
            }
export default Bar;