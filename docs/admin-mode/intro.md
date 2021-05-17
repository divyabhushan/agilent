---
id: intro
title: Introduction
sidebar_label: Introduction
slug: /
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";


BIHub provides an integrated (**ABRT**) platform for Agilent users. The **ABRT** platform includes both the products and a custom service with exclusive features.<br></br>
The Agilent Reports are well-organized in this platform (database).
Each Report has a unique name, belongs to a sub-division (segment) and a time-period.<br></br>
To upload, search, download, or delete a report from the ABRT platform, you must specify the correct combination of the report-segment-period mapping as indicated in the below table:

<table class="cell">
    <caption>Report-Segment-Period Mapping</caption>
	<tr>
		 
		 <th>Segment/Report</th>
         <th>Report1</th>
         <th>Report2</th>
         <th>Report3</th>
         <th>Report4</th>
	</tr>
    <tr>
        <td>Segment1</td>
        <tr>
            <td>Q4</td>
            <td>Q3</td>
            <td>Q2</td>
            <td>Q1</td>
        </tr>
        <td>x</td>
        <td>x</td>
        <td>x</td>
    </tr>
	<tr>
		 <td>Segment2</td>
         <td>x</td>
         <td>x</td>
         <td>x</td>
         <td>2020</td>
	</tr>
    <tr>
        <td>Segment3</td>
        <td>x</td>
         <td>Q3</td>
         <td>Q2</td>
         <td>x</td>
    </tr>
    <tr>
        
        <td>Segment4</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
    </tr>
    <tr>
        <td>Segment5</td>
        <tr>
            <td></td>
            <td>2008</td>
            <td>2007</td>
        </tr>
        <tr> 
            <td>2006</td>           
            <td>2005</td>
            <td>2004</td>            
        </tr>
        <td>x</td>
        <td>x</td>
        <td>x</td>
    </tr>
</table>

- x denotes no reports

You can upload a single report in multiple segments and periods.

## Next Steps

<Link to={useBaseUrl('docs/admin-mode/welcome')}>Administer the ABRT Platform</Link>.