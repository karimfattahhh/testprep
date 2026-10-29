import{H as e,V as t,W as n,a as r,o as i,s as a,t as o}from"./motion-cYl4la6I.js";import{F as s,P as c,R as l,T as u}from"./index-BsfN1sYQ.js";var d={synced:`2026-10-27`,source:`Official SAT Results sheet (Operations Tracker)`,tracker_exported:`2026-10-27`,all:{students:238,mean_diagnostic:1034,mean_official:1198,gain:164,median_gain:150,improved:219,same:5,lower:14,plus_100:167,plus_200:88,official_1400:30},levels:[{label:`Below 1,000`,lo:0,hi:1e3,students:93,mean_diagnostic:840,mean_official:1066,gain:226,median_gain:200,improved:92,same:0,lower:1,plus_100:79,plus_200:48,official_1400:1},{label:`1,000 to 1,190`,lo:1e3,hi:1200,students:93,mean_diagnostic:1085,mean_official:1248,gain:163,median_gain:180,improved:88,same:1,lower:4,plus_100:68,plus_200:38,official_1400:9},{label:`1,200 and above`,lo:1200,hi:1700,students:52,mean_diagnostic:1292,mean_official:1346,gain:54,median_gain:65,improved:39,same:4,lower:9,plus_100:20,plus_200:2,official_1400:20}],years:[{name:2023,students:26,mean_diagnostic:1003,mean_official:1118,gain:115,median_gain:115,improved:22,same:0,lower:4,plus_100:16,plus_200:7,official_1400:0},{name:2025,students:162,mean_diagnostic:1058,mean_official:1213,gain:155,median_gain:150,improved:153,same:5,lower:4,plus_100:114,plus_200:57,official_1400:24},{name:2026,students:50,mean_diagnostic:974,mean_official:1191,gain:217,median_gain:180,improved:44,same:0,lower:6,plus_100:37,plus_200:24,official_1400:6}],distribution:[{label:`Lower`,students:14},{label:`No change`,students:5},{label:`10 to 50`,students:30},{label:`60 to 90`,students:22},{label:`100 to 190`,students:79},{label:`200 to 290`,students:57},{label:`300 or more`,students:31}],top:{threshold:1400,students:30,mean_diagnostic:1230,mean_official:1438,gain:208,median_gain:155,improved:28,same:1,lower:1,plus_100:23,plus_200:12,official_1400:30,at_1450:8,at_1500:5,from:[{label:`Below 1,000`,students:1},{label:`1,000 to 1,190`,students:9},{label:`1,200 and above`,students:20}],sample:[{kind:`finish`,year:2025,diagnostic:1280,official:1510},{kind:`finish`,year:2025,diagnostic:1330,official:1510},{kind:`finish`,year:2025,diagnostic:1340,official:1500},{kind:`climb`,year:2026,diagnostic:1040,official:1420},{kind:`climb`,year:2025,diagnostic:1050,official:1410},{kind:`climb`,year:2025,diagnostic:1040,official:1400}]}},f=e=>e.toLocaleString(`en-US`),p=e=>e>0?`+${f(e)}`:e<0?`−${f(-e)}`:`0`,m=e=>e?new Date(e+`T12:00:00`).toLocaleDateString(`en-GB`,{day:`numeric`,month:`long`,year:`numeric`}):``,h=e=>e.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``),g=d,_=[`below-1000`,`1000-1190`,`1200-plus`],v=e=>typeof e==`string`&&_.includes(e),y=e=>d.levels[_.indexOf(e)],b=(e,t)=>`${Math.round(e/t*100)}%`,x=()=>d.years.map(e=>e.name).sort((e,t)=>e-t),S=()=>{let e=x().map(String);return e.length>1?`${e.slice(0,-1).join(`, `)} and ${e[e.length-1]}`:e[0]??``};function C(e,t){switch(t){case`gain`:return p(e.gain);case`gain_n`:return f(Math.abs(e.gain));case`median`:return f(e.median_gain);case`median_signed`:return p(e.median_gain);case`students`:return f(e.students);case`improved`:return`${f(e.improved)} of ${f(e.students)}`;case`improved_n`:return f(e.improved);case`improved_pct`:return b(e.improved,e.students);case`not_higher`:return f(e.same+e.lower);case`same`:return f(e.same);case`lower`:return f(e.lower);case`mean_diagnostic`:return f(e.mean_diagnostic);case`mean_official`:return f(e.mean_official);case`plus_100`:return f(e.plus_100);case`plus_100_pct`:return b(e.plus_100,e.students);case`plus_200`:return f(e.plus_200);case`plus_200_pct`:return b(e.plus_200,e.students);case`official_1400`:return f(e.official_1400);default:return null}}function w(e){let t=e.trim().split(`.`);if(t[0]===`effect`)return t[1]===`record_date`?m(d.tracker_exported??``):t[1]===`years`?S():t[1]===`first_year`?String(x()[0]??``):t[1]===`last_year`?String(x().at(-1)??``):C(d.all,t[1]);if(t[0]===`level`&&v(t[1]))return C(y(t[1]),t[2]);if(t[0]===`year`){let e=d.years.find(e=>String(e.name)===t[1]);return e?C(e,t[2]):null}if(t[0]===`top`){let e=d.top;if(t[1]===`threshold`)return f(e.threshold);if(t[1]===`at_1450`)return f(e.at_1450);if(t[1]===`at_1500`)return f(e.at_1500);if(t[1]===`from`){let n=e.from[_.indexOf(t[2])];return n?f(n.students):null}return C(e,t[1])}return null}var T=e=>w(e)??`[${e}]`,E=e=>e.replace(/\{\{\s*n:([^}\s]+)\s*\}\}/g,(e,t)=>T(t));function ee(e=!0){let t=d.all,n=d.tracker_exported?`, from records last updated on ${m(d.tracker_exported)}`:``;return e?`${f(t.students)} students with a TestPrep diagnostic and an official SAT score on record, ${S()}${n}. Gains are averages; the median gain is ${f(t.median_gain)} points. Every result on our official SAT results sheet with both scores counts, the official score against the diagnostic beside it, and the students who did not move up are in every average.`:`Averages across every student with a TestPrep diagnostic and an official SAT score on record, ${S()}${n}. Every result on our official SAT results sheet with both scores counts, and the students who did not move up are in every average.`}var D=n(e(),1),O=t(),te=1600,k=e=>(Math.min(te,Math.max(400,e))-400)/1200*100;function A({dark:e}){return(0,O.jsx)(`div`,{"aria-hidden":!0,className:r(`relative mt-1 h-4 text-[11px] tabular-nums`,e?`text-on-navy-faint`:`text-faint`),children:[400,800,1200,1600].map((e,t)=>(0,O.jsx)(`span`,{className:r(`absolute`,t===0?``:t===3?`-translate-x-full`:`-translate-x-1/2`),style:{left:`${k(e)}%`},children:f(e)},e))})}function j({from:e,to:t,label:n,detail:s,tip:c,dark:l,delay:d=0,live:m}){let h=(0,D.useRef)(null),g=a(h,{once:!0,amount:.6}),_=!!u(),v=t-e,y=k(Math.min(e,t)),b=k(Math.max(e,t)),x=_||g||!!m,S={duration:_?0:.9,ease:o,delay:_?0:d},C={...S,delay:(S.delay||0)+(_?0:.55)};return(0,O.jsxs)(`div`,{ref:h,tabIndex:0,role:`img`,className:`group relative rounded-md outline-none focus-visible:ring-2 focus-visible:ring-blue/40`,"aria-label":`${n?n+`: `:``}${f(e)} on the first diagnostic to ${f(t)} on the official SAT, ${p(v)} points${c?`. `+c:``}`,children:[n&&(0,O.jsxs)(`div`,{className:`mb-1 flex items-baseline justify-between gap-3 text-sm`,children:[(0,O.jsx)(`span`,{className:r(`font-semibold`,l?`text-white`:`text-ink`),children:n}),s&&(0,O.jsx)(`span`,{className:r(`tabular-nums`,l?`text-on-navy-faint`:`text-faint`),children:s})]}),(0,O.jsxs)(`div`,{className:`relative h-12`,children:[(0,O.jsx)(`div`,{className:r(`absolute top-8 right-0 left-0 h-px -translate-y-1/2`,l?`bg-white/20`:`bg-line`)}),(0,O.jsx)(i.div,{className:r(`absolute top-8 h-1.5 -translate-y-1/2 rounded-full`,l?`bg-blue-2`:`bg-blue`),initial:!m&&{width:0,left:`${y}%`},animate:x?{width:`${b-y}%`,left:`${y}%`}:{width:0,left:`${y}%`},transition:S}),(0,O.jsx)(i.span,{className:r(`absolute top-8 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2`,l?`border-blue-2 bg-night`:`border-blue bg-white`),initial:!1,animate:{left:`${k(e)}%`},transition:S}),(0,O.jsx)(i.span,{className:r(`absolute top-8 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full`,l?`bg-blue-2`:`bg-blue`),initial:!m&&{opacity:0,left:`${k(e)}%`},animate:x?{opacity:1,left:`${k(t)}%`}:{opacity:0,left:`${k(e)}%`},transition:S}),(0,O.jsx)(i.span,{className:r(`absolute top-0 -translate-x-1/2 rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums`,l?`bg-white text-night`:`bg-blue-soft text-blue`),initial:!m&&{opacity:0,left:`${k(t)}%`},animate:x?{opacity:1,left:`${k(t)}%`}:{opacity:0,left:`${k(t)}%`},transition:m?S:C,children:p(v)})]}),(0,O.jsxs)(`div`,{className:r(`flex justify-between text-xs tabular-nums`,l?`text-on-navy-faint`:`text-muted`),children:[(0,O.jsxs)(`span`,{children:[f(e),` at the diagnostic`]}),(0,O.jsxs)(`span`,{children:[f(t),` on the official SAT`]})]}),c&&(0,O.jsx)(`span`,{role:`tooltip`,className:r(`pointer-events-none absolute right-0 -top-7 z-10 rounded-md px-2 py-1 text-xs whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100`,l?`bg-white text-night`:`bg-ink text-white`),children:c})]})}var ne=`---
title: How we count
date: 2026-10-22
order: 3
type: effect
status: published
tests: sat
tags: method
art: ledger
summary: The rules behind each number on this site: who counts, who is left out, and why the students who did not move up stay in every average.
stats: effect.students · students who count | effect.improved · scored higher on the official SAT | effect.not_higher · scored the same or lower, kept in every average
---
Numbers are only worth showing if the counting behind them is plain.

Here is ours.

{{photo:wall-of-memories|The Wall of Memories at the Hamra centre: our classes, one polaroid at a time.}}

## The source

One record: our official SAT results sheet.

It lists every official SAT result students have sent us since {{n:effect.first_year}}, next to their TestPrep diagnostic where we have it, and the progress between the two.

Every number in these stories is computed from that sheet, and can be checked against it line by line. The sheet was last read on {{n:effect.record_date}}.

## Two moments, nothing between

Only two scores are in the Effect: the first diagnostic, taken on day one, and the official SAT, the score the student sends us.

The checks after each lesson, the halfway test and the full practice tests steer the plan. They are in no average.

{{engine:1,5,7}}

{{read:elmy-measures-progress|How Elmy measures the distance|Where each score is taken, and which two the Effect counts.}}

## The rules

1. **A result counts when both scores are on the sheet:** a TestPrep diagnostic and an official SAT total on the 400 to 1,600 scale. A diagnostic alone proves nothing, and neither does an official score without a starting point.
2. **The gain is the sheet's own.** Each result's gain is its progress on the sheet: the official score minus the diagnostic beside it. Nothing is added from other records, and nothing on the sheet is left out.
3. **Nobody is dropped for a low result.** The {{n:effect.not_higher}} students who scored the same or lower stay in every average. That is why the share who scored higher, {{n:effect.improved}}, sits next to the gain.
4. **Gains are per student.** The average is the mean of {{n:effect.students}} individual gains, with the median beside it.
5. **Years are kept apart.** The record covers {{n:effect.years}}, and the report shows each year on its own. The 2024 results on file came without diagnostics, so they are not counted.

## What we do not publish

- **School-by-school results**, without the school's written permission.
- **Results by instructor.** They stay inside TestPrep.
- **The records themselves.** They hold names.

{{photo:fair-booth|The TestPrep booth at a school fair.}}

The full record, read four ways, is the report: [The TestPrep Effect, measured on the SAT](/success-stories/measured-on-the-sat).

If a number on this site ever changes, this post will say what moved and why.
`,re=`---
title: The TestPrep Effect, measured on the SAT
date: 2026-10-22
order: 1
type: effect
status: published
featured: true
tests: sat
tags: SAT, results, levels, years, distribution
art: fan
aliases: where-you-start=where-you-start, year-by-year=year-by-year, how-far-each-student-moved=how-far-each-student-moved
summary: The full report. Every result on our official SAT results sheet, read four ways: the gain, where students started, each year on its own, and how far each student moved.
stats: effect.gain · points, the average gain | effect.median · points, the median gain | effect.improved_pct · scored higher on the official SAT | effect.mean_official · the average official score, up from {{n:effect.mean_diagnostic}} on day one
---
Two scores for every student.

The TestPrep diagnostic they sit on day one, before any teaching. The official SAT they send us afterwards.

The distance between the two is the TestPrep Effect.

{{photo:class-sat-practice|A class working through an official SAT practice question at the Hamra centre.}}

## The numbers

Across {{n:effect.years}}: {{n:effect.students}} students.

{{figures:effect.gain|points, the average gain;effect.median|points, the median gain;effect.improved_pct|scored higher on the official SAT;effect.official_1400|students finished at 1,400 or above}}

- The average moved from **{{n:effect.mean_diagnostic}}** on day one to **{{n:effect.mean_official}}** on the official SAT.
- **{{n:effect.plus_100_pct}}** gained 100 points or more. **{{n:effect.plus_200_pct}}** gained 200 or more.
- The median sits close to the average, so the gain is not carried by a few big jumps.

> The diagnostic tells us where a student starts. The official SAT tells us where they finished. The Effect is the distance between the two.

## Where you start

The same students, by their score on the first diagnostic.

{{chart:levels}}

### Below 1,000

**{{n:level.below-1000.gain}} points** on average. {{n:level.below-1000.improved}} scored higher.

Marks are lost on things teaching fixes quickly: algebra steps, the grammar rules the test keeps asking about, pacing, the format itself. There is a lot to recover, so the score rises fast.

### 1,000 to 1,190

**{{n:level.1000-1190.gain}} points** on average. {{n:level.1000-1190.improved}} scored higher.

The foundations hold. The plan goes to the few skills that still cost the most marks.

### 1,200 and above

**{{n:level.1200-plus.gain}} points** on average. {{n:level.1200-plus.improved}} scored higher.

The easy marks are already in hand. What remains is the harder module, the dense passages, the last questions in each section. Each point costs more.

So a gain is always read against where it started. {{n:level.1200-plus.gain_n}} points from {{n:level.1200-plus.mean_diagnostic}} is different work from {{n:level.below-1000.gain_n}} points from {{n:level.below-1000.mean_diagnostic}}.

{{photos:lesson-at-the-table,class-group|Lessons at the Hamra centre, in groups built by level from the diagnostic.}}

## Year by year

One average hides a lot. Here is each year on its own.

{{chart:years}}

- **2025:** {{n:year.2025.students}} students, {{n:year.2025.gain}} points on average. Our headline, 150+ points on average in one cohort, describes this group.
- **2026:** {{n:year.2026.students}} students so far, {{n:year.2026.gain}}. The group is still growing as official scores come in.
- **2023:** {{n:year.2023.students}} students, {{n:year.2023.gain}}. A small group, so a few results move its average.

Across every year together, the average is {{n:effect.gain}}.

## How far each student moved

{{chart:distribution}}

Each bar counts the students whose official SAT was that many points above their first diagnostic.

Most gained 100 points or more. Some gained far more.

**{{n:effect.not_higher}} students scored the same or lower.** They stay in every average on this site. A record that kept only the good results would not be worth reading.

{{photo:corridor-group|Students at the Hamra centre, by the Wall of Memories.}}

## What the gain is not

**Not a promise.** Students start in very different places, and where you start matters.

**Not a selection.** The record holds every student who sent us an official score, whatever that score was.

{{read:elmy-measures-progress|How Elmy measures the distance|Where each of these scores is taken, and how the platform behind TestPrep keeps the record.}}

How each number is counted, and who is left out and why, is its own post: [How we count](/success-stories/how-we-count).
`,ie=`---
title: How Elmy measures the distance
date: 2026-10-27
order: 2
type: effect
status: published
tests: sat
tags: Elmy, method, measurement
art: bands
caption: Every score, taken in one place.
summary: Where each score in the TestPrep Effect is taken, and how Elmy, the learning platform behind TestPrep, turns a diagnostic into a plan, a plan into lessons, and lessons into a record.
---
Every number in the TestPrep Effect starts in Elmy.

Elmy is the learning platform behind TestPrep, part of House of Prep. It runs our diagnostics, plans and reports.

{{photo:practice-tablet|Practice between lessons at the Hamra centre.}}

## The first score is a profile

The diagnostic is a full-length test in the SAT's format, under test conditions, before the first lesson.

Elmy records it question by question. Each answer is tagged by skill, topic and difficulty.

So the baseline is not one number. It is a profile of where the marks went.

{{engine:1,2}}

## From the profile to a plan

The ranking of gaps is read from the student's own answers, not the class average. It looks different at 900 and at 1,300:

- **Under 1,000**, the list is long and the gaps are wide.
- **Above 1,200**, it is short and the gaps are narrow.

The plan is built from that ranking and the target. That is why the groups are built by level, and the practice sets are built from the results.

## Every check, beside the first one

The lessons go to the gaps. After each one, a short check shows what is fixed and what slipped.

The checks and the full practice tests are recorded the same way, next to the diagnostic. A slip is seen the week it happens.

When the data changes, the plan changes with it:

- a skill that slipped moves up the list
- the practice sets change
- at the halfway test, the groups are reset, so a student who has closed the foundations moves up

{{elmy:screens}}

## Who sees it

The instructor, the student and their parents.

They can open the scores, the attempts and the reports any day.

{{photo:practice-laptop|Two students working through a practice set at the Hamra centre.}}

## The two scores that count

{{elmy}}

Only the first diagnostic and the official SAT are in the Effect.

The checks and practice tests steer the plan. A practice gain is not an official gain, so none of them appears in an average on this site.

When the official SAT arrives, Elmy reads it against that first diagnostic. The distance is the TestPrep Effect.

{{read:measured-on-the-sat|The TestPrep Effect, measured on the SAT|The full record: the gain, where students started, each year, and how far each student moved.}}
`,ae=`---
title: The highest scores on the record
date: 2026-10-27
order: 3
type: effect
status: published
tests: sat
tags: SAT, high achievers, 1,400 and above
art: summit
aliases: sample-maya, sample-rami
summary: Every student on our official SAT results sheet who finished at 1,400 or above: where they started, how far they moved, and six of their journeys.
stats: top.students · students finished at 1,400 or above | top.mean_official · their average official score | top.gain · points, their average gain | top.at_1500 · finished at 1,500 or above
---
1,400 is where the SAT starts to open doors.

{{n:top.students}} students on our official SAT results sheet finished there, or higher.

Here is where they came from, and how far they moved.

{{photo:pair-at-the-centre|Students at the Hamra centre.}}

## The group

- They started at **{{n:top.mean_diagnostic}}** on average, and finished at **{{n:top.mean_official}}**.
- The median gain was **{{n:top.median}} points**.
- **{{n:top.improved}}** scored higher on the official SAT than on their diagnostic.
- **{{n:top.at_1450}}** reached 1,450 or above.

## Where they started

Most were already strong on day one.

- **{{n:top.from.1200-plus}}** started at 1,200 or above.
- **{{n:top.from.1000-1190}}** started between 1,000 and 1,190.
- **{{n:top.from.below-1000}}** started below 1,000.

A strong start is not a finished score. Near the top, the easy marks are already in hand. What is left is the harder module, the dense passages and the last questions in each section, and every point there costs more.

## Six journeys

Six real results from the top of the sheet. No names, no schools.

{{chart:top}}

### The highest finishes

Three students who were already above 1,200 on day one, and finished at 1,500 or above.

The gap between a strong score and a top score is narrow. These students closed it.

### The biggest climbs

Three students who started just above 1,000, and crossed 1,400.

From the middle of the scale to the top.

## What it took

The same seven steps every TestPrep student goes through. Near the top, three of them carry the most weight.

{{engine:2,5,6}}

- **Where marks are lost.** You see which skills cost you points, ranked.
- **Short checks.** A short check after each lesson shows what is fixed, and what just slipped.
- **The plan adapts.** When the data changes, your plan changes with it.

{{photo:instructor-and-students|An instructor with students at the Hamra centre.}}

## About these students

These six are real results from our official SAT results sheet. We show them without names or schools, and the photos in this post show TestPrep students at the centre, not the six above.

A student's own story, with their name, appears only with their written consent, and a parent's as well for anyone under 18. If you finished at the top and want to tell yours, [tell us](/contact).

{{read:measured-on-the-sat|The TestPrep Effect, measured on the SAT|The full record: every result on the sheet, read four ways.}}
`;function oe(e){let t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{meta:{},body:e};let n={},r=null;for(let e of t[1].split(/\r?\n/)){if(!e.trim()||e.trim().startsWith(`#`))continue;let t=e.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);if(t){t[2]===``?(r={},n[t[1]]=r):(r=null,n[t[1]]=M(t[2]));continue}let i=e.match(/^\s+([A-Za-z_][\w-]*):\s*(.*)$/);i&&r&&(r[i[1]]=M(i[2]))}return{meta:n,body:t[2]}}function M(e){return e=e.trim(),e===`true`?!0:e===`false`?!1:/^-?\d+(\.\d+)?$/.test(e)?Number(e):/^\[.*\]$/.test(e)?e.slice(1,-1).split(`,`).map(e=>e.trim()).filter(Boolean):/^(['"]).*\1$/.test(e)?e.slice(1,-1):e}function se(e){let t=[],n=e.consent&&typeof e.consent==`object`?e.consent:{};return e.type===`student`&&(n.student!==`written`&&t.push(`no written consent from the student`),n.parent!==`written`&&n.parent!==`not-needed`&&t.push(`no written consent from a parent (or parent: not-needed)`)),e.type===`school`&&n.school!==`written`&&t.push(`no written permission from the school`),e.sample===!0&&t.push(`a sample with invented content`),e.status!==`published`&&t.push(`status is not published`),t}var ce={student:`Student story`,effect:`The TestPrep Effect`,school:`School partnership`,voices:`Voices`},le={sat:`SAT`,psat:`PSAT`,act:`ACT`,ap:`AP`,ielts:`IELTS`,toefl:`TOEFL`,eee:`EEE`,gre:`GRE`,gmat:`GMAT`,mcat:`MCAT`},ue=e=>le[e]??e.toUpperCase(),de=Object.assign({"../content/stories/2026-10-22-how-we-count.md":ne,"../content/stories/2026-10-22-measured-on-the-sat.md":re,"../content/stories/2026-10-25-in-their-words.md":``,"../content/stories/2026-10-27-elmy-measures-progress.md":ie,"../content/stories/2026-10-27-high-achievers.md":ae}),N=e=>Array.isArray(e)?e.map(String):typeof e==`string`?e.split(`,`).map(e=>e.trim()).filter(Boolean):[],P=e=>e==null?``:String(e);function F(e,t){if(!t.trim())return null;let n=e.split(`/`).pop().replace(/\.md$/,``).replace(/^\d{4}-\d{2}-\d{2}-/,``),{meta:r,body:i}=oe(t),a=[`student`,`effect`,`school`,`voices`].includes(P(r.type))?r.type:`effect`,o=r.consent&&typeof r.consent==`object`?r.consent:void 0,s=r.profile&&typeof r.profile==`object`?r.profile:void 0,c=a===`student`&&o?.scores===!0,l=P(r.stats).split(`|`).map(e=>e.trim()).filter(Boolean).map(e=>{let[t,...n]=e.split(`·`),r=t.trim();return{key:r,big:T(r),small:E(n.join(`·`).trim())}}),u=i.replace(/\{\{[^}]*\}\}/g,``).split(/\s+/).filter(Boolean).length;return{slug:n,title:P(r.title)||n,date:P(r.date),order:Number(r.order)||99,type:a,summary:E(P(r.summary)),tests:N(r.tests).map(e=>e.toLowerCase()),tags:N(r.tags),level:v(r.level)?r.level:void 0,diagnostic:c&&typeof r.diagnostic==`number`?r.diagnostic:void 0,official:c&&typeof r.official==`number`?r.official:void 0,stats:l,cover:r.cover?P(r.cover):void 0,featured:r.featured===!0,status:r.status===`published`?`published`:`draft`,sample:r.sample===!0,consent:o,profile:s?{name:P(s.name)||void 0,school:o?.school_named&&P(s.school)||void 0,test:P(s.test)||void 0,year:P(s.year)||void 0}:void 0,body:i,minutes:Math.max(1,Math.round(u/200)),hasFigures:l.length>0||/\{\{\s*(chart:|n:|figures:|journey)/.test(i),chapters:Array.from(i.matchAll(/^##\s+(.+?)\s*$/gm)).map(e=>({id:h(e[1]),title:e[1]})),art:r.art?P(r.art):void 0,caption:r.caption?E(P(r.caption)):void 0,aliases:N(r.aliases).map(e=>{let[t,n]=e.split(`=`).map(e=>e.trim());return{slug:t,chapter:n||void 0}}),held:se(r)}}var I=Object.entries(de).map(([e,t])=>F(e,t)).filter(e=>!!e&&e.held.length===0).sort((e,t)=>t.date.localeCompare(e.date)||e.order-t.order),L=e=>I.find(t=>t.slug===e),R=e=>{for(let t of I){let n=t.aliases.find(t=>t.slug===e);if(n)return{story:t,chapter:n.chapter}}return null},z=[`fan`,`bands`,`ledger`,`years`,`spread`,`voices`,`climb`,`summit`],B=e=>typeof e==`string`&&z.includes(e),V={effect:`fan`,student:`climb`,voices:`voices`,school:`bands`},H=440,U={cobalt:`#1740A9`,blue2:`#6E93FF`,lav:`#C3C6FF`,navy:`#0B1E5C`,orange:`#FF963E`,grey:`#C9D3EA`,soft:`#EEF2FC`,muted:`#5E6377`,faint:`#9A9FAE`,ink:`#0B0E1A`,paper:`#FBFBFC`},fe={cobalt:`#FFFFFF`,blue2:`#C9D5FF`,lav:`#8EA6F5`,navy:`#1740A9`,orange:`#FF963E`,grey:`#5F7FD8`,soft:`#2B52B9`,muted:`#DCE3F7`,faint:`#B9C4E6`,ink:`#FFFFFF`,paper:`transparent`},W=(0,D.createContext)(!1),G=()=>(0,D.useContext)(W)?fe:U,K=g.all;function q(e){let t=1779033703^e.length;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),3432918353),t=t<<13|t>>>19;let n=t>>>0||1;return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var pe=(e,t)=>{let n=e.slice();for(let e=n.length-1;e>0;e--){let r=Math.floor(t()*(e+1));[n[e],n[r]]=[n[r],n[e]]}return n},J=(e,t)=>80+k(t)/100*(e-160);function me({id:e,W:t,dark:n}){let r=G(),i=(0,D.useContext)(W);return(0,O.jsxs)(`g`,{"data-layer":`paper`,children:[(0,O.jsx)(`defs`,{children:(0,O.jsx)(`pattern`,{id:e,width:`40`,height:`40`,patternUnits:`userSpaceOnUse`,children:(0,O.jsx)(`path`,{d:`M 40 0 L 0 0 0 40`,fill:`none`,stroke:i?`#FFFFFF`:n?`#C3C6FF`:r.cobalt,strokeOpacity:i?.1:n?.14:.09,strokeWidth:`1`})})}),(0,O.jsx)(`rect`,{width:t,height:H,fill:i?`transparent`:n?r.navy:r.paper}),(0,O.jsx)(`rect`,{width:t,height:H,fill:`url(#${e})`})]})}var Y=({x:e,y:t,r:n=9,dark:r})=>{let i=G(),a=(0,D.useContext)(W);return(0,O.jsx)(`circle`,{"data-pop":!0,cx:e,cy:t,r:n,fill:a?`transparent`:r?i.navy:`#FFFFFF`,stroke:r?i.lav:i.cobalt,strokeWidth:3})},X=({x:e,y:t,r:n=10})=>{let r=G();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`circle`,{"data-pop":!0,cx:e,cy:t,r:n*2.2,fill:r.orange,fillOpacity:.16}),(0,O.jsx)(`circle`,{"data-pop":!0,cx:e,cy:t,r:n,fill:r.orange})]})},Z=({r:e=7})=>(0,O.jsx)(`circle`,{"data-mover":!0,r:e,fill:U.orange,stroke:`#FFFFFF`,strokeWidth:2}),Q=({x:e,y:t,children:n,anchor:r=`start`,dark:i})=>{let a=G();return(0,O.jsx)(`text`,{"data-fade":!0,x:e,y:t,fontSize:12,fontFamily:`inherit`,textAnchor:r,fill:i?a.lav:a.muted,children:n})};function he({W:e,seed:t,wide:n}){let r=G(),i=q(t),a=e-(n?190:80),o=e=>400-(Math.min(1450,Math.max(850,e))-850)/600*340,s=o(K.mean_diagnostic),c=g.distribution,l=c.reduce((e,t)=>e+t.students,0),u={Lower:[-70,-10],"No change":[0,0],"10 to 50":[10,50],"60 to 90":[60,90],"100 to 190":[100,190],"200 to 290":[200,290],"300 or more":[300,420]},d=[];c.forEach(e=>{let t=Math.round(e.students/l*72),[n,r]=u[e.label]??[0,0];for(let e=0;e<t;e++)d.push(n+i()*(r-n))});let p=(a-80)*.42,m=e=>`M 80 ${s} C ${80+p} ${s}, ${a-p} ${o(K.mean_diagnostic+e)}, ${a} ${o(K.mean_diagnostic+e)}`;return(0,O.jsxs)(`g`,{"data-layer":`figure`,children:[n&&[1e3,1400].map(e=>(0,O.jsxs)(`g`,{children:[(0,O.jsx)(`line`,{"data-fade":!0,x1:80,y1:o(e),x2:a,y2:o(e),stroke:r.cobalt,strokeOpacity:.1,strokeWidth:1,strokeDasharray:`2 6`}),(0,O.jsx)(Q,{x:a+16,y:o(e)+4,children:f(e)})]},e)),d.map((e,t)=>(0,O.jsx)(`path`,{"data-draw":!0,d:m(e),fill:`none`,stroke:e>0?r.cobalt:r.grey,strokeOpacity:e>0?.22+Math.min(.5,e/500):.9,strokeWidth:1.3},t)),d.map((e,t)=>(0,O.jsx)(`circle`,{"data-pop":!0,cx:a,cy:o(K.mean_diagnostic+e),r:2.6,fill:e>0?r.cobalt:r.grey,fillOpacity:e>0?.55:1},`e${t}`)),(0,O.jsx)(`path`,{"data-draw":!0,"data-path":!0,d:m(K.gain),fill:`none`,stroke:r.orange,strokeWidth:3.5,strokeLinecap:`round`}),(0,O.jsx)(Y,{x:80,y:s,r:10}),(0,O.jsx)(X,{x:a,y:o(K.mean_official),r:8}),n&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Q,{x:80,y:s+30,children:`${f(K.mean_diagnostic)} · the first diagnostic, on average`}),(0,O.jsx)(`text`,{"data-fade":!0,x:a+16,y:o(K.mean_official)+5,fontSize:13,fontWeight:700,fontFamily:`inherit`,fill:r.ink,children:f(K.mean_official)}),(0,O.jsx)(`text`,{"data-fade":!0,x:a+16,y:o(K.mean_official)+21,fontSize:11,fontFamily:`inherit`,fill:r.muted,children:`the official SAT, on average`})]}),(0,O.jsx)(Z,{})]})}function ge({W:e,wide:t}){let n=G(),r=[110,220,330];return(0,O.jsxs)(`g`,{"data-layer":`figure`,children:[[400,800,1200,1600].map(r=>(0,O.jsxs)(`g`,{children:[(0,O.jsx)(`line`,{"data-fade":!0,x1:J(e,r),y1:50,x2:J(e,r),y2:390,stroke:n.cobalt,strokeOpacity:.12,strokeWidth:1}),t&&(0,O.jsx)(Q,{x:J(e,r),y:410,anchor:`middle`,children:f(r)})]},r)),g.levels.map((i,a)=>(0,O.jsxs)(`g`,{children:[(0,O.jsx)(`line`,{"data-draw":!0,x1:80,y1:r[a],x2:e-80,y2:r[a],stroke:n.grey,strokeWidth:1.5,strokeDasharray:`3 7`}),(0,O.jsx)(`path`,{"data-draw":!0,...a===0?{"data-path":!0}:{},d:`M ${J(e,i.mean_diagnostic)} ${r[a]} L ${J(e,i.mean_official)} ${r[a]}`,fill:`none`,stroke:n.cobalt,strokeWidth:7,strokeLinecap:`round`}),(0,O.jsx)(Y,{x:J(e,i.mean_diagnostic),y:r[a]}),(0,O.jsx)(X,{x:J(e,i.mean_official),y:r[a],r:9}),t&&(0,O.jsx)(Q,{x:80,y:r[a]-22,children:i.label})]},i.label)),(0,O.jsx)(Z,{})]})}function $({W:e,seed:t}){let n=G(),r=q(t),i=K.students,a=e>=1e3?29:24,o=Math.ceil(i/a),s=Math.min(36,Math.floor((e-120)/a),Math.floor(380/o)),c=Math.round(s*.78),l=(e-a*s+(s-c))/2,u=(H-o*s+(s-c))/2,d=pe([...Array(K.improved).fill(`up`),...Array(K.same).fill(`same`),...Array(K.lower).fill(`down`)],r),f=e=>e===`up`?n.cobalt:e===`same`?n.lav:n.grey;return(0,O.jsx)(`g`,{"data-layer":`figure`,children:d.map((e,t)=>(0,O.jsx)(`rect`,{"data-pop":!0,x:l+t%a*s,y:u+Math.floor(t/a)*s,width:c,height:c,rx:Math.max(3,c/5),fill:f(e),fillOpacity:e===`up`?.9:1},t))})}function _e({W:e,wide:t}){let n=G(),r=g.years,i=r.map((t,n)=>e*(n+1)/(r.length+1)),a=e=>400-(Math.min(1300,Math.max(900,e))-900)/400*330,o=Math.max(...r.map(e=>e.students));return(0,O.jsxs)(`g`,{"data-layer":`figure`,children:[(0,O.jsx)(`line`,{"data-fade":!0,x1:80,y1:400,x2:e-80,y2:400,stroke:n.grey,strokeWidth:1.5}),r.map((r,s)=>{let c=Math.min(e/4,50+r.students/o*170);return(0,O.jsxs)(`g`,{children:[(0,O.jsx)(`rect`,{"data-rise":!0,x:i[s]-c/2,y:a(r.mean_official),width:c,height:400-a(r.mean_official),rx:10,fill:n.soft}),(0,O.jsx)(`line`,{"data-draw":!0,x1:i[s],y1:a(r.mean_diagnostic),x2:i[s],y2:a(r.mean_official),stroke:n.cobalt,strokeWidth:7,strokeLinecap:`round`}),(0,O.jsx)(Y,{x:i[s],y:a(r.mean_diagnostic)}),(0,O.jsx)(X,{x:i[s],y:a(r.mean_official),r:9}),t&&(0,O.jsx)(Q,{x:i[s],y:424,anchor:`middle`,children:String(r.name)})]},r.name)})]})}function ve({W:e,wide:t}){let n=G(),r=g.distribution,i=r.reduce((e,t)=>e+t.students,0),a=[34,46,100,150,220,290,340],o=e=>e<2?n.grey:e<4?n.blue2:n.cobalt,s=(e-160)/i,c=Math.max(1.2,Math.min(2.4,s*.6)),l=0;return(0,O.jsxs)(`g`,{"data-layer":`figure`,children:[(0,O.jsx)(`line`,{"data-fade":!0,x1:80,y1:400,x2:e-80,y2:400,stroke:n.grey,strokeWidth:1.5}),r.flatMap((e,t)=>Array.from({length:e.students},()=>{let e=80+(l+++.5)*s;return(0,O.jsx)(`line`,{"data-rise":!0,x1:e,y1:400,x2:e,y2:400-a[t],stroke:o(t),strokeWidth:c,strokeLinecap:`round`},`${t}-${l}`)})),t&&r.map((e,t)=>{let n=80+(r.slice(0,t).reduce((e,t)=>e+t.students,0)+e.students/2)*s;return(0,O.jsx)(Q,{x:n,y:424,anchor:`middle`,children:e.label},e.label)})]})}function ye({W:e,seed:t}){let n=G(),r=q(t);return(0,O.jsxs)(`g`,{"data-layer":`figure`,children:[Array.from({length:9},(t,i)=>{let a=60+i*40,o=80+i%3*60,s=[];for(;o<e-110;){let t=40+r()*150,c=r()<.06;s.push((0,O.jsx)(`line`,{"data-draw":!0,x1:o,y1:a,x2:Math.min(e-80,o+t),y2:a,stroke:c?n.orange:i%2?n.lav:n.cobalt,strokeOpacity:c?1:.55,strokeWidth:10,strokeLinecap:`round`},`${i}-${o}`)),o+=t+22+r()*30}return s}),(0,O.jsx)(`path`,{"data-draw":!0,d:`M 92 418 q 0 -22 22 -22 M 130 418 q 0 -22 22 -22`,fill:`none`,stroke:n.orange,strokeWidth:6,strokeLinecap:`round`})]})}function be({W:e,seed:t,from:n,to:r,wide:i}){let a=G(),o=q(t),s=e=>400-(Math.min(1600,Math.max(400,e))-400)/1200*320,c=Array.from({length:21},(t,i)=>{let a=i/20,c=n+(r-n)*(a<.5?a*.9:.45+(a-.5)*1.1)+(i&&i<20?(o()-.45)*40:0);return{x:80+a*(e-160),y:s(c),i}}),l=c.map((e,t)=>`${t?`L`:`M`} ${e.x.toFixed(1)} ${e.y.toFixed(1)}`).join(` `);return(0,O.jsxs)(`g`,{"data-layer":`figure`,children:[(0,O.jsx)(`path`,{"data-draw":!0,"data-path":!0,d:l,fill:`none`,stroke:a.cobalt,strokeWidth:3.5,strokeLinejoin:`round`,strokeLinecap:`round`}),c.filter(e=>e.i>0&&e.i<20&&e.i!==10).map(e=>(0,O.jsx)(`rect`,{"data-pop":!0,x:e.x-5,y:e.y-5,width:10,height:10,rx:3,fill:a.blue2},e.i)),(0,O.jsx)(Y,{x:c[0].x,y:c[0].y}),(0,O.jsx)(X,{x:c[10].x,y:c[10].y,r:7}),(0,O.jsx)(X,{x:c[20].x,y:c[20].y,r:10}),i&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Q,{x:c[0].x,y:c[0].y+30,children:`${f(n)} · the first diagnostic`}),(0,O.jsx)(Q,{x:c[10].x,y:c[10].y+32,anchor:`middle`,children:`halfway test`}),(0,O.jsx)(Q,{x:c[20].x,y:c[20].y-22,anchor:`end`,children:`${f(r)} · the official SAT`})]}),(0,O.jsx)(Z,{})]})}function xe({W:e,from:t,to:n,wide:r}){let i=G(),a=e/2,o=Math.min(400,e/2-40),s=(e,t)=>{let n=Math.PI+Math.PI*(Math.min(1600,Math.max(1200,t))-1200)/400;return{x:a+e*Math.cos(n),y:470+e*Math.sin(n)}},c=(e,t,n)=>{let r=s(e,t),i=s(e,n);return`M ${r.x} ${r.y} A ${e} ${e} 0 0 1 ${i.x} ${i.y}`},l=s(o,t),u=s(o,n);return(0,O.jsxs)(`g`,{"data-layer":`figure`,children:[[.375,.5,.625,.75,.875].map((e,t)=>(0,O.jsx)(`path`,{"data-draw":!0,d:c(o*e,1200,1600),fill:`none`,stroke:i.lav,strokeOpacity:.25+t*.05,strokeWidth:1.5},e)),(0,O.jsx)(`path`,{"data-draw":!0,d:c(o,1200,1600),fill:`none`,stroke:i.lav,strokeOpacity:.6,strokeWidth:2.5}),(0,O.jsx)(`path`,{"data-draw":!0,"data-path":!0,d:c(o,t,n),fill:`none`,stroke:i.blue2,strokeWidth:7,strokeLinecap:`round`}),(0,O.jsx)(Y,{x:l.x,y:l.y,dark:!0}),(0,O.jsx)(X,{x:u.x,y:u.y,r:10}),r&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Q,{x:l.x-16,y:l.y+4,anchor:`end`,dark:!0,children:`${f(t)} · the first diagnostic`}),(0,O.jsx)(Q,{x:u.x+20,y:u.y-6,dark:!0,children:`${f(n)} · the official SAT`})]}),(0,O.jsx)(Z,{})]})}var Se={fan:he,bands:ge,ledger:$,years:_e,spread:ve,voices:ye,climb:be,summit:xe};function Ce({story:e,framed:t,aspect:n,onColor:r}){let i=(0,D.useRef)(null),a=(0,D.useId)().replace(/:/g,``),[o,u]=(0,D.useState)(1180),d=B(e.art)?e.art:V[e.type],p=e.type===`student`&&e.diagnostic!=null&&e.official!=null,m=d===`summit`?g.top:K,h=p?e.diagnostic:m.mean_diagnostic,_=p?e.official:m.mean_official,v=d===`summit`;(0,D.useEffect)(()=>{let e=i.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect();t.height>0&&u(Math.max(600,Math.min(1180,Math.round(t.width/t.height*H))))};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]),s(()=>{if(!i.current)return;let e=l.utils.selector(i),n=e(`[data-path]`)[0],r=e(`[data-mover]`)[0];if(c()){r&&n&&l.set(r,{motionPath:{path:n,align:n,alignOrigin:[.5,.5],end:1}});return}let a=t?l.timeline({delay:.15,scrollTrigger:{trigger:i.current,start:`top 82%`,once:!0}}):l.timeline({delay:.9});e(`[data-draw]`).length&&a.from(e(`[data-draw]`),{drawSVG:`0%`,duration:1.3,ease:`power2.inOut`,stagger:{each:.025,from:`start`}},0),e(`[data-rise]`).length&&a.from(e(`[data-rise]`),{scaleY:0,transformOrigin:`50% 100%`,duration:.9,ease:`power3.out`,stagger:{each:.004,from:`start`}},.1),e(`[data-pop]`).length&&a.from(e(`[data-pop]`),{scale:0,transformOrigin:`50% 50%`,duration:.5,ease:`back.out(2)`,stagger:{each:.006,from:`random`}},.4),e(`[data-fade]`).length&&a.from(e(`[data-fade]`),{autoAlpha:0,duration:.6,stagger:.06},.2),r&&n&&(l.set(r,{autoAlpha:0}),a.to(r,{autoAlpha:1,duration:.2},.6).to(r,{motionPath:{path:n,align:n,alignOrigin:[.5,.5]},duration:2.2,ease:`power1.inOut`},.6));let o=l.matchMedia();return t||o.add(`(min-width: 1024px)`,()=>{l.to(e(`[data-layer='paper']`),{yPercent:-6,ease:`none`,scrollTrigger:{trigger:i.current,start:`top 85%`,end:`bottom top`,scrub:!0}}),l.to(e(`[data-layer='figure']`),{yPercent:5,ease:`none`,scrollTrigger:{trigger:i.current,start:`top 85%`,end:`bottom top`,scrub:!0}}),l.to(i.current,{opacity:.12,scale:.965,ease:`none`,scrollTrigger:{trigger:i.current,start:`bottom 78%`,end:`bottom 12%`,scrub:!0}})}),()=>o.revert()},{scope:i,dependencies:[e.slug,d,o,t]});let y=p?`${e.profile?.name??`The student`}'s scores as a picture: ${h} on the first diagnostic to ${_} on the official SAT`:d===`summit`?`The top of the scale as a picture: the students who finished at ${f(g.top.threshold)} or above, ${f(h)} to ${f(_)} on average`:`The record as a picture: ${Math.round(K.improved/K.students*100)}% scored higher; ${h} to ${_} on average`,b=Se[d];return(0,O.jsx)(`div`,{ref:i,className:t?`${n??`aspect-[16/10]`} overflow-hidden`:`aspect-[3/2] overflow-hidden rounded-[18px] sm:aspect-[2/1] sm:rounded-[22px] lg:aspect-[1180/440]`,role:`img`,"aria-label":y,children:(0,O.jsx)(`svg`,{viewBox:`0 0 ${o} ${H}`,preserveAspectRatio:`xMidYMid meet`,className:`block h-full w-full`,"aria-hidden":`true`,children:(0,O.jsxs)(W.Provider,{value:!!r,children:[(0,O.jsx)(me,{id:a,W:o,dark:v}),(0,O.jsx)(b,{W:o,seed:e.slug,from:h,to:_,wide:o>=860})]})},o)})}export{m as _,I as a,j as c,ee as d,g as f,f as g,S as h,R as i,k as l,T as m,ce as n,ue as o,E as p,L as r,A as s,Ce as t,_ as u,p as v,h as y};