function toggleDarkMode() {
  // if the user prefers dark, toggle the opposite
  const a = window.matchMedia("(prefers-color-scheme: dark)");
  var root = document.querySelector(":root");
  if (a) {
    root.classList.toggle("light");
  } else {
    root.classList.toggle("dark");
  }        
}

function getMostRecentReportDiv() {
  // get all reports
  const report_divs = document.querySelectorAll("div#reports > div");
  let max = 0;
  for (report of report_divs) {
    const date = parseInt(report.id);          
    if (date == NaN) {
      console.warn("One of the reports divs is not a number!");            
    } else {
      if (date > max) {
        max = date;
      }
    }
  }

  return "#" + max.toString();
}

// Fill link at the top with reference to most recent report
document.getElementById("recentlink").href = getMostRecentReportDiv();

// Select the right font, default is Helvetica
const FONT_STORAGE_NAME = "fontpref";
const styleMap = {"Helvetica": "Helvetica, Arial, sans-serif", "Arial": "Arial, sans-serif", "Georgia": "Georgia, serif", "Times New Roman": "Times New Roman, serif"};
let font = "Helvetica";
let localPref = localStorage.getItem(FONT_STORAGE_NAME);
if (localPref != null) {
  font = localPref;
}

document.body.style.fontFamily = styleMap[font];

// Watch for onchange event for font
const selectElement = document.querySelector("#fontselect");
selectElement.addEventListener("change", (event) => {
  // Remember old font
  localStorage.setItem(FONT_STORAGE_NAME, event.target.value);
  document.body.style.fontFamily = styleMap[event.target.value];
});
