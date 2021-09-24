import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import QuestionBox from "./QuestionBox";
import Database from "../db/fakeDb";
import QuesTionButton from "./QuesTionButton";





function DashBoard() {
	let [questions, setQuestions] = useState([]);
	const [incCount, setIncCount] = useState(0);
	const [userChoosingOption, setUserChoosingOption] = useState(null);
	const [isRadioBtnActive, setIsRadioBtnActive] = useState(null);
	const [allSavedData, setallSavedData] = useState([]);
	const [score, setScore] = useState(undefined)


	useEffect(() => {

		questions = Database.map((question) => {
			return {
				...question,
				answers: [
					question.correct_answer,
					...question.incorrect_answer
				].sort(() => Math.random() * - 0.5)
			}
		}).sort(() => Math.random() - 0.5);

		console.log(questions)

		setQuestions(questions);


	}, []);



	const NextQs = (e) => {
		let nextCount = incCount + 1;
		if (nextCount === questions.length) {

			setallSavedData({
				...allSavedData,
				...userChoosingOption,
				
			});
			setIncCount(questions.length - 1);
			setUserChoosingOption(null)


		} else {

			setallSavedData({
				...allSavedData,
				...userChoosingOption,
			});
			setIncCount(incCount + 1);
			setUserChoosingOption(null)


		}
	};

	const skip = () => {
		if (incCount === questions.length - 1) {
			setIncCount(questions.length - 1)
		} else {

			setIncCount(incCount + 1)
		}
	}

	const PrevQs = (e) => {
		if (incCount == 0) {
			setIncCount(0);
		} else {
			setIncCount(incCount - 1);
		}
	};

	const quesTionTab = (qno) => {

		let index = questions.findIndex((elm) => {
			return elm.qno === qno;
		});
		setIncCount(index)

		// if (+qno === questions.length-1) {
		// 	setIncCount();
		// } else {
		// 	setIncCount(+qno);
		// }
	};

	const sellectOption = (Qno, e) => {
		setUserChoosingOption({
			[Qno]: e.target.value,
		});
	};

	const submitData = (e) => {
		e.preventDefault();
		const map = new Map();
		for (let i = 0; i < questions.length; i++) {

			map.set(questions[i].qno, questions[i].correct_answer)
		}

		let score = 0;

		for (const [key, value] of map.entries()) {
			// console.log(key + ' ' + value);
			let originalqno = +key;
			let originalans = +value;
			for (const [key1, value1] of Object.entries(allSavedData)) {
				let userqno = key1;
				let userans = value1;
				if(originalqno==+userqno && originalans===+userans){
					score = score + 5;
					console.log("successss")

				}
			}
		}
		console.log(score)



	};

	const clearRadioBtn = (qno) => {
		delete allSavedData[+qno];
		console.log(allSavedData, 'before')
		console.log(qno, 'cleR', allSavedData);

	}

	return questions.length > 0 ? (

		<div className="container-fluid ">
			<header className="row">
				<div className="header left col-12 col-sm-10">
					<img src="https://i.ibb.co/s6NCmyM/REPL.png" alt="logo" />
					<div class="head">
						<div class="logo-name">R-E-P-L Examination Center</div>
						<p>Let's Code Together</p>
					</div>
				</div>
				<div class="sub col-12 col-sm-2 mt-3">
					<h4>rest: </h4>
					<p>&nbsp; 01: 30: 00</p>
				</div>
			</header>

			<div class="wrapper row">
				{/* <!-- Starting of left-side  --> */}
				<div class="right-side  col-12 col-sm-3">
					<div class="profile">
						<div class="info">
							<h3 class="job">Suman Ojha</h3>
							<p class="nam">CSE-3rd</p>
						</div>
						<div class="image">
							<img
								src="https://avatars.dicebear.com/api/initials/Suman%20Ojha.svg"
								alt="suman ojha"
							/>
						</div>
					</div>
					<div class="questions">
						{questions.map((data, idx) => {
							return (
								<QuesTionButton
									quesTionTab={quesTionTab}
									qno={data.qno}
									idx={idx + 1}
									allSavedData={allSavedData} />
							);
						})}
					</div>
					<div class="view">
						<div class=" fl">
							<h5>Mark for review :</h5>
							<p class="number">00</p>
						</div>
						<div class=" fl">
							<h5>Completed :</h5>
							<p class="number">00</p>
						</div>
						<div class=" fl">
							<h5>Left :</h5>
							<p class="number">00</p>
						</div>
					</div>
				</div>

				{/* <!-- ------right side starts here --> */}
				<div class="left-side col-12 col-sm-8">
					{
						<QuestionBox
							sellectOption={sellectOption}
							data={questions[incCount]}
							skip={skip}
							clearRadioBtn={clearRadioBtn}
						/>
					}

					<div class="button">

						<button onClick={PrevQs} class="btn  bg-primary">
							Prev
						</button>


						<button onClick={NextQs} class="btn bg-primary">
							Saved & Next
						</button>
						{questions.length === incCount + 1 ? (
							<button onClick={submitData} className="btn bg-danger">
								submit
							</button>
						) : null}
					</div>
				</div>
				{/* <!-- end of left side  --> */}

				{/* <!-- Starting of right-side  --> */}
			</div>
		</div>


	)

		:

		<h1>LocalDining....</h1>




}

export default DashBoard;
