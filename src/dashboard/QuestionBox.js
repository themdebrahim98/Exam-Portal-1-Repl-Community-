import React from 'react'

function QuestionBox({data,sellectOption}) {


  
    return (

      

        <div class="qustions-box">
              <div class="ques">
             <h2>{data.Question}</h2>
              </div>
              <form class="option">
                <li>
                  <input
                  onClick={(e)=>{sellectOption(data.Qno,e)}}
                    type="radio"
                    id="option1"
                    name="fav_language"
                    value={data.Opt1}
                  />
                  <label for="option1">{data.Opt1}</label>
                </li>

                <li>
                  <input
                  onClick={(e)=>{sellectOption(data.Qno,e)}}
                  type="radio"
                    id="option2"
                    name="fav_language"
                    value={data.Opt2}
                    
                  />
                  <label for="option2">{data.Opt2}</label>
                </li>

                <li>
                  <input
                  onClick={(e)=>{sellectOption(data.Qno,e)}}
                  type="radio"
                    id="option3"
                    name="fav_language"
                    value={data.Opt3}
                  />
                  <label for="option3">{data.Opt3}</label>
                </li>

                <li>
                  <input
                  onClick={(e)=>{sellectOption(data.Qno,e)}}
                  type="radio"
                    id="option4"
                    name="fav_language"
                    value={data.Opt4}
                  />
                  <label for="option4">{data.Opt4}</label>
                </li>
              </form>
            </div>
    )

}

export default QuestionBox
