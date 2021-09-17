import React from 'react';
import './Home.css';
function Home() {
	return (
		<div className="home">
			<div className="logo">
				<img src="https://i.ibb.co/s6NCmyM/REPL.png" alt="REPL" />
			</div>
			<div className="hero">
				<div className="parallax-layer layer-5"></div>
				<div className="parallax-layer layer-4"></div>
				<div className="parallax-layer layer-3"></div>
				<div className="parallax-layer bike-1"></div>
				<div className="parallax-layer bike-2"></div>
				<div className="parallax-layer layer-2"></div>
				<div className="parallax-layer layer-1"></div>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 col-12">
						Informations
					</div>
					<div className="col-md-6 col-12">
						Notice Board
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
