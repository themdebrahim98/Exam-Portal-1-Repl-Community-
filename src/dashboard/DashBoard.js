import React, { useState } from "react";
import "./DashBoard.css";
import QuestionBox from "./QuestionBox";
import Database from "../db/fakeDb";
import QuesTionButton from "./QuesTionButton";
function DashBoard() {
  const [incCount, setIncCount] = useState(0);
  const [userChoosingOption, setUserChoosingOption] = useState(null);
  const [isRadioBtnActive, setIsRadioBtnActive] = useState(null);
  const [allSavedData, setallSavedData] = useState(null);

  const NextQs = (e) => {
    let nextCount = incCount + 1;
    if (nextCount === Database.length) {
      setallSavedData({
        ...allSavedData,
        ...userChoosingOption,
      });
      setIncCount(Database.length - 1);
    } else {
      setallSavedData({
        ...allSavedData,
        ...userChoosingOption,
      });
      setIncCount(incCount + 1);
    }
  };

  const PrevQs = (e) => {
    if (incCount == 0) {
      setIncCount(0);
    } else {
      setIncCount(incCount - 1);
    }
  };

  const quesTionTab = (_id) => {
    if (+_id === Database.length) {
      setIncCount(+_id - 1);
    } else {
      setIncCount(+_id - 1);
    }
  };

  const sellectOption = (Qno, e) => {
    setUserChoosingOption({
      [Qno]: e.target.value,
    });
  };

  const submitData = () => {
    let marks;
    // allSavedData.forEach(elm);

    console.log(allSavedData);
  };

  const clearRadioBtn =(obj)=>{
    // let clearData={};
    // const keys = Object.keys(userChoosingOption);

    // clearData[keys] = null
    // setUserChoosingOption(clearData)

    let Qno = +obj.Qno
    let deletedata =allSavedData;
    delete deletedata.Qno
    


    console.log(deletedata,'Qno');

  }

  return (
    <>
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
          <div class="right-side  col-12 col-sm-4">
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
              {Database.map((data) => {
                return (
                  <QuesTionButton quesTionTab={quesTionTab} _id={data._id} />
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
                data={Database[incCount]}
              />
            }

            <div class="button">
            <button onClick={()=>{clearRadioBtn(Database[incCount])}} class="btn  bg-primary">
                Clear
              </button>
              <button onClick={PrevQs} class="btn  bg-primary">
                Prev
              </button>
             

              <button onClick={NextQs} class="btn bg-primary">
                Saved & Next
              </button>
              {incCount + 1 === Database.length ? (
                <button onClick={submitData} className="btn bg-primary">
                  submit
                </button>
              ) : null}
            </div>
          </div>
          {/* <!-- end of left side  --> */}

          {/* <!-- Starting of right-side  --> */}
        </div>
      </div>
    </>
  );
}

export default DashBoard;
