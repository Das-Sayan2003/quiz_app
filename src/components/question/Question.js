import React from "react";
import '../../App.css';

function Question(props) {
  function checkSelecetion(id) {
    for (let i = 0; i < props.randomizedans.length; i++) {
      if (
        props.randomizedans[i].id === id &&
        props.randomizedans[i].isSelected === true
      ) {
        return 1;
      }
    }
  }

  function resultColour(correctans, selectedans, currentans, isCorrect) {
    if (selectedans === currentans && isCorrect) {
      return {
        backgroundColor: "green",
      };
    } else if (selectedans === currentans && !isCorrect) {
      return {
        backgroundColor: "red",
      };
    } else if (selectedans === "N/A" && correctans === currentans) {
      return {
        backgroundColor: "green",
      };
    } else if (selectedans !== "N/A" && correctans === currentans) {
      return {
        backgroundColor: "green",
      };
    }
  }
  return (
    <>
      {props.gameend ? (
        <div className="question">
          <div className="q">
            <h2>
              {props.q
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, "'")
                .replace(/&amp;/g, "&")
                .replace(/&#033;/g, "!")
                .replace(/&#047;/g, "/")
                .replace(/&#044;/g, ",")
                .replace(/&#046;/g, ".")
                .replace(/&#045;/g, "-")
                .replace(/&ouml;/g, "Ö")
                .replace(/&eacute;/g, "é")
                .replace(/&aring;/g, "å")
                .replace(/&auml;/g, "ä")
                .replace(/&‌pi;/g, "π")
                .replace(/&uuml;/g, "ü")
                .replace(/&iacute;/g, "í")
                .replace(/&atilde;/g, "ã")
                .replace(/&divide;/g, "/")
                .replace(/&deg;/g,"°")
                .replace(/&aacute;/g,"á")
                .replace(/&ntilde;/g,"ñ")
                .replace(/&oacute;/g,"ó")
                .replace(/&lt;/g,"<")
                .replace(/&gt;/g,">")}
            </h2>
          </div>
          <div className="answers">
            <div
              style={resultColour(
                props.result[0],
                props.result[1],
                props.randomizedans[0].ans,
                props.result[2]
              )}
              onClick={() =>
                props.onclick(props.randomizedans[0].ans, props.questionSetid)
              }
            >
              <span>
                {props.randomizedans[0].ans
                  .replace(/&quot;/g, '"')
                  .replace(/&#039;/g, "'")
                  .replace(/&amp;/g, "&")
                  .replace(/&#033;/g, "!")
                  .replace(/&#047;/g, "/")
                  .replace(/&#044;/g, ",")
                  .replace(/&#046;/g, ".")
                  .replace(/&#045;/g, "-")
                  .replace(/&ouml;/g, "Ö")
                  .replace(/&eacute;/g, "é")
                  .replace(/&aring;/g, "å")
                  .replace(/&auml;/g, "ä")
                  .replace(/&‌pi;/g, "π")
                  .replace(/&uuml;/g, "ü")
                  .replace(/&iacute;/g, "í")
                  .replace(/&atilde;/g, "ã")
                  .replace(/&divide;/g, "/")
                  .replace(/&deg;/g,"°")
                .replace(/&aacute;/g,"á")
                .replace(/&ntilde;/g,"ñ")
                .replace(/&oacute;/g,"ó")
                .replace(/&lt;/g,"<")
                .replace(/&gt;/g,">")}
              </span>
            </div>
            <div
              style={resultColour(
                props.result[0],
                props.result[1],
                props.randomizedans[1].ans,
                props.result[2]
              )}
              onClick={() =>
                props.onclick(props.randomizedans[1].ans, props.questionSetid)
              }
            >
              <span>
                {props.randomizedans[1].ans
                  .replace(/&quot;/g, '"')
                  .replace(/&#039;/g, "'")
                  .replace(/&amp;/g, "&")
                  .replace(/&#033;/g, "!")
                  .replace(/&#047;/g, "/")
                  .replace(/&#044;/g, ",")
                  .replace(/&#046;/g, ".")
                  .replace(/&#045;/g, "-")
                  .replace(/&ouml;/g, "Ö")
                  .replace(/&eacute;/g, "é")
                  .replace(/&aring;/g, "å")
                  .replace(/&auml;/g, "ä")
                  .replace(/&‌pi;/g, "π")
                  .replace(/&uuml;/g, "ü")
                  .replace(/&iacute;/g, "í")
                  .replace(/&atilde;/g, "ã")
                  .replace(/&divide;/g, "/")
                  .replace(/&deg;/g,"°")
                .replace(/&aacute;/g,"á")
                .replace(/&ntilde;/g,"ñ")
                .replace(/&oacute;/g,"ó")
                .replace(/&lt;/g,"<")
                .replace(/&gt;/g,">")}
              </span>
            </div>
            <div
              style={resultColour(
                props.result[0],
                props.result[1],
                props.randomizedans[2].ans,
                props.result[2]
              )}
              onClick={() =>
                props.onclick(props.randomizedans[2].ans, props.questionSetid)
              }
            >
              <span>
                {props.randomizedans[2].ans
                  .replace(/&quot;/g, '"')
                  .replace(/&#039;/g, "'")
                  .replace(/&amp;/g, "&")
                  .replace(/&#033;/g, "!")
                  .replace(/&#047;/g, "/")
                  .replace(/&#044;/g, ",")
                  .replace(/&#046;/g, ".")
                  .replace(/&#045;/g, "-")
                  .replace(/&ouml;/g, "Ö")
                  .replace(/&eacute;/g, "é")
                  .replace(/&aring;/g, "å")
                  .replace(/&auml;/g, "ä")
                  .replace(/&‌pi;/g, "π")
                  .replace(/&uuml;/g, "ü")
                  .replace(/&iacute;/g, "í")
                  .replace(/&atilde;/g, "ã")
                  .replace(/&divide;/g, "/")
                  .replace(/&deg;/g,"°")
                .replace(/&aacute;/g,"á")
                .replace(/&ntilde;/g,"ñ")
                .replace(/&oacute;/g,"ó")
                .replace(/&lt;/g,"<")
                .replace(/&gt;/g,">")}
              </span>
            </div>
            <div
              style={resultColour(
                props.result[0],
                props.result[1],
                props.randomizedans[3].ans,
                props.result[2]
              )}
              onClick={() =>
                props.onclick(props.randomizedans[3].ans, props.questionSetid)
              }
            >
              <span>
                {props.randomizedans[3].ans
                  .replace(/&quot;/g, '"')
                  .replace(/&#039;/g, "'")
                  .replace(/&amp;/g, "&")
                  .replace(/&#033;/g, "!")
                  .replace(/&#047;/g, "/")
                  .replace(/&#044;/g, ",")
                  .replace(/&#046;/g, ".")
                  .replace(/&#045;/g, "-")
                  .replace(/&ouml;/g, "Ö")
                  .replace(/&eacute;/g, "é")
                  .replace(/&aring;/g, "å")
                  .replace(/&auml;/g, "ä")
                  .replace(/&‌pi;/g, "π")
                  .replace(/&uuml;/g, "ü")
                  .replace(/&iacute;/g, "í")
                  .replace(/&atilde;/g, "ã")
                  .replace(/&divide;/g, "/")
                  .replace(/&deg;/g,"°")
                .replace(/&aacute;/g,"á")
                .replace(/&ntilde;/g,"ñ")
                .replace(/&oacute;/g,"ó")
                .replace(/&lt;/g,"<")
                .replace(/&gt;/g,">")}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="question">
          <div className="q">
            <h2>
              {props.q
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, "'")
                .replace(/&amp;/g, "&")
                .replace(/&#033;/g, "!")
                .replace(/&#047;/g, "/")
                .replace(/&#044;/g, ",")
                .replace(/&#046;/g, ".")
                .replace(/&#045;/g, "-")
                .replace(/&ouml;/g, "Ö")
                .replace(/&eacute;/g, "é")
                .replace(/&aring;/g, "å")
                .replace(/&auml;/g, "ä")
                .replace(/&‌pi;/g, "π")
                .replace(/&uuml;/g, "ü")
                .replace(/&iacute;/g, "í")
                .replace(/&atilde;/g, "ã")
                .replace(/&divide;/g, "/")
                .replace(/&deg;/g,"°")
                .replace(/&aacute;/g,"á")
                .replace(/&ntilde;/g,"ñ")
                .replace(/&oacute;/g,"ó")
                .replace(/&lt;/g,"<")
                .replace(/&gt;/g,">")}
            </h2>
          </div>
          <div className="answers">
            <div
              className={
                checkSelecetion(props.randomizedans[0].id) === 1 ? "green" : ""
              }
              onClick={() =>
                props.onclick(props.randomizedans[0].ans, props.questionSetid)
              }
            >
              <span>
                {props.randomizedans[0].ans
                  .replace(/&quot;/g, '"')
                  .replace(/&#039;/g, "'")
                  .replace(/&amp;/g, "&")
                  .replace(/&#033;/g, "!")
                  .replace(/&#047;/g, "/")
                  .replace(/&#044;/g, ",")
                  .replace(/&#046;/g, ".")
                  .replace(/&#045;/g, "-")
                  .replace(/&ouml;/g, "Ö")
                  .replace(/&eacute;/g, "é")
                  .replace(/&aring;/g, "å")
                  .replace(/&auml;/g, "ä")
                  .replace(/&‌pi;/g, "π")
                  .replace(/&uuml;/g, "ü")
                  .replace(/&iacute;/g, "í")
                  .replace(/&atilde;/g, "ã")
                  .replace(/&divide;/g, "/")
                  .replace(/&deg;/g,"°")
                .replace(/&aacute;/g,"á")
                .replace(/&ntilde;/g,"ñ")
                .replace(/&oacute;/g,"ó")
                .replace(/&lt;/g,"<")
                .replace(/&gt;/g,">")}
              </span>
            </div>
            <div
              className={
                checkSelecetion(props.randomizedans[1].id) === 1 ? "green" : ""
              }
              onClick={() =>
                props.onclick(props.randomizedans[1].ans, props.questionSetid)
              }
            >
              <span>
                {props.randomizedans[1].ans
                  .replace(/&quot;/g, '"')
                  .replace(/&#039;/g, "'")
                  .replace(/&amp;/g, "&")
                  .replace(/&#033;/g, "!")
                  .replace(/&#047;/g, "/")
                  .replace(/&#044;/g, ",")
                  .replace(/&#046;/g, ".")
                  .replace(/&#045;/g, "-")
                  .replace(/&ouml;/g, "Ö")
                  .replace(/&eacute;/g, "é")
                  .replace(/&aring;/g, "å")
                  .replace(/&auml;/g, "ä")
                  .replace(/&‌pi;/g, "π")
                  .replace(/&uuml;/g, "ü")
                  .replace(/&iacute;/g, "í")
                  .replace(/&atilde;/g, "ã")
                  .replace(/&divide;/g, "/")
                  .replace(/&deg;/g,"°")
                .replace(/&aacute;/g,"á")
                .replace(/&ntilde;/g,"ñ")
                .replace(/&oacute;/g,"ó")
                .replace(/&lt;/g,"<")
                .replace(/&gt;/g,">")}
              </span>
            </div>
            <div
              className={
                checkSelecetion(props.randomizedans[2].id) === 1 ? "green" : ""
              }
              onClick={() =>
                props.onclick(props.randomizedans[2].ans, props.questionSetid)
              }
            >
              <span>
                {props.randomizedans[2].ans
                  .replace(/&quot;/g, '"')
                  .replace(/&#039;/g, "'")
                  .replace(/&amp;/g, "&")
                  .replace(/&#033;/g, "!")
                  .replace(/&#047;/g, "/")
                  .replace(/&#044;/g, ",")
                  .replace(/&#046;/g, ".")
                  .replace(/&#045;/g, "-")
                  .replace(/&ouml;/g, "Ö")
                  .replace(/&eacute;/g, "é")
                  .replace(/&aring;/g, "å")
                  .replace(/&auml;/g, "ä")
                  .replace(/&‌pi;/g, "π")
                  .replace(/&uuml;/g, "ü")
                  .replace(/&iacute;/g, "í")
                  .replace(/&atilde;/g, "ã")
                  .replace(/&divide;/g, "/")
                  .replace(/&deg;/g,"°")
                .replace(/&aacute;/g,"á")
                .replace(/&ntilde;/g,"ñ")
                .replace(/&oacute;/g,"ó")
                .replace(/&lt;/g,"<")
                .replace(/&gt;/g,">")}
              </span>
            </div>
            <div
              className={
                checkSelecetion(props.randomizedans[3].id) === 1 ? "green" : ""
              }
              onClick={() =>
                props.onclick(props.randomizedans[3].ans, props.questionSetid)
              }
            >
              <span>
                {props.randomizedans[3].ans
                  .replace(/&quot;/g, '"')
                  .replace(/&#039;/g, "'")
                  .replace(/&amp;/g, "&")
                  .replace(/&#033;/g, "!")
                  .replace(/&#047;/g, "/")
                  .replace(/&#044;/g, ",")
                  .replace(/&#046;/g, ".")
                  .replace(/&#045;/g, "-")
                  .replace(/&ouml;/g, "Ö")
                  .replace(/&eacute;/g, "é")
                  .replace(/&aring;/g, "å")
                  .replace(/&auml;/g, "ä")
                  .replace(/&‌pi;/g, "π")
                  .replace(/&uuml;/g, "ü")
                  .replace(/&iacute;/g, "í")
                  .replace(/&atilde;/g, "ã")
                  .replace(/&divide;/g, "/")
                  .replace(/&deg;/g,"°")
                .replace(/&aacute;/g,"á")
                .replace(/&ntilde;/g,"ñ")
                .replace(/&oacute;/g,"ó")
                .replace(/&lt;/g,"<")
                .replace(/&gt;/g,">")}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Question;
