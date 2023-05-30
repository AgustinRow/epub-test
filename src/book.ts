const bookCss = [
  '@page { size: 5.83in 8.27in; bleed: 0.125in; margin: 0.5in; }',
  "@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,300;1,400&display=swap');\n" +
    '@import url("https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap");',
  'body { widows:2;orphans:2;font-size:12pt; }',
  ' section.full-title { top:0;left:0;right:0;bottom:0;display:flex;position:absolute;align-items:flex-end;flex-direction:column;justify-content:center; }',
  'section.full-title .publisher { font-size:0.85em; margin-top:auto; text-align:right;font-family:Roboto;font-weight:300; }',
  'section.full-title .publisher-icon { width:auto;margin: 0 0 0 auto; }',
  'section.full-title .publisher-icon img { max-height:40px; }',
  ' section.full-title .publisher-name p { margin:auto;font-size:8.5pt; text-align:right;line-height:1.2; }',
  'section.toc { margin:0 0; }',
  "section.toc .toc-content ol.rear-matter { color:#979797;padding:0;font-size:8.5pt;font-family:'Roboto';font-weight:bold;line-height:1.4;letter-spacing:.06em;text-transform:uppercase;list-style-type:none; }",
  'section.toc .toc-content .body-matter li.toc-chapter::before { content:attr(data-chapter-number);border-right:solid 4px #979797;margin-right:5px;padding-right:5px; }',
  `section.toc .toc-content .body-matter li a:after, section.toc .toc-content .rear-matter  li a:after { color:black;width:30px;content:" " target-counter(attr(href, url), page);display:inline-block;font-size:11px;font-style:normal;font-family:'Roboto';font-weight:bold; }`,
  'section.full-title .title { color:inherit;margin:0;hyphens:none;padding: 0;font-size:21pt;font-style:normal;margin-top:auto;text-align:right;font-family:Roboto;font-weight:300;line-height:27pt;border-right:none;letter-spacing:0.06em;text-transform:none; }',
  ' section.full-title .subtitle { color:#7a7a7a;hyphens:none;font-size:18pt;font-style:normal;text-align:right;line-height:24pt; font-family:Roboto; font-weight:300;border-right:solid 8px #979797;margin-right:0;padding-right:12px; letter-spacing:0.05em; }',
  'section.toc .toc-content ol { text-align:right;page-break-inside:avoid; }',
  'section.full-title .author { hyphens:none;font-size:15pt;font-family:Roboto;font-weight:300;line-height:21pt;letter-spacing:0.06em;text-transform:none; }',
  'section.full-title .subtitle + .author { margin-top:15%; }',
  'section.full-title .contributor { color:#888888;margin:0 0 0 10%;hyphens:none;font-size:12pt;font-style:normal; text-align:right;font-family:Roboto;font-weight:300;line-height:16pt;letter-spacing:0.05em;text-transform:none; }',
  'section.toc .toc-content ol.body-matter > li { margin-top:16pt; }',
  'section.part { margin:0;font-size:11pt;line-height:1.5;padding-top:100px; }',
  'section.part .part-title { color:#7a7a7a;hyphens:none;font-size:13pt;text-align:right;font-family:"Roboto";font-weight:bold;line-height:17pt;border-right:solid 8px #979797;margin-right:0px;margin-bottom:95px;padding-right:12px;letter-spacing:0.06em;text-transform:uppercase; }',
  'section.part .part-content {  }',
  'section.part .part-content p { font-size:10pt;margin-top:0.5%;font-family:"EB Garamond", serif;font-weight:200;line-height:13pt; }',
  'section.text-insert { font-size:11pt;line-height:1.4; }',
  'section.text-insert .text-insert-title { color:inherit;margin:100px 20px 95px 0px;hyphens:none;padding:0;font-size:17pt;font-style:normal;text-align:right;font-family:"Roboto";font-weight:300;line-height:27pt;border-right:none;letter-spacing:0.06em;text-transform:none; }',
  'section.text-insert .text-insert-content {  }',
  'section.text-insert  .text-insert-content p { hyphens:none;font-size:12pt;font-family:"EB Garamond", serif; }',
  'section.text-insert .text-insert-content h1 { hyphens:none;font-size:12pt;text-align:left;font-family:"Roboto";font-weight:400;text-indent:0;margin-bottom:-8px;letter-spacing:0.1em;text-transform:none;page-break-after:avoid; }',
  'section.text-insert .text-insert-content h2 { hyphens:none;font-size:11.5pt;font-style:italic;text-align:left;font-family:"Roboto";font-weight:400;text-indent:0;margin-bottom:-15px;letter-spacing:0.05em;page-break-after:avoid; }',
  'section.half-title, section.full-title, section.toc { page-break-after:always;page-break-before:left !important; }',
  'section.copyright, section.dedication, section.about-the-author, section.text-insert, section.references, section.notes, section.photo-insert { page-break-after:always; }',
  '.body-matter > .chapter:first-of-type { counter-reset:page 1;page-break-before:left !important; }',
  '.chapter { page-break-before:always; }',
  'section.part { page-break-after:always;page-break-before:left !important; }',
  '.blank-page { page-break-after:always; }',
  'section.toc .toc-content ol.body-matter li.toc-part { font-size:15px;font-weight:bold; }',
  `section.toc .toc-content ol.front-matter  li a:after { color:#000;width:30px;content:" " target-counter(attr(href, url), page, lower-roman);display:inline-block;font-size:11px;font-style:normal;font-family:'Roboto';font-weight:bold; }`,
  'section.photo-insert { margin:0;font-size:11pt;line-height:1.5;padding-top:100px; }',
  'section.photo-insert .photo-insert-title { color:#7a7a7a;hyphens:none;font-size:13pt;text-align:right;font-family:"Roboto";font-weight:bold;line-height:17pt;border-right:solid 8px #979797;margin-right:0px;margin-bottom:95px;padding-right:12px;letter-spacing:0.06em;text-transform:uppercase; }',
  'section.photo-insert .photo-insert-content {  }',
  'section.photo-insert .photo-insert-content p { font-size:10pt;margin-top:0.5%;font-family:"EB Garamond", serif;font-weight:200;line-height:13pt; }',
  'body { counter-reset:chapter; }',
  'section.notes, section.references { padding-top:100px; }',
  '.chapter { page:chap;margin:auto;padding:0;font-size:11pt;line-height:1.5;padding-bottom:.0625in;prince-page-group:start; }',
  '.chapter .chapter-number { string-set:ChapterNumber content(); }',
  '.chapter .chapter-number { color:#7a7a7a;height:30px;content:string(ChapterNumber);display:block;hyphens:none;font-size:22pt;font-style:normal;margin-top:45px;text-align:right;font-family:"Roboto";font-weight:600;line-height:24pt;border-right:solid 8px #979797;margin-right:0;padding-right:12px;letter-spacing:0.05em; }',
  '.chapter .chapter-content { margin:45px 0 0 0; }',
  '.chapter .chapter-content img { height:auto;max-width:100%; }',
  'ul, ol { font-family:"EB Garamond", serif; }',
  'section.notes .notes-content, section.references .references-content {  }',
  'section.about-the-author p { font-family:"Eb Garamond", serif; }',
  'section.about-the-author { display:flex;font-size:11pt;margin-top:30%;align-items:center;flex-direction:column; }',
  'section.about-the-author img { height:auto;max-width:30%; }',
  '.chapter .chapter-title { color:inherit;margin:40px 8px 0 0;hyphens:none;padding:0;font-size:17pt;font-style:normal;text-align:right;font-family:"Roboto";font-weight:300;line-height:27pt;border-right:none;letter-spacing:0.06em;text-transform:none; }',
  '.chapter .chapter-content p:first-of-type::first-letter { float:left;margin:0;padding:0;font-size:3.5em;font-family:"Roboto";font-weight:200;line-height:0.9; }',
  '.chapter .chapter-content h1 { hyphens:none;font-size:12pt;text-align:left;font-family:"Roboto";font-weight:bold;text-indent:0;margin-bottom:8pt;letter-spacing:0.1em;text-transform:none;page-break-after:avoid; }',
  '.chapter .chapter-content h2 { hyphens:none;font-size:11.5pt;font-style:italic;text-align:left;font-family:"Roboto";font-weight:bold;text-indent:0;margin-bottom:4pt;letter-spacing:0.05em;page-break-after:avoid; }',
  '.chapter .chapter-content h3 { hyphens:none;font-size:11pt;text-align:left;font-family:roboto;font-weight:normal;text-indent:0;margin-bottom:0;letter-spacing:0.07em;page-break-after:avoid; }',
  'table td { font-size:0.95em;font-family:"EB Garamond", serif; }',
  ' @page chap:first { margin-bottom:.625in; }',
  ' @page chap:first { @top { margin:0;content:"";padding:0; }}',
  'section.notes .notes-title, section.references .references-title { color:#7a7a7a;hyphens:none;font-size:13pt;text-align:right;font-family:"Roboto";font-weight:bold;line-height:17pt;border-right:solid 8px #979797;margin-right:0px;margin-bottom:95px;padding-right:12px;letter-spacing:0.06em;text-transform:uppercase; }',
  'section.notes .notes-content h1, section.references .references-content h1 { margin:auto 0 4pt 0;hyphens:none;font-size:10.5pt;text-align:left;font-family:"Roboto";font-weight:bold;line-height:13pt;text-indent:0;letter-spacing:0.05em;page-break-after:avoid; }',
  'section.notes .notes-content h2, section.references .references-content h2 { hyphens:none;font-size:10pt;font-style:italic;margin-top:4pt;text-align:left;font-family:"Roboto";font-weight:300;line-height:13pt;margin-left:0;margin-right:0;margin-bottom:0pt;letter-spacing:0.05em;page-break-after:avoid; }',
  'section.notes .notes-content p, section.references .references-content p { font-size:10pt;margin-top:0.5%;font-family:"EB Garamond", serif;font-weight:200;line-height:13pt; }',
  'section.notes ol, section.notes ul, section.references ol, section.references ul { font-size:10pt;margin-top:0.5%;font-family:"EB Garamond", serif;font-weight:200;line-height:13pt;margin-left:0%;padding-left:20px;list-style-position:inside; }',
  'section.notes li, section.references li {  }',
  'section.notes li::marker, section.references li::marker {  }',
  ' @page chap:first { @bottom { color:#555555;float:outside;margin:auto 0 0.5in 0;content:"| " counter(page)  " |";padding:0;font-size:9pt;text-align:right;font-family:"EB Garamond", serif;font-weight:bold;line-height:1;vertical-align:bottom; }}',
  '@page chap {  }',
  '@page chap { @top {  }}',
  '@page chap { @bottom {  }}',
  '@page chap:blank {  }',
  '@page chap:blank { @bottom { content:""; }}',
  '@page chap:left { margin-bottom:.625in ; }',
  '@page chap:left { @top { color:#555555;margin:0.5in 0 auto 0;content:string(Authorname);padding:0;font-size:8.5pt;text-align:left;font-family:"Roboto";font-weight:bold;line-height:1;letter-spacing:0.1em;text-transform:uppercase;vertical-align:top; }}',
  '@page chap:left { @bottom { color:#555555;margin:auto 0 0.5in 0;content:"| " counter(page)  " |";padding:0;font-size:9pt;text-align:left;font-family:"EB Garamond", serif;font-weight:bold;line-height:1;vertical-align:bottom; }}',
  '@page chap:right { margin-bottom:.625in  ; }',
  '@page chap:right {@top { color:#555555;margin:0.5in 0 auto 0;content:string(Booktitle);padding:0;font-size:8.5pt;text-align:right;font-family:"Roboto";font-weight:bold;line-height:1;letter-spacing:0.1em;text-transform:uppercase;vertical-align:top; }}',
  '@page chap:right {@bottom { color:#555555;float:outside;margin:auto 0 0.5in 0;content:"| " counter(page)  " |";padding:0;font-size:9pt;text-align:right;font-family:"EB Garamond", serif;font-weight:bold;line-height:1;vertical-align:bottom; }}',
  'section.full-title h1.title { string-set:Booktitle content(); }',
  'section.full-title .author { string-set:Authorname content(); }',
  'section.toc .toc-title { color:#7a7a7a;hyphens:none;font-size:13pt;margin-top:150px;text-align:right;font-family:"Roboto";font-weight:bold;line-height:17pt;border-right:solid 8px #979797;margin-right:0px;margin-bottom:95px;padding-right:12px;letter-spacing:0.06em;text-transform:uppercase; }',
  'section.toc .toc-content li a { color:inherit;text-decoration:none; }',
  "section.toc .toc-content ol.front-matter { color:#979797;padding:0;font-size:8.5pt;font-family:'Roboto';font-weight:bold;line-height:1.4;letter-spacing:.06em;text-transform:uppercase;list-style-type:none; }",
  "section.toc .toc-content ol.body-matter { hyphens:none;padding:0;text-align:right;font-family:'Roboto';font-weight:normal;letter-spacing:.06em;list-style-type:none; }"
]