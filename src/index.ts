import { EPub } from 'epub-gen-memory'
import { Readable } from 'stream'
import fs from 'fs'
import { bookCss } from './book'



const sectionsFrontMatter = [
  {
    title: 'Dedication',
    content: `
    <section id='1-dedication' class='dedication'>
        <div class='dedication-content' >
          <p>
            To my best bud, Horace. <br>
             What a long, strange trip it has been.     </p>
             
        </div>
    </section>`
  },
  {
    title: 'About the author',
    content: `
    <section id= '1-about-the-author' class='about-the-author'>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis purus non
     cursus luctus. Nulla faucibus feugiat eros, non accumsan turpis facilisis eu. Aenean
     posuere hendrerit elit, quis varius velit bibendum eget. In rutrum lorem eget massa
     consequat elementum. Duis bibendum tincidunt facilisis. Donec dictum quis arcu
     vel dapibus.</p>
</section>`
  },
  {
    title: 'Half title',
    content: `<section class= "half-title"><h2>The Title of Your Book</h2></section>`
  },
  {
    title: 'TOC',
    content: `<section class='toc'>
    <h1 class='toc-title'>Contents</h1>
    <div class='toc-content'>
      <ol class='front-matter'>
        <li class='toc-section'><a href="#1-dedication">Dedication</a></li>
        <li class='toc-chapter'><a href="#5-chapter">The Beginning of the Best Book</a></li>   
        <li class='toc-section'><a href="#1-about-the-author">About the author</a></li>   
  
      </ol>
      
      <ol class='body-matter'>
  
        <li data-chapter-number='1' class='toc-chapter'><a href="#1-chapter">Chapter</a></li>
        <li class='toc-part'><a href='#1-part'>Part example</a></li>
        <li class='toc-section'><a href='#1-notes'>Notes 1</a></li>
        <li data-chapter-number='2' class='toc-chapter'><a href="#2-chapter">Chapter</a></li>
      </ol>
      <ol class='rear-matter'>
        <li class='toc-part'><a href='#2-part'>Part example</a></li>
        <li class='toc-section'><a href="#1-text-insert">Text insert</a></li>
  
  
      </ol>
    </div>
  </section>`
  },
  {
    title: 'Full title',
    content: `<section class='full-title'><h1 class='title'>The Title of Your Book</h1> 
    <h2 class='subtitle'>The Subtitle of Your Book</h2>        
    <h3 class='author'>Firstname Lastname</h3>
    <p class='contributor'>Contributor</p>
    <div class="publisher"> 
      <div class="publisher-icon">
       <img alt="publisher logo" src='https://2.bp.blogspot.com/-lsco2URaec8/Ugn5YrC8WuI/AAAAAAAAAlw/jH9bKy-kWic/s1600/Car+Logo+huiik.jpg'>
        </div> 
    <div  class="publisher-name">Publishing House</div> 
  </div> 
  </section>`
  },
  {
    title: 'Copyright',
    content: `<section id="copyright">
    <p class="copyright-year">Copyright © {{year}} by {{authorName}}</p>
    <p class="right-reserved">
      All rights reserved. No part of this book may be reproduced in any manner
      whatsoever without written permission except in the case of brief quotations
      embodied in critical articles and reviews.
    </p>
    <p class="first-printing">First Printing, {{year}}</p>
  </section>`
  },
  {
    title: 'Part',
    content: `<section class='part'>
    <h1 id= '2-part' class='part-title'>
        Some Title for the part
    </h1>
    <div class='part-content'>
        <p>Nullam id consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna adipisc-ing posuere. Sed at orci sed turpis euismod convallis eu id augu
            Nullam id consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna adipisc-ing posuere. Sed at orci sed turpis euismod convallis eu id augu for some title there is so me thing i would like to know</p>
    </div>
  </section>`
  }
]


