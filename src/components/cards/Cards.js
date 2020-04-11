import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import Countup from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return "Loading...";
	} else {
		return (
			<div className={styles.container}>
				<Grid container spacing={3} justify="center">
					<Grid
						item
						component={Card}
						xs={12}
						md={3}
						className={cx(styles.card, styles.infected)}
					>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								Infected
							</Typography>
							<Typography variant="h5">
								<Countup
									start={0}
									end={confirmed.value}
									duration={1}
									separator=","
								/>
							</Typography>
							<Typography color="textSecondary">
								{new Date(lastUpdate).toDateString()}
							</Typography>
							<Typography variant="body2">
								Number of active cases of COVID-19
							</Typography>
						</CardContent>
					</Grid>
					<Grid
						item
						component={Card}
						xs={12}
						md={3}
						className={cx(styles.card, styles.recovered)}
					>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								Recovered
							</Typography>
							<Typography variant="h5">
								<Countup
									start={0}
									end={recovered.value}
									duration={1}
									separator=","
								/>
							</Typography>
							<Typography color="textSecondary">
								{new Date(lastUpdate).toDateString()}
							</Typography>
							<Typography variant="body2">
								Number of recovered cases of COVID-19
							</Typography>
						</CardContent>
					</Grid>
					<Grid
						item
						component={Card}
						xs={12}
						md={3}
						className={cx(styles.card, styles.deaths)}
					>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								Deaths
							</Typography>
							<Typography variant="h5">
								<Countup
									start={0}
									end={deaths.value}
									duration={1}
									separator=","
								/>
							</Typography>
							<Typography color="textSecondary">
								{new Date(lastUpdate).toDateString()}
							</Typography>
							<Typography variant="body2">
								Number of deaths caused by COVID-19
							</Typography>
						</CardContent>
					</Grid>
				</Grid>
				<h4>Last Updated: {new Date(lastUpdate).toLocaleString()} IST</h4>
			</div>
		);
	}
};

export default Cards;
