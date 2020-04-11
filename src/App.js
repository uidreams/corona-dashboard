import React from "react";
import { Cards, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import image from "./images/covid19-image.png";

class App extends React.Component {
	state = {
		data: {},
		country: "",
	};
	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({
			data: fetchedData,
		});
	}
	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);
		this.setState({
			data: fetchedData,
			country,
		});
	};
	render() {
		const { data } = this.state;
		return (
			<div className={styles.container}>
				<img src={image} className={styles.covidLogo} alt="COVID-19" />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Cards data={data} />
			</div>
		);
	}
}

export default App;
