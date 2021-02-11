---
id: doc1
title: Introduction
sidebar_label: Introduction
slug: /
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

BIHub provides an integrated platform for Agilent users. The **ABRT** platform includes both the product and a custom service with exclusive features.

## Exclusive Features for Agilent

- Reports Management
-

<div class="center">
  <Zoom>
<img alt="#" src={useBaseUrl('img/welcome.png')} />
  </Zoom>
  <p>...</p>
</div>

The reports are stored in the database in a well-organized fashion. Each Report has a unique name, belongs to a segment and a time-period.

<p id="border">
The report is fetched and downloaded from the database using the same report-segment-period logic.
</p>

The ABRT Power-user deals with the Reports....

## User Roles and Privileges

Agilent features are only available to the registered users in BI Hub platform who are configured to access the "Agilent" agent.

screenshot

ABRT provides a centralized repository to store and retrieve all types of Agilent reports.
These reports are secured with restricted access to users based on their roles and privileges.

| User Role              | Description                                                                                                                                    | Privilege                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Super Admin            | The default user that is configured while installing BI Hub components. Added to the "admin" group. A Super Admin is the most privileged role. | <ul><li>Administrative tasks</li><li>Add/remove other Admins</li><li>User/Group Management</li><li>Reports,Segments,Period Management</li><li>Cannot upload/delete reports</li></ul>             |
| Admin(Multiple Admins) | Users with access to all the admin tasks, but less privileged than a Super User                                                                | <ul><li>Added by Super Admin</li><li>Cannot add/remove other Admins</li><li>No access to "admin" group</li><li>Reports,Segments,Period Management</li><li>Cannot upload/delete reports</li></ul> |
| Power User             | Users with selective admin tasks. Power users have both admin mode and user mode                                                               | <ul><li>Added by Admins</li><li>Can add/remove other power users and groups</li><li>Cannot edit group permissions</li><li>Can upload/delete reports</li> </ul>                                   |
| User                   | This is a regular user, with no administrative tasks. Meant for view-only access                                                               | <ul><li>View and download Reports</li><li>Edit self profile settings</li></ul>                                                                                                                   |
