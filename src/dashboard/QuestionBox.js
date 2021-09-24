import React from 'react'


const Option = ({ sellectOption, answer, qno }) => {
  return (

    <li>
      <input
        onClick={(e) => { sellectOption(qno, e) }}
        type="radio"
        id="option2"
        name="fav_language"
        value={answer}

      />
      <label for="option2">{answer}</label>
    </li>

  )
}

function QuestionBox({

  data: { qno, question, correct_answer, incorrect_answer, answers },
  sellectOption,
  skip,
  clearRadioBtn


}) {



  return (
    <>

      <div class="qustions-box">
        <div class="ques">
          <h2>{question}</h2>
        </div>
        <form class="option">
          {
            answers.map((option, i) => {
              return (<Option qno={qno} answer={answers[i]} sellectOption={sellectOption} />)

            })
          }
        </form>

        <div className="question_box_btn">

          <button onClick={skip}>Skip</button>
          <button onClick={()=>{clearRadioBtn(qno)}}>clear</button>

        </div>
      </div>

    </>
  )

}

export default QuestionBox
