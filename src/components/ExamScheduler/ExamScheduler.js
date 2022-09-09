import React from "react";
import { Link } from "react-router-dom";
import { formdata } from "../../Data/FormData";
import { subjectData } from "../../Data/SubjectData";
import Pop from "../Popup";
import "./ExamScheduler.css";

const ExamScheduler = () => (
  <div>
    <div>
      <div className="arrow-icon">
        <img alt="ARROW" src="https://i.ibb.co/HnM1WDs/Vectorarrow.png" />
      </div>
      <div className="arrow-text">Create new Schedule</div>
    </div>
    
    <div className="Box">
    <form>
      <div style={{ display: "flex", direction: "row", marginLeft: "-21px" }}>
        <div className="Branch">
          Branch
          <div>
            <select className="Branchbox">
              {formdata.branchanddep.map((e) => (
                <option  value={e.branch}>{e.branch}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="Department">Department</div>
        <div>
          <select className="Departmentbox">
            {formdata.branchanddep.map((e, i) =>
              e.deps.map((ele) => <option value="">{ele}</option>)
            )}
          </select>
        </div>
        <div className="Semester">Semester</div>
        <input
          className="Semesterbox"
          type="number"
          id="semester"
          size="10"
        ></input>
      </div>
      <div className="Examtype">
        Examtype
        <div>
          
            <select className="Examtypebox" type="text">
              {formdata.EEE.map((e) =>
                e.map((i) => <option value={i.ExamType}>{i.ExamType}</option>)
              )}
            </select>
            

            {/* FN TIME RECORD */}
            <div className="Time">Time Range</div>    
            <div className="time-container" style={{ display: "flex", direction: "row",marginLeft: '-100px', marginTop: '20px' }}>
              <div className="FN" style={{ margin: '30px' }}>FN</div>
              <input className="input-hr-min" type="number" min={0} max={11} placeholder="HH"/>
              <input
                className="input-hr-min" type="number" min={0} max={59} placeholder="MM" />
              <select className="input-ampm">
                <option>AM</option>
                <option>PM</option>
              </select>
              <div style={{ padding: "0 10px" }}>to</div>
              <input className="input-hr-min" type="number" min={0} max={11} placeholder="HH"/>
              <input
                className="input-hr-min" type="number" min={0} max={59} placeholder="MM" />
              <select className="input-ampm">
                <option>AM</option>
                <option>PM</option>
              </select>
              <div style={{ padding: "0 10px", color: '#E8E8EA' }}>3hours</div>
              <input
                className="Timebox"
                type="checkbox"
                name="checkbox"
                value="checkbox"
              />
              <div style={{ padding: "0 10px", color: '#E8E8EA' }}>Set for all</div>
            </div>


            {/* ANNN....................... */}


            <div className="time-container" style={{ display: "flex", direction: "row" ,marginLeft: '-102px'}}>
              <div className="FN" style={{ margin: '30px' }}>AN</div>
              <input className="input-hr-min" type="number" min={0} max={11} placeholder="HH"/>
              <input
                className="input-hr-min" type="number" min={0} max={59} placeholder="MM" />
              <select className="input-ampm">
                <option>AM</option>
                <option>PM</option>
              </select>
              <div style={{ padding: "0 10px" }}>to</div>
              <input className="input-hr-min" type="number" min={0} max={11} placeholder="HH"/>
              <input
                className="input-hr-min" type="number" min={0} max={59} placeholder="MM" />
              <select className="input-ampm">
                <option>AM</option>
                <option>PM</option>
              </select>
              <div style={{ padding: "0 10px", color: '#E8E8EA' }}>3hours</div>
              <input className="Timebox" type="checkbox" name="checkbox" value="checkbox" />
              <div style={{ padding: "0 10px", color: '#E8E8EA' }}>Set for all</div>
            </div>

            {/* Subject And Labs Count */}

            <div style={{ display: "flex", direction: "row", marginLeft: '-122px' }}>
              <div className="Subjects">Subjects</div>
              <input min={0} max={5} className="subjectbox" type="number" id="subjects" size="10" />
              <div className="Labs">Labs</div>
              <input min={0} max={2} className="labsbox" type="number" id="Labs" size="10"/>
            </div>

            {/* Subject Form */}
            <div style={{ marginTop: '50px', marginLeft:'-71px' }} >Subject 1</div>
            <div style={{ display: "flex", direction: "row", marginLeft: '-72px', marginTop: '-60px' }}>
              <select className="Subjectcode">
                {subjectData.subjects.map((e) => (
                  <option>{e.code}</option>
                ))}
              </select>
              <input
                readOnly value={12} className="Namebox" type="Text" id="SubjectName" size="10" />
              <div className="Datetext">Date
                <input className="date" type="date" id="date" size="10"></input>
              </div>
              <div className="FNAN">
                <button style={{ marginRight: "30px" }}>FN</button>
                <button>AN</button>
              </div>
            </div>
            

            {/* Subject Form */}
            <div style={{ marginTop: '50px', marginLeft:'-71px' }} >Subject 2</div>
            <div style={{ display: "flex", direction: "row", marginLeft: '-72px', marginTop: '-60px' }}>
              <select className="Subjectcode">
                {subjectData.subjects.map((e) => (
                  <option value={e.name}>{e.code}</option>
                ))}
              </select>
              <input className="Namebox" type="Text" id="SubjectName" size="10" />
              <div className="Datetext">Date
                <input className="date" type="date" id="date" size="10" />
              </div>
              <div className="FNAN">
                <button style={{ marginRight: "30px" }}>FN</button>
                <button>AN</button>
              </div>
            </div>

            {/* Subject Form */}
            <div style={{ marginTop: '50px', marginLeft:'-71px' }} >Subject 3</div>
            <div style={{ display: "flex", direction: "row", marginLeft: '-72px', marginTop: '-60px' }}>
              <select className="Subjectcode">
                {subjectData.subjects.map((e) => (
                  <option value={e.name}>{e.code}</option>
                ))}
              </select>
              <input className="Namebox" type="Text" id="SubjectName" size="10" />
              <div className="Datetext">Date
                <input className="date" type="date" id="date" size="10" />
              </div>
              <div className="FNAN">
                <button style={{ marginRight: "30px" }}>FN</button>
                <button>AN</button>
              </div>
            </div>

            {/* Subject Form */}
            <div style={{ marginTop: '50px', marginLeft:'-71px' }} >Subject 4</div>
            <div style={{ display: "flex", direction: "row", marginLeft: '-72px', marginTop: '-60px' }}>
              <select className="Subjectcode">
                {subjectData.subjects.map((e) => (
                  <option value={e.name}>{e.code}</option>
                ))}
              </select>
              <input className="Namebox" type="Text" id="SubjectName" size="10" />
              <div className="Datetext">Date
                <input className="date" type="date" id="date" size="10" />
              </div>
              <div className="FNAN">
                <button style={{ marginRight: "30px" }}>FN</button>
                <button>AN</button>
              </div>
            </div>

            {/* Subject Form */}
            <div style={{ marginTop: '50px', marginLeft:'-71px' }} >Subject 5</div>
            <div style={{ display: "flex", direction: "row", marginLeft: '-72px', marginTop: '-60px' }}>
              <select className="Subjectcode">
                {subjectData.subjects.map((e) => (
                  <option value={e.name}>{e.code}</option>
                ))}
              </select>
              <input className="Namebox" type="Text" id="SubjectName" size="10" />
              <div className="Datetext">Date
                <input className="date" type="date" id="date" size="10" />
              </div>
              <div className="FNAN">
                <button style={{ marginRight: "30px" }}>FN</button>
                <button>AN</button>
              </div>
            </div>

            {/* Subject Form */}
            <div style={{ marginTop: '50px', marginLeft:'-71px' }} >Lab 1</div>
            <div style={{ display: "flex", direction: "row", marginLeft: '-72px', marginTop: '-60px' }}>
              <select className="Subjectcode">
                {subjectData.subjects.map((e) => (
                  <option value={e.name}>{e.code}</option>
                ))}
              </select>
              <input className="Namebox" type="Text" id="SubjectName" size="10" />
              <div className="Datetext">Date
                <input className="date" type="date" id="date" size="10" />
              </div>
              <div className="FNAN">
                <button style={{ marginRight: "30px" }}>FN</button>
                <button>AN</button>
              </div>
            </div>

            {/* Subject Form */}
            <div style={{ marginTop: '50px', marginLeft:'-71px' }} >lab 2</div>
            <div style={{ display: "flex", direction: "row", marginLeft: '-72px', marginTop: '-60px' }}>
              <select className="Subjectcode">
                {subjectData.subjects.map((e) => (
                  <option value={e.name}>{e.code}</option>
                ))}
              </select>
              <input className="Namebox" type="Text" id="SubjectName" size="10" />
              <div className="Datetext">Date
                <input className="date" type="date" id="date" size="10" />
              </div>
              <div className="FNAN">
                <button style={{ marginRight: "30px" }}>FN</button>
                <button>AN</button>
              </div>
            </div>
          
        </div>
      </div>
        <Pop/>
      </form>
    </div>

  </div>
);
export default ExamScheduler;
