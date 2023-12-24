import React, { useState } from "react";

export default function Footer() {
  const [setting] = useState(false);
  return (
    <div className="footerWrapper">
      <div className="footer">
        <div className="leftfooter">
          <a
            href="https://about.google/?utm_source=google-PK&utm_medium=referral&utm_campaign=hp-footer&fg=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
          <a
            href="https://ads.google.com/intl/en_pk/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Advertising
          </a>
          <a
            href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none"
            target="_blank"
            rel="noopener noreferrer"
          >
            Business
          </a>
          <a
            href="https://www.google.com/search/howsearchworks/?fg=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            How Search works
          </a>
        </div>
        <div className="rightfooter">
          <a
            href="https://policies.google.com/u/1/privacy?hl=en-PK&fg=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy
          </a>
          <a
            href="https://policies.google.com/u/1/terms?hl=en-PK&fg=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms
          </a>
          <div className="settings"> Settings</div>
          {setting && (
            <div className="settingDiv">
              <a
                href="https://www.google.com/preferences?hl=en-PK&authuser=1&fg=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Search Settings
              </a>
              <a
                href="https://www.google.com/advanced_search?hl=en-PK&fg=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Advance search
              </a>
              <a
                href="https://myaccount.google.com/yourdata/search?utm_source=googlemenu&fg=1&pli=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Your data in Search
              </a>
              <a
                href="https://myactivity.google.com/product/search?utm_source=google&hl=en-PK&fg=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Search History
              </a>
              <a
                href="https://support.google.com/websearch/?p=ws_results_help&hl=en-PK&fg=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Search Help
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Send feedback
              </a>
              <hr />
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Dark theme :
                <svg
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <rect fill="none" height="24" width="24"></rect>
                  <path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path>
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
