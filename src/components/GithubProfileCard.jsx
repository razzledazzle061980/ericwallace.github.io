import React from "react";
import "../styles/vendor/font-awesome/css/fontawesome.min.css";
import "../styles/styles.css";

import { Card, Col, Row, Container } from "reactstrap";
import {githubUser} from "../portfolio";

const GithubProfileCard = () => {
	const sendEmail = () => {
		window.open("mailto:razzledazzle061980@gmail.com");
	}
	return (
		<Card className="section-lg bg-gradient-info shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="">
						<Col className="order-lg-2" lg="4">
							<img
								src={githubUser.avatar_url}
								style={{ width: "200px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
						</Col>
						<Col lg="8" className="order-lg-1">
							<h2 className="text-white">Send Me An Email!!</h2>
							<p className="lead text-white mt-3">
								<button type="button" onClick={() => sendEmail()} className="btn bg-gradient-white text-info shadow-lg"><img className="email" src={'img/icons/paper-plane.png'} /> Email Me</button>
							</p>
							<p className="text-white mt-3">{githubUser.bio}</p>
							<div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								{githubUser.location}
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
