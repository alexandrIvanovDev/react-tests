import React, {useState} from 'react';

export const HelloWorld = () => {

    const [value, setValue] = useState('')
    const [visible, setVisible] = useState(false)

    const toggle = () => value === 'hello' && setVisible(prevState => !prevState)
    const onChange = (e) => setValue(e.target.value)

    return (
        <div>
            <input type="text" id='search' onChange={onChange}/>
            <button onClick={toggle} id='toggle'>TOGGLE</button>
            {visible && <h1 id='hello'>HELLO WORLD</h1>}
        </div>
    );
};