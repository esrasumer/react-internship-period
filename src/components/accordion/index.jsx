import { useState } from 'react'
import data from './data'
import './style.css'

export default function Accordion() {
    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId);
        setSelected(getCurrentId);
    }
    return (
        <div className='wrapper'>
            <button onClick={()=>handleSingleSelection()}>enabled Multi Selection</button>
            <div className='accordion'>
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item">
                            <div
                                onClick={() => handleSingleSelection(dataItem.id)}
                                className="title">
                                <h3>{dataItem.question}</h3>
                                <div>+</div>
                            </div>
                            <div>
                                {selected === dataItem.id ?
                                    <div className='content'>
                                        {dataItem.answer}
                                    </div>
                                    : null}
                            </div>
                        </div>
                    ))
                ) : (
                    <div>data yok</div>
                )}
            </div>
        </div>
    )
}