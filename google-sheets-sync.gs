/**
 * ============================================================================
 * ORBIT LAUNCH PAGE -> AUTOMATED SHEETS & EMAIL SYSTEM
 * Automatically saves new user to Google Sheets + sends instant Welcome Email
 * ============================================================================
 */

const ADMIN_EMAIL = "dknaveen006@gmail.com"; // Your notification email

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

    // Expand sheet if more rows are needed
    if (nextRow > maxRows) {
      sheet.insertRowsAfter(maxRows, 5);
    }

    // 3. Write data into Columns B, C, D, E, F
    sheet.getRange(nextRow, 2).setValue(nameVal);       // Col B: Name
    sheet.getRange(nextRow, 3).setValue(emailVal);      // Col C: Email
    sheet.getRange(nextRow, 4).setValue(goalVal);       // Col D: Biggest Goal
    sheet.getRange(nextRow, 5).setValue(wouldUseVal);   // Col E: Would you use Orbit?
    sheet.getRange(nextRow, 6).setValue(suggestionVal); // Col F: Suggestion

    // Commit write to spreadsheet immediately
    SpreadsheetApp.flush();

    // 4. AUTOMATION FOR EVERY NEW USER: Send Branded Welcome Email
    if (emailVal && emailVal.indexOf("@") !== -1) {
      try {
        MailApp.sendEmail({
          to: emailVal,
          subject: "Welcome to Orbit Early Access 🚀",
          htmlBody: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 580px; margin: 0 auto; padding: 32px 24px; color: #1f1f1f; background: #ffffff; border: 1px solid #e0e3e7; border-radius: 20px;">
              <div style="margin-bottom: 24px;">
                <span style="font-size: 24px; font-weight: 700; color: #0b57d0; letter-spacing: -0.5px;">Orbit</span>
              </div>
              
              <h2 style="font-size: 22px; font-weight: 600; color: #1f1f1f; margin-bottom: 14px; line-height: 1.3;">
                You're officially on the Early Access list!
              </h2>
              
              <p style="font-size: 15px; color: #444746; line-height: 1.6; margin-bottom: 16px;">
                Hi <strong>${nameVal}</strong>,
              </p>
              
              <p style="font-size: 15px; color: #444746; line-height: 1.6; margin-bottom: 16px;">
                Thank you for joining the Orbit movement. We've recorded your primary focus:
              </p>
              
              <div style="background: #f8f9fa; border-left: 4px solid #0b57d0; padding: 16px 20px; border-radius: 10px; margin: 20px 0; font-size: 14px; color: #1f1f1f;">
                <span style="color: #5f6368; font-size: 12px; text-transform: uppercase; font-weight: 600; display: block; margin-bottom: 4px;">Target Goal:</span>
                <strong style="font-size: 15px;">${goalVal}</strong>
              </div>
              
              <p style="font-size: 15px; color: #444746; line-height: 1.6; margin-bottom: 24px;">
                Orbit is designed around a simple truth: <em>Progress isn't about what you planned. Progress is about what actually happened.</em>
              </p>
              
              <p style="font-size: 14px; color: #5f6368; line-height: 1.6; border-top: 1px solid #f1f3f4; padding-top: 20px; margin-top: 24px;">
                We are onboarding early supporters in batches. You will receive an invitation email as soon as your access slot opens.<br><br>
                — <strong>The Orbit Team</strong>
              </p>
            </div>
          `
        });
      } catch (userMailErr) {
        Logger.log("User email error: " + userMailErr);
      }
    }

    // 5. AUTOMATION FOR YOU (ADMIN ALERT): Notify you on every new sign up
    if (ADMIN_EMAIL) {
      try {
        MailApp.sendEmail({
          to: ADMIN_EMAIL,
          subject: "🎉 New Orbit Lead: " + nameVal + " (" + emailVal + ")",
          htmlBody: `
            <div style="font-family: sans-serif; padding: 16px;">
              <h3>New Early Access Signup Recorded!</h3>
              <p><strong>Name:</strong> ${nameVal}</p>
              <p><strong>Email:</strong> ${emailVal}</p>
              <p><strong>Goal:</strong> ${goalVal}</p>
              <p><strong>Would Use Orbit:</strong> ${wouldUseVal}</p>
              <p><strong>Suggestion:</strong> ${suggestionVal}</p>
              <p><strong>Row in Sheet:</strong> ${nextRow}</p>
              <p><a href="https://docs.google.com/spreadsheets/d/1yrLpcoCj1qljqi2OI1LTvUPy1eimPrfYQU_ACyyBkAY/edit">Open Google Sheet ↗</a></p>
            </div>
          `
        });
      } catch (adminMailErr) {
        Logger.log("Admin alert error: " + adminMailErr);
      }
    }

    return ContentService.createTextOutput("Success on Row " + nextRow).setMimeType(ContentService.MimeType.TEXT);

  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  } finally {
    try { lock.releaseLock(); } catch(e){}
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Orbit Sync & Email Automation is Active").setMimeType(ContentService.MimeType.TEXT);
}
