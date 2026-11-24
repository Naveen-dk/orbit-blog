/**
 * ============================================================================
 * ORBIT LAUNCH PAGE -> 100% RELIABLE GOOGLE SHEETS SYNC SCRIPT
 * Target Spreadsheet: "User spreadsheet"
 * Tab Name: "Sheet1"
 * ============================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(15000);

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Sheet1") || ss.getActiveSheet();

    // 1. Extract values from URL parameters OR JSON payload
    var nameVal = "";
    var emailVal = "";
    var goalVal = "";
    var wouldUseVal = "Yes";
    var suggestionVal = "";

    if (e && e.parameter && (e.parameter.name || e.parameter.email)) {
      nameVal = e.parameter.name || "";
      emailVal = e.parameter.email || "";
      goalVal = e.parameter.goal || "";
      wouldUseVal = e.parameter.wouldUse || "Yes";
      suggestionVal = e.parameter.suggestion || "";
    } else if (e && e.postData && e.postData.contents) {
      try {
        var parsed = JSON.parse(e.postData.contents);
        nameVal = parsed.name || "";
        emailVal = parsed.email || "";
        goalVal = parsed.goal || "";
        wouldUseVal = parsed.wouldUse || "Yes";
        suggestionVal = parsed.suggestion || "";
      } catch (err) {}
    }

    if (!nameVal && !emailVal) {
      return ContentService.createTextOutput("Empty payload").setMimeType(ContentService.MimeType.TEXT);
    }

    // 2. Find the next empty row in Column B starting at Row 8
    var maxRows = sheet.getMaxRows();
    var scanLimit = Math.max(1, Math.min(100, maxRows - 7));
    var colB = sheet.getRange(8, 2, scanLimit, 1).getValues();
    var nextRow = 8;
    for (var i = 0; i < colB.length; i++) {
      var cell = colB[i][0];
      if (cell !== null && cell !== undefined && cell.toString().trim() !== "") {
        nextRow = 8 + i + 1;
      }
    }

    // 3. Write data directly into Columns B, C, D, E, F
    sheet.getRange(nextRow, 2).setValue(nameVal);       // Col B: Name
    sheet.getRange(nextRow, 3).setValue(emailVal);      // Col C: Email
    sheet.getRange(nextRow, 4).setValue(goalVal);       // Col D: Biggest Goal
    sheet.getRange(nextRow, 5).setValue(wouldUseVal);   // Col E: Would you use Orbit?
    sheet.getRange(nextRow, 6).setValue(suggestionVal); // Col F: Suggestion

    // 4. Force immediate write to Google Sheets
    SpreadsheetApp.flush();

    return ContentService.createTextOutput("Success on Row " + nextRow).setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  } finally {
    try {
      lock.releaseLock();
    } catch (e) {}
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Orbit Sync is Active").setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Run this directly from Apps Script editor to instantly test adding a row!
 */
function testDoPost() {
  var mockEvent = {
    parameter: {
      name: "Vijay",
      email: "vijay2006@gmail.com",
      goal: "Master full stack",
      wouldUse: "Yes",
      suggestion: "new innvotion"
    }
  };
  var output = doPost(mockEvent);
  Logger.log(output.getContent());
}