const sectionsBodyMatter = [
  {
    title: 'Chapter 1',
    content: ` <div class="chapter">
    <h1 id= '1-chapter' class="chapter-cap">1</h1>
    <h1 class="chapter-title">The Beginning of the Best Book</h1>
    <div class="chapter-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
        purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
        turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
        bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
        bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
        consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
        adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
        purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
        turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
        bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
        bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
        consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
        adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
        purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
        turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
        bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
        bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
        consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
        adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
        purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
        turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
        bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
        bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
        consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
        adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
        purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
        turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
        bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
        bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
        consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
        adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
        purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
        turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
        bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
        bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
        consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
        adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
        purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
        turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
        bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
        bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
        consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
        adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
        purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
        turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
        bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
        bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
        consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
        adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
        purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
        turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
        bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
        bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
        consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
        adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
      </p>
      
    </div>
  </div>`
},
{
  title: 'Chapter 2',
  content: `  <div class="chapter">
  <div class="chapter-cap">2</div>
  <h1 id='2-chapter' class="chapter-title">The Beginning of the Best Book</h1>
  <div class="chapter-content">
    
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
      purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
      turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
      bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
      bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
      consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
      adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
      purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
      turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
      bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
      bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
      consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
      adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
      purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
      turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
      bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
      bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
      purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
      turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
      bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
      bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
      consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
      adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
      purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
      turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
      bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
      bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
      consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
      adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
      purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
      turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
      bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
      bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
      consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
      adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
      purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
      turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
      bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
      bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
      consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
      adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
      purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
      turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
      bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
      bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
      consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
      adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
    </p>
    
  </div>
</div>`
  },
  {
    title: 'Part 2',
    content: `  <section class='part'>
    <h1 id= '1-part' class='part-title'>
        Some Title for the part
    </h1>
    <div class='part-content'>
        <p>Nullam id consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna adipisc-ing posuere. Sed at orci sed turpis euismod convallis eu id augu
            Nullam id consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna adipisc-ing posuere. Sed at orci sed turpis euismod convallis eu id augu for some title there is so me thing i would like to know</p>
    </div>
</section>`
  }
]


