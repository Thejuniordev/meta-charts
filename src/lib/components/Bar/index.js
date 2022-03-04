import React from 'react';

import './Bar.css';

const Bar = () => (
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
            <ul className='columns__lists'>
                <li>
                    <span className='columns__lists--caption'>Novos Clientes</span>
                    <span className='columns__lists--bar' style={{height: '100%'}}>
                        <span className='columns__lists--bar-value'>200</span>
                        <span className='column__tooltip'>100%</span>
                    </span>
                </li>
                <li>
                    <span className='columns__lists--caption'>Visita</span>
                    <span className='columns__lists--bar' style={{height: '80.8%'}}>
                        <span className='columns__lists--bar-value'>189</span>
                        <span className='column__tooltip'>80,8%</span>
                    </span>
                </li>
                <li>
                    <span className='columns__lists--caption'>Proposta</span>
                    <span className='columns__lists--bar' style={{height: '50.8%'}}>
                        <span className='columns__lists--bar-value'>189</span>
                        <span className='column__tooltip'>50,8%</span>
                    </span>
                </li>
                <li>
                    <span className='columns__lists--caption'>Garantia</span>
                    <span className='columns__lists--bar' style={{height: '30.8%'}}>
                        <span className='columns__lists--bar-value'>189</span>
                        <span className='column__tooltip'>30,8%</span>
                    </span>
                </li>
                <li>
                    <span className='columns__lists--caption'>Formalização</span>
                    <span className='columns__lists--bar' style={{height: '21.8%'}}>
                        <span className='columns__lists--bar-value'>189</span>
                        <span className='column__tooltip'>21,8%</span>
                    </span>
                </li>
                <li>
                    <span className='columns__lists--caption'>Concluídos</span>
                    <span className='columns__lists--bar' style={{height: '7.58%'}}>
                        <span className='columns__lists--bar-value'>189</span>
                        <span className='column__tooltip'>7,58%</span>
                    </span>
                </li>
            </ul>
        </div>
)

export default Bar;