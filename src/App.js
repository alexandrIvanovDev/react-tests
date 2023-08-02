import {useEffect, useState} from 'react';

function App() {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [value, setValue] = useState('')

    const onClick = () => setToggle(state => !state)

    useEffect(() => {
        setTimeout(() => {
            setData({})
        }, 100)
    }, []);

    return (
        <div>
            <h1 data-testid='value-element'>{value}</h1>
            {toggle && <div data-testid='toggle-element'>toggle</div>}
            {data && <div style={{color: 'red'}} className='block'>data element</div>}
            <h1>App Component</h1>
            <button onClick={onClick} data-testid='toggle-btn'>Click</button>
            <input
                type="text"
                placeholder="input placeholder..."
                data-testid='input'
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}

export default App;