const sectionsRearMatter = [
  {
    title: 'Notes',
    content: ` <section class='notes'>
    <h1 id= '1-notes' class='notes-title'>Notes</h1>
    <div class= 'notes-content'>
    <h1>Chapter 1</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae neque vitae urna posuere consequat. Sed at mi velit. Maecenas at vestibulum libero, et iaculis ante. Nunc eleifend sapien sapien, at posuere dolor sagittis id. Ut laoreet elit ut suscipit tincidunt. Aenean ac leo in nulla commodo tempor. Praesent eget eros non nulla pharetra mollis sed vitae sem. Donec metus tortor, ultricies eu mauris nec, elementum venenatis risus. Vivamus eleifend lacinia laoreet. Donec tempor tellus neque. Aenean pellentesque velit augue, nec molestie dolor ornare vitae. Phasellus tincidunt accumsan nisl, nec viverra quam pellentesque ac. Nulla varius, elit cursus scelerisque venenatis, libero ligula pulvinar velit, id ultrices libero enim nec risus. Aliquam ornare quam libero, at convallis leo gravida eu. Nulla at ipsum malesuada, sollicitudin libero nec, ultricies ipsum. Cras ac velit velit.

        Proin sit amet tincidunt sapien. Nulla facilisi. Cras pharetra lectus ut nulla tempor accumsan. Fusce iaculis tempus gravida. Aliquam quis velit ac tortor euismod hendrerit sit amet in ex. In cursus, orci eu accumsan dictum, felis tortor ornare enim, eget tempor ipsum odio ac quam. Sed efficitur magna vel ex euismod lobortis. Nunc eu augue vel metus aliquam cursus ut hendrerit lectus.
        
        Duis ultricies purus quis velit faucibus feugiat eget a nisi. Morbi interdum risus ipsum, eu feugiat mauris pretium sit amet. Quisque porta sed magna interdum volutpat. Donec ullamcorper consequat augue et malesuada. Maecenas a orci tempor, imperdiet felis eu, pellentesque tortor. Pellentesque dignissim mi in urna elementum, sed viverra nisi varius. Nulla massa diam, cursus quis libero in, tincidunt pulvinar nibh.
        
        Nulla egestas massa nec volutpat feugiat. Sed in diam orci. Nullam tristique ex ut dolor facilisis, sed condimentum elit ultricies. Donec ac eros quam. In ullamcorper pretium neque, et egestas elit blandit sed. Curabitur volutpat laoreet ornare. Quisque in faucibus urna, ac imperdiet tellus. Phasellus purus ipsum, mattis sed mauris vitae, mollis faucibus lorem. Praesent ullamcorper aliquet lacinia. Phasellus euismod eu ante eleifend cursus. Vestibulum bibendum congue magna eu congue. Suspendisse placerat volutpat elementum. Praesent eget nibh nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus pharetra mi sit amet mi malesuada rhoncus.
        
        Integer maximus est vitae gravida rhoncus. Aliquam lobortis justo egestas iaculis posuere. Maecenas quis placerat risus. Morbi auctor, lectus a aliquam tincidunt, mauris est gravida turpis, nec euismod lorem purus et arcu. Sed gravida, est vitae viverra semper, augue mi convallis leo, et semper elit neque at ante. Sed tincidunt faucibus vestibulum. Nam pharetra aliquam dui eu dictum. Vivamus congue lectus eget dolor pretium vestibulum. Nam faucibus elit sit amet neque rhoncus, vel maximus lectus sagittis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae neque vitae urna posuere consequat. Sed at mi velit. Maecenas at vestibulum libero, et iaculis ante. Nunc eleifend sapien sapien, at posuere dolor sagittis id. Ut laoreet elit ut suscipit tincidunt. Aenean ac leo in nulla commodo tempor. Praesent eget eros non nulla pharetra mollis sed vitae sem. Donec metus tortor, ultricies eu mauris nec, elementum venenatis risus. Vivamus eleifend lacinia laoreet. Donec tempor tellus neque. Aenean pellentesque velit augue, nec molestie dolor ornare vitae. Phasellus tincidunt accumsan nisl, nec viverra quam pellentesque ac. Nulla varius, elit cursus scelerisque venenatis, libero ligula pulvinar velit, id ultrices libero enim nec risus. Aliquam ornare quam libero, at convallis leo gravida eu. Nulla at ipsum malesuada, sollicitudin libero nec, ultricies ipsum. Cras ac velit velit.

        Proin sit amet tincidunt sapien. Nulla facilisi. Cras pharetra lectus ut nulla tempor accumsan. Fusce iaculis tempus gravida. Aliquam quis velit ac tortor euismod hendrerit sit amet in ex. In cursus, orci eu accumsan dictum, felis tortor ornare enim, eget tempor ipsum odio ac quam. Sed efficitur magna vel ex euismod lobortis. Nunc eu augue vel metus aliquam cursus ut hendrerit lectus.
        
        Duis ultricies purus quis velit faucibus feugiat eget a nisi. Morbi interdum risus ipsum, eu feugiat mauris pretium sit amet. Quisque porta sed magna interdum volutpat. Donec ullamcorper consequat augue et malesuada. Maecenas a orci tempor, imperdiet felis eu, pellentesque tortor. Pellentesque dignissim mi in urna elementum, sed viverra nisi varius. Nulla massa diam, cursus quis libero in, tincidunt pulvinar nibh.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae neque vitae urna posuere consequat. Sed at mi velit. Maecenas at vestibulum libero, et iaculis ante. Nunc eleifend sapien sapien, at posuere dolor sagittis id. Ut laoreet elit ut suscipit tincidunt. Aenean ac leo in nulla commodo tempor. Praesent eget eros non nulla pharetra mollis sed vitae sem. Donec metus tortor, ultricies eu mauris nec, elementum venenatis risus. Vivamus eleifend lacinia laoreet. Donec tempor tellus neque. Aenean pellentesque velit augue, nec molestie dolor ornare vitae. Phasellus tincidunt accumsan nisl, nec viverra quam pellentesque ac. Nulla varius, elit cursus scelerisque venenatis, libero ligula pulvinar velit, id ultrices libero enim nec risus. Aliquam ornare quam libero, at convallis leo gravida eu. Nulla at ipsum malesuada, sollicitudin libero nec, ultricies ipsum. Cras ac velit velit.

        Proin sit amet tincidunt sapien. Nulla facilisi. Cras pharetra lectus ut nulla tempor accumsan. Fusce iaculis tempus gravida. Aliquam quis velit ac tortor euismod hendrerit sit amet in ex. In cursus, orci eu accumsan dictum, felis tortor ornare enim, eget tempor ipsum odio ac quam. Sed efficitur magna vel ex euismod lobortis. Nunc eu augue vel metus aliquam cursus ut hendrerit lectus.
        
        Duis ultricies purus quis velit faucibus feugiat eget a nisi. Morbi interdum risus ipsum, eu feugiat mauris pretium sit amet. Quisque porta sed magna interdum volutpat. Donec ullamcorper consequat augue et malesuada. Maecenas a orci tempor, imperdiet felis eu, pellentesque tortor. Pellentesque dignissim mi in urna elementum, sed viverra nisi varius. Nulla massa diam, cursus quis libero in, tincidunt pulvinar nibh.
        </p>
	<ol>
		<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis purus non cursus luctus.</li>
		<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis purus non cursus luctus.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis purus non cursus luctus.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis purus non cursus luctus.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis purus non cursus luctus..</li>
	</ol>
    <h1>Web Sites</h1>
    <h2>Useful</h2>
    <p>Nullam id consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna adipisc-
        ing posuere. Sed at orci sed turpis euismod convallis eu id augu
        Nullam id consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna adipisc-
        ing posuere. Sed at orci sed turpis euismod convallis eu id augu</p>
    </div>
</section>`
    },
    {
        title: 'part',
        content: `<section class='part'>
        <div class='part-title'>
            Some Title for the part
        </div>
        <div class='part-content'>
            <p>Nullam id consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna adipisc-ing posuere. Sed at orci sed turpis euismod convallis eu id augu
                Nullam id consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna adipisc-ing posuere. Sed at orci sed turpis euismod convallis eu id augu for some title there is so me thing i would like to know</p>
        </div>
      </section>`
    },
    {
        title: 'Text insert',
        content: `<section class='text-insert'>
        <h1 id='1-text-insert' class="text-insert-title">Text insert</h1>
        <div class="text-insert-content">
            <h1>Title with h1</h1>
            <h2>Title with h2- kind of subtitle?</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis
                purus non cursus luctus. Nulla faucibus feugiat eros, non accum- san
                turpis facilisis eu. Aenean posuere hendrerit elit, quis varius velit
                bibendum eget. In rutrum lorem eget massa consequat elementum. Duis
                bibendum tincidunt facilisis. Donec dictum quis arcu vel dapibus. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Duis luctus lacus vitae nisl ornare aliquet. Nullam id
                consectetur metus. Nulla gravida porttitor turpis, vel pharetra urna
                adipiscing posuere. Sed at orci sed turpis euismod convallis eu id augue.
              </p>
              <ol>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis purus non cursus luctus.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis purus non cursus luctus.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis purus non cursus luctus.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis purus non cursus luctus.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis purus non cursus luctus..</li>
            </ol>
        </div>
      </section> `
    },
    {
        title: 'About the author',
        filename:'about-the-author',
        content: `<section class='about-the-author'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis purus non
           cursus luctus. Nulla faucibus feugiat eros, non accumsan turpis facilisis eu. Aenean
           posuere hendrerit elit, quis varius velit bibendum eget. In rutrum lorem eget massa
           consequat elementum. Duis bibendum tincidunt facilisis. Donec dictum quis arcu
           vel dapibus.</p>
      </section>`
    },
    {
        title: 'Copyright',
        beforeToc: true,
        content: `<section id="copyright">
        <p class="copyright-year">Copyright © {{year}} by {{authorName}}</p>
        <p class="right-reserved">
          All rights reserved. No part of this book may be reproduced in any manner
          whatsoever without written permission except in the case of brief quotations
          embodied in critical articles and reviews.
        </p>
        <p class="first-printing">First Printing, {{year}}</p>
      </section>`
    }
]


const fullFrontMatterSections = sectionsFrontMatter.map(section => ({...section, content: `<section class='front-matter'>`+section.content+`</section>`}))
const fullBodyMatterSections = sectionsBodyMatter.map(section => ({...section, content: `<section class='body-matter'>`+section.content+`</section>`}))
const fullBackMatterSections = sectionsRearMatter.map(section => ({...section, content: `<section class='rear-matter'>`+section.content+`</section>`}))


const epub = new EPub(
  { title: 'asdasd',
    css: bookCss.join('\n'),
    numberChaptersInTOC: false,
    chapterXHTML: `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="<%= lang %>" lang="<%= lang %>">
    <head>
      <meta charset="UTF-8" />
      <title></title>
      <link rel="stylesheet" type="text/css" href="style.css" />
    </head>
    <body>
      <% if (prependChapterTitles) { %>
        <% if (author.length) { %>
          <p class="epub-author"><%= author.join(', ') %></p>
        <% } %>
        <% if (url) { %>
          <p class="epub-link"><a href="<%= url %>"><%= url %></a></p>
        <% } %>
      <% } %>
      <%- content %>
    </body>
    </html>`
  ,tocXHTML: `<?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="en" lang="en">
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    
      
      
    
    <section class="front-matter"><section class="toc">
  <h1 class="toc-title">Contents</h1>
  <div class="toc-content">
    <ol class="front-matter">
      <li class="toc-section"><a href="#1-dedication">Dedication</a></li>
      <li class="toc-chapter"><a href="#5-chapter">The Beginning of the Best Book</a></li>   
      <li class="toc-section"><a href="#1-about-the-author">About the author</a></li>   

    </ol>
    
    <ol class="body-matter">

      <li class="toc-chapter"><a href="#1-chapter">Chapter</a></li>
      <li class="toc-part"><a href="#1-part">Part example</a></li>
      <li class="toc-section"><a href="#1-notes">Notes 1</a></li>
      <li class="toc-chapter"><a href="#2-chapter">Chapter</a></li>
    </ol>
    <ol class="rear-matter">
      <li class="toc-part"><a href="#2-part">Part example</a></li>
      <li class="toc-section"><a href="#1-text-insert">Text insert</a></li>


    </ol>
  </div>
</section></section>
  </body>
  </html>`,
  contentOPF: `<?xml version="1.0" encoding="UTF-8"?>
  <package xmlns="http://www.idpf.org/2007/opf"
           version="3.0"
           unique-identifier="BookId"
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:dcterms="http://purl.org/dc/terms/"
           xml:lang="en"
           xmlns:media="http://www.idpf.org/epub/vocab/overlays/#"
           prefix="ibooks: http://vocabulary.itunes.apple.com/rdf/ibooks/vocabulary-extensions-1.0/">
  
      <metadata xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:opf="http://www.idpf.org/2007/opf">
  
          <dc:identifier id="BookId"><%= id %></dc:identifier>
          <meta refines="#BookId" property="identifier-type" scheme="onix:codelist5">22</meta>
          <meta property="dcterms:identifier" id="meta-identifier">BookId</meta>
          <dc:title><%= title %></dc:title>
          <meta property="dcterms:title" id="meta-title"><%= title %></meta>
          <dc:language><%= lang %></dc:language>
          <meta property="dcterms:language" id="meta-language"><%= lang %></meta>
          <meta property="dcterms:modified"><%= (new Date()).toISOString().split(".")[0]+ "Z" %></meta>
          <dc:creator id="creator"><%= author.join(",") %></dc:creator>
          <meta refines="#creator" property="file-as"><%= author.join(",") %></meta>
          <meta property="dcterms:publisher"><%= publisher %></meta>
          <dc:publisher><%= publisher %></dc:publisher>
          <meta property="dcterms:date"><%= date %></meta>
          <dc:date><%= date %></dc:date>
          <meta property="dcterms:rights">All rights reserved</meta>
          <dc:rights>Copyright &#x00A9; <%= (new Date()).getFullYear() %> by <%= publisher %></dc:rights>
          <% if(cover) { %>
          <meta name="cover" content="image_cover"/>
          <% } %>
          <meta name="generator" content="epub-gen" />
          <meta property="ibooks:specified-fonts">true</meta>
  
      </metadata>
  
      <manifest>
          <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml" />
          <item id="toc" href="3_TOC.xhtml" media-type="application/xhtml+xml" properties="nav" />
          <item id="css" href="style.css" media-type="text/css" />
  
          <% if(cover) { %>
          <item id="image_cover" href="cover.<%= cover.extension %>" media-type="<%= cover.mediaType %>" />
          <% } %>
          
          <% images.forEach(function(image, index){ %>
          <item id="image_<%= index %>" href="images/<%= image.id %>.<%= image.extension %>" media-type="<%= image.mediaType %>" />
          <% }) %>
          
          <% content.forEach(function(content, index){ %>
          <item id="content_<%= index %>_<%= content.id %>" href="<%= content.filename %>" media-type="application/xhtml+xml" />
          <% }) %>
  
          <% fonts.forEach(function(font, index){%>
          <item id="font_<%= index%>" href="fonts/<%= font.filename %>" media-type="<%= font.mediaType %>" />
          <%})%>
      </manifest>
  
      <spine toc="ncx">
          <% content.forEach(function(content, index){ %>
              <% if(content.beforeToc){ %>
                  <itemref idref="content_<%= index %>_<%= content.id %>"/>
              <% } %>
          <% }) %>
          <itemref idref="toc" />
          <% content.forEach(function(content, index){ %>
              <% if(!content.beforeToc){ %>
                  <itemref idref="content_<%= index %>_<%= content.id %>"/>
              <% } %>
          <% }) %>
      </spine>
      <guide>
          <reference type="text" title="Table of Content" href="3_TOC.xhtml"/>
      </guide>
  </package>`
 }, 
  fullFrontMatterSections.concat(fullBodyMatterSections).concat(fullBackMatterSections))
epub.genEpub().then((pdfGenerator: any) => {
const readableStream = Readable.from(pdfGenerator)

const writableStream = fs.createWriteStream('demo.epub');

readableStream.on('data', (chunk) => {
  writableStream.write(chunk);
});

readableStream.on('end', () => {
  writableStream.end();
});



})