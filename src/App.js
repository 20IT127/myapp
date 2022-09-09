import "./App.css";
import JSONDATA from './MOCK_DATA.json'
import {useState} from 'react' //useState is hook that allows you to state the variables in functional components
function App1() {
    const [searchName, setSearchName] = useState('')//searchName - what we write in the search dialog box and setsearchName - to fetch the string values from the list
    return(
        <div className="App">
            <input type="text" placeholder="Search..." onChange={event => {setSearchName(event.target.value)}}/>
            {JSONDATA.filter((val) => {
                if(searchName === "") {
                    return val
                } else if (val.first_name.toLowerCase().includes(searchName.toLowerCase())){
                    return val
                }
            })
            .map((val, key) => {
                return(
                <div className="shail" key={key}>
                    <p>{val.first_name}</p>
                </div>
                );
            })}
        </div>
    );
}

export default App1;