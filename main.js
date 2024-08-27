
// challenge บอกอายุ เป็น  _ปี _เดือน _วัน

function App() {
    const style1 = {
        backgroundColor: '#23272F',
        color: 'white',
        padding: '20px'
        
    }
    const style2 = {
        backgroundColor: '#343A46', //grey
        // backgroundColor: '#149ECA', //blue
        padding:'20px',
        borderRadius:'30px'
        
    }
    return (
        <div style={style1}>
            <h1>Quick Start</h1>
            <p>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
            <div style={style2}>
                <h2>You will learn</h2>
                <ul>
                    <li >How to create and nest components</li>
                    <li>How to add markup and styles</li>
                    <li>How to display data</li>
                    <li>How to render conditions and lists</li>
                    <li>How to respond to events and update the screen</li>
                    <li>How to share data between components</li>
                </ul>
            </div>
        </div>
    )
}



ReactDOM.createRoot(document.querySelector('#root')).render(<App />)