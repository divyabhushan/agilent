---
id: abrt-mobile
title: ABRT Mobile Reports
sidebar_label: ABRT Mobile Reports
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

Mobile reports are summarized report of a web report, and the user must explicitly subscribe for the desired report.

## Before you begin

An Admin must grant access to the user on the respective Web report(parent). Refer <Link to={useBaseUrl('docs/admin-mode/user-access')}>Manage User's access</Link> section.

## Subscribe to the mobile report

* Go to **BI Platform > ABRT Reports** and click on **Mobile Reports**.
* Click the Bell icon ( <img height="15" src={useBaseUrl("img/bell.svg")}/> ) next to the report.
* Select the segments and click **Next**.
 > You can only select the segments that you have access to.
* Select the Frequency of subscription.
 > The mobile subscription frequency is managed by the admin while creating the report.
* Click **Save**.

You will receive the report summary mail for the subscribed report and mail frequency selected.

Sample mail screenshot
<div class="center">
  <Zoom>
    <img
      alt="Mobile report email"
      src={useBaseUrl("user/mobile-report.png")}
    />
  </Zoom>
  <p>Mobile report email</p>
</div>

## Send Mobile Notification

You can also trigger the mobile notification by clicking the **Send Notification** ( <img height="15" src={useBaseUrl("img/wifi.svg")}/> ) icon next to the report.

<div class="center">
  <Zoom>
    <img
      alt="Send Mobile Notification"
      src={useBaseUrl("user/send-mobile-notification.png")}
    />
  </Zoom>
  <p>Send Mobile Notification</p>
</div>

Following are the Fields:

| Field              | Description                                                                                           |
|--------------------|-------------------------------------------------------------------------------------------------------|
| Mobile Report Name | The Report Name (not editable) that you want to subscribe for.                                        |
| Segment            | Segments the report is available for.                                                                 |
| Report Period      | Period the report is available for.                                                                   |
| Notification Type  | Report or Alert                                                                                       |
| Report Frequency   | Subscription frequency as set by the Admin                                                            |
| Email Subject      | Default variable values: `<Report Name>_<Segment_Name>_<Period>_<Frequency>`. You can edit the value. |
| Message Header     |                                                                                                       |
| Message Footer     |                                                                                                       |
| Send Report To     | Test User(self) or the Subscribed User                                                                |

Click **Send**.



