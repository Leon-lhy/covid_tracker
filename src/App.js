import React from 'react';
import styles from './App.module.css';
//axios request to API
import { fetchData } from './api'
//====Import Component=====
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

//you need to configure index.js in components folder
import { Cards, Chart, CountryPicker } from './components';

class App extends React.Component {

    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }
    render() {
        //解构赋值
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data} />
                {/* <CountryPicker /> */}
                <br></br>
                <h3>What do you think 😭</h3>
                <Chart data={data}/>
                
            </div>
        )
    }
}

export default App;