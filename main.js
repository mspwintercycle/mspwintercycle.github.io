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
  console.warn(report_divs)
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
document.getElementById('recentlink').href = getMostRecentReportDiv();