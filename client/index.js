import React from 'react';
import ReactDOM from 'react-dom';
import { PrismCode } from "react-prism";

import { UnveilApp, Slide, Notes, KeyControls, UIControls, TouchControls, Presenter } from '../../unveil.js/src';
import { NavigationReceiver, NavigationSender } from '../../unveil-network-sync/src';
import {
  SpeakerPresenter,
  Redirect, Link,
  Voting, Question, Answer,
  ReactionReceiver, ReactionSender,
  VotingController, VotingReceiver, VotingCreator, VotingNavigatableSetter,
  MediaSender, LinkSender,  QuestionSender, MediaReceiver, MediaAcceptor
} from '../../unveil-interactive/src';

import createSocket from '../../unveil-network-sync/src/helpers/createSocket'
createSocket('http://192.168.1.200:9000')

let modes = {
  default: {
    controls : [
      KeyControls, TouchControls, UIControls,
      NavigationReceiver,
      ReactionSender,
      MediaSender, LinkSender, QuestionSender, MediaReceiver,
      VotingNavigatableSetter, VotingReceiver
    ],
    presenter: Presenter
  },
  speaker: {
    controls : [
      KeyControls, TouchControls,
      MediaAcceptor, MediaReceiver,
      ReactionReceiver,
      NavigationSender, NavigationReceiver,
      VotingController, VotingCreator, VotingReceiver
    ],
    presenter: SpeakerPresenter
  },
  projector: {
    controls : [
      NavigationReceiver,
      MediaReceiver,
      VotingNavigatableSetter, VotingReceiver
    ],
    presenter: Presenter
  }
};

ReactDOM.render( (
  <UnveilApp modes={modes}>
    <Slide name="intro-start">
      <h1><em>Presentation</em> <em>Tools</em></h1>
      <Notes>
        Attention span drops off 18min, apologise<br/>
        Gonna be about pres tools; stressful because expectations high<br/>
        Everybody can relate to, own expert advice & experience<br/>
        So as a first step, research what science tell us; compelling presentations<br/><br/><br/>
        Research has shown that listener's attention span drops off after approx. 18min,
        so I already want to apologise for the last 10 boring ones.<br/>
        As you've probably read by now, this talk here, is going to be about presentation tools.<br/>
        And, honestly, giving presentations about presentations turns out to be fairly stressful,
        as the expectations are always really high.<br/>
        It is something everyone can relate to and everybody has their own expert advice and experience on.<br/>
        So as a first step in the preparation for this talk, I wanted to summarise what science tells us about
        the art of giving compelling presentations.
      </Notes>
    </Slide>
    <Slide name="intro-ingredients">
      <span className="fa-stack fa-5x left-icon">
        <i className="fa fa-eye fa-stack-1x"></i>
        <i className="fa fa-circle-thin fa-stack-2x"></i>
      </span>

      <span className="fa-stack fa-5x center-icon">
        <i className="fa fa-book fa-stack-1x"></i>
        <i className="fa fa-circle-thin fa-stack-2x"></i>
      </span>

      <span className="fa-stack fa-5x right-icon">
        <i className="fa fa-comments fa-stack-1x"></i>
        <i className="fa fa-circle-thin fa-stack-2x"></i>
      </span>
      <Notes>
        Susannah Shattuck at Prezi identifies three key ingredients to giving a good presentation: Visuals, Storytelling and Interaction.
      </Notes>
    </Slide>
    <Slide name="intro-ingredients-visuals">
      <span className="fa-stack big-icon">
        <i className="fa fa-eye fa-stack-1x"></i>
        <i className="fa fa-circle-thin fa-stack-2x"></i>
      </span>
      <h1>Visuals</h1>
      <Notes>
        Estimated 80-90% perception through eyes.<br/>
        Study conducted 3M, images processed 60k times faster than text<br/>
        Reading + listening almost impossible; reason not a lot of text here<br/><br/><br/><br/>
        It is estimated that between 80-90% of what we humans perceive, comes in through our eyes. We are visual beings.<br/>
        A study conducted by 3M found that images and graphics can be processed by the brain as much as 60k times faster than text.<br/>
        Moreover, reading while listening is known to be almost impossible, which is the reason why this presentation will not include a lot of text.<br/>
      </Notes>
    </Slide>
    <Slide name="intro-ingredients-storytelling">
      <span className="fa-stack big-icon">
        <i className="fa fa-book fa-stack-1x"></i>
        <i className="fa fa-circle-thin fa-stack-2x"></i>
      </span>
      <h1>Story Telling</h1>
      <Notes>
        Next and probably best-known ingredient: storytelling.<br/>
        Anthropologist and evolutionary scientist Robin Dunbar, 65% of speaking time dedicated to telling stories.<br/>
        He argues, gossiping + storytelling replaced grooming as sign of social affiliation<br/>
        when ancestors started living in bigger social groups.<br/><br/><br/><br/><br/><br/>

        The next and probably best-known ingredient is storytelling.<br/>
        The anthropologist and evolutionary scientist Robin Dunbar has found that as much as
        65% of our speaking time in public places is dedicated to telling stories.<br/>
        He argues that gossiping and general storytelling replaced grooming as a sign of
        social affiliation as our ancestors started living in bigger social groups.<br/>
      </Notes>
    </Slide>
    <Slide name="intro-ingredients-storytelling-von-heiseler">
      <blockquote>[...] both language and brain are adapted to story telling.</blockquote>
      <span className="author">– Till Nikolaus von Heiseler, 2014</span>
      <cite>Language evoloved for storytelling in a super-fast evolution. In: R. L. C. Cartmill, Eds. Evolution of Language. London: World Scientific, pp. 114-121.</cite>
      <Notes>
        Von Heiseler even goes as far as saying<br/>
        "Language is neither adapted simply to the brain, nor the brain directly to language; instead, both language and brain are
        adapted to storytelling"<br/>
        -> Language evolved through storytelling
        -> explains evolutionary importance + why such an important element in keeping the audience's attention.
        <br/><br/><br/><br/>

        Von Heiseler even goes as far as saying<br/>
        Language is neither adapted simply to the brain, nor the brain directly to language; instead, both language and brain are
        adapted to storytelling<br/>
        Which explains its evolutionary importance and why it is such an important element in keeping the audience's attention.
      </Notes>
    </Slide>
    <Slide name="intro-ingredients-interaction">
      <span className="fa-stack big-icon">
        <i className="fa fa-comments fa-stack-1x"></i>
        <i className="fa fa-circle-thin fa-stack-2x"></i>
      </span>
      <h1>Interaction</h1>
      <Notes>
        Shattuck --> <emph>Interaction</emph><br/>
        Internet Advertising Bureau: twice as many consumers, interactive ads more memorable<br/>
        Same: microsoft research, introducing instant feedback mechanism<br/>
        Majority felt more engaged with presentation.<br/>
        Help winning audience's attention back + keep interested.
        <br/><br/><br/><br/>
        The last point outlined by Shattuck is <emph>interaction</emph>.<br/>
        According to the Internet Advertising Bureau twice as many consumers for example found interactive adverts memorable than static ones.<br/>
        The same was reported by microsoft research when introducing an instant feedback mechanism to presentations:
        The vast majority of listeners felt more engaged with the presentation.<br/>
        This can help winning the audience's attention back and keeping them interested.
      </Notes>
    </Slide>
    <Slide name="intro-ingredients2">
      <span className="fa-stack fa-5x left-icon">
        <i className="fa fa-eye fa-stack-1x"></i>
        <i className="fa fa-circle-thin fa-stack-2x"></i>
      </span>

      <span className="fa-stack fa-5x center-icon">
        <i className="fa fa-book fa-stack-1x"></i>
        <i className="fa fa-circle-thin fa-stack-2x"></i>
      </span>

      <span className="fa-stack fa-5x right-icon">
        <i className="fa fa-comments fa-stack-1x"></i>
        <i className="fa fa-circle-thin fa-stack-2x"></i>
      </span>
      <Notes>
        Developed one myself, concentrated on last pillar.<br/>
        Also introduce tools aiming to help with other two<br/>
        Stephens and others neuroscientifical studies speaker-listener: tight neural coupling<br/>
        I inspire you if I'm enthusiastic; only perform well if with me.
        <br/><br/><br/><br/>

        Having developed an interactive presentation tool myself, this last pillar is the one I have concentrated on most so far,
        but today I want to introduce you to tools that aim to also help with the other two.<br/>
        Stephens et al.'s neuroscientifical studies on speaker-listener interaction have shown a tight neural coupling between
        audience and presenter.<br/>
        This means I can only inspire you if I am myself enthusiastic about my research. However, it also means that I can only
        perform well at this task if you are with me.<br/>
      </Notes>
    </Slide>
    <Slide name="intro-ip">
      <h1>http://<strong>192.168.1.239:9000</strong></h1>
      <Notes>
        Lend me ear for next 15min, navigate laptops + phones to...
        Scan QR Code.<br/>
        Related articles/questions --> feel free to share.
        <br/><br/><br/><br/>

        So please, lend me your ear for the next 20min and I would like to invite you to navigate your laptops' or phones'
        browsers to "..." or scan the QR code to follow the presentation and fully participate in the interactive parts of this talk.<br/>
        If you have related articles or questions, please feel free to use the "sharing" functionality of this tool.
      </Notes>
    </Slide>
    <Slide name="presentation-tools">
      <h1 className="comic">Presentation Tools</h1>
      <Notes>
        So... let's start talking about presentation tools.<br/>
        Which tool first comes to mind?? --> POWERPOINT<br/>
        <br/><br/><br/><br/>
        So... let's start talking about presentation tools.<br/>
        Which is the first one that comes to mind when talking about presentation tools?<br/>
        Exactly. PowerPoint.
      </Notes>
    </Slide>
    <Slide name="powerpoint">
      <img src="./img/PowerPoint.jpg" />
      <Notes>
        Before talking about ppt; back in time, brief history<br/>
        how ppt came into being<br/>
        <br/><br/><br/><br/>
        But before talking about PowerPoint, I would like to go back in time and talk about the history of presentation tools
        and about how power point came into being for a bit.
      </Notes>
    </Slide>
    <Slide name="mad-men">
      <Notes>
        Long before ppt, beginning 20th century, marketing departments, visual aids, pitches.<br/>
        Yates and Orlikowski: Graphs + Charts, be prepared + printed by design department<br/>
        Companies had dedicated chart viewing rooms.<br/>
        <br/><br/><br/><br/>

        Long before powerpoint, already in the beginning of the 20th century, marketing departments started to discover the power
        of visual aids in pitches.<br/>
        According to Yates and Orlikowski, these early slides usually included graphs and charts, but had the disadvantage
        of having to be prepared and printed by the design department in advance.<br/>
        This became so important, some companies even had a dedicated chart viewing room.
      </Notes>
    </Slide>
    <Slide name="projector">
      <Notes>
        Second half 20th century; overhead projectors into business presntations.<br/>
        1975-1985: 50k to 120k sold per year<br/>
        Effects: drawing/annotating on transparencies; hiding with paper; adding overlays<br/>
        <br/><br/><br/><br/>

        By the second half of the 20th century, overhead projectors had found their way into business presentations.<br/>
        In the decade between 1975 and 1985 the number of sold overhead projectors went from only 50k to over 120k per year.<br/>
        Effects could be added by either drawing on the transparencies, hiding parts with a paper or adding overlays.
      </Notes>
    </Slide>
    <Slide name="thirtyfivemm">
      <img src="./img/35mm.gif" />
      <Notes>
        More polished: 35mm films. Prepared in advance, like transparencies printed in house --> godspeed.<br/>
        These are reason for metaphor of "slides".<br/>
        <br/><br/><br/><br/>

        For more polished presentations, 35mm films were used. These, however, also had to be prepared in advance,
        but could usually be printed in-house, which sped up the process a lot.<br/>
        What you can see up there btw, is also the reason why many presentation tools use the metaphor of "slides".<br/>
      </Notes>
    </Slide>
    <Slide name="bad-powerpoint">
      <Notes>
        1987: Emergence PCs, PPT launched into market.<br/>
        Beginning: tool, black/white graphics printed on transparencies<br/>
        MS acquired software; growing availibility of laptops, THE presnetation tool.<br/>
        95% market share in 2001.<br/>
        <br/><br/><br/><br/>

        In 1987, with the emergence of personal computers, the first version of PowerPoint was launched into the market.<br/>
        In the beginning it was used as a tool for creating black and white graphics which were then printed onto transparencies.<br/>
        When MS acquired the software and through the growing availibility of laptops, PowerPoint evolved into THE presentation
        tool with a market share of 95% by 2001.<br/>
      </Notes>
    </Slide>
    <Slide name="death-by-powerpoint">
      <h1>Death by</h1>
      <h1>PowerPoint</h1>
      <Notes>
        Not everybody big fan.<br/>
        Autors argue: typical bullet point layout not good for giving presentations<br/>
        Fancy effects, text-heavy slides distract instead of supporting<br/>
        <br/><br/><br/><br/>
        However, not everybody is a big fan of PowerPoint and Keynote and the likes.<br/>
        Many authors argue that power point's typical bullet point layout is not a good format for presentations
        and that fancy effects and text-heavy slides distract from the presenter instead of supporting their talk.
      </Notes>
    </Slide>
    <Slide name="canvas-vs-slide">
      <h1><em>Slide-based</em> vs. <em>Canvas-based</em></h1>
      <Notes>
        Another reason oppose: linear structure not supporting narrative flow.<br/>
        Biggest competetor to slide-based: canvas-based tools risen in popularity over recent years<br/>
        <br/><br/><br/><br/>
        Another reason why people oppose power point like presentations is that their linear slide structure
        does not support narrative flow.<br/>
        For this reason alternative forms of presentations, so called canvas-based tools have risen in popularity
        over the recent years.
      </Notes>
    </Slide>
    <Slide name="prezi">
      <Notes>
        Most prominent: Prezi, seen in action today already.<br/>
        Infinite canvas to move across.<br/>
        Sliding, rotating + zooming most popular to move between content<br/>
        Lichtschlag and others: zooming metaphor to dive into sub-topics, zooming out again to give overview.<br/>
        Easier to zoom in/out, jump between topics: narrative flow ++<br/>
        <br/><br/><br/><br/>
        The most prominent canvas-based presentation tool being prezi.<br/>
        With prezi, the presentation's author has an infinite canvas to move accross.<br/>
        On this canvas, sliding, rotating and zooming are the most important motions to move between content.<br/>
        A study by Lichtschlag and others examining the most popular prezi presentations, found that most authors
        tend to use the zooming in metaphor to dive into sub-topics, as well as zooming out again to give an overview.<br/>
        As it is easy to zoom out and jump between topics, this approach supposedly supports narrative flow better than
        linear slides.
      </Notes>
    </Slide>
    <Slide name="narrative-flow">
      <h1 className="comic">Narrative Flow</h1>
      <Notes>
        Introduce more exotic approaches. Challenges like remote presentation, not going into details, just picked a few interesting projects<br/>
        Slide-based system make it easier to maintain narrative flow.<br/>
        Dieberger and others: easier to navigate. Browsing mechanism.<br/>
        Overlaying other slides, never leaving current slide --> easier to return + jump<br/>
        <br/><br/><br/><br/>
        Dieberger and others also tried to make it easier to maintain said narrative flow, by offering a system that makes it
        easier for the presenter to navigate between slides.<br/>
        Their work concentrates on a mechanism to browse through all slides by overlaying it,
        allowing them to never leave the current slide, thus making it easier to return to it and jump without
        interrupting the flow of the presentation.
      </Notes>
    </Slide>
    <Slide name="mind-map">
      <img src="./img/mind-map.png" />
      <cite>David Holman, Predrag Stojadinović, Thorsten Karrer, and Jan Borchers. 2006. Fly: an organic presentation tool. In CHI '06 Extended Abstracts on Human Factors in Computing Systems (CHI EA '06). ACM, New York, NY, USA, 863-868.</cite>
      <Notes>
        Holman and others try similar concept: canvas-based presentation tool<br/>
        authors build mind-maps that can then be navigated around
        <br/><br/><br/><br/>
        Holman and others try to use a similar concept by developing a canvas-based
        presentation tool in which authors build mind-maps that can then be navigated around.<br/>
      </Notes>
    </Slide>
    <Slide name="sketching-presentations">
      <img src="./img/sketching1.png" />
      <cite>Yang Li, James A. Landay, Zhiwei Guan, Xiangshi Ren, and Guozhong Dai. 2003. Sketching informal presentations. In Proceedings of the 5th international conference on Multimodal interfaces (ICMI '03). ACM, New York, NY, USA, 234-241.</cite>
      <Notes>
        Entirely different approach: slide-based, Li and others.<br/>
        Automatically create informal presentations out of notes taken by author<br/>
        Studied way presenters prepare --> found certain patterns + visual metaphors like<br/>
        arrows, bullet points + structuring content
        <br/><br/><br/><br/>
        An entirely different approach, also using slide-based presentations, is chosen by Li and others.<br/>
        In their work they develop a way of automatically creating informal presentations out of notes taken
        by the authors.<br/>
        They studied the way presenters prepare their presentations and found certain patterns and visual metaphors like
        arrows and bullet points, structuring content.<br/>
      </Notes>
    </Slide>
    <Slide name="sketching-presentations2">
      <img src="./img/sketching2.png" />
      <cite>Yang Li, James A. Landay, Zhiwei Guan, Xiangshi Ren, and Guozhong Dai. 2003. Sketching informal presentations. In Proceedings of the 5th international conference on Multimodal interfaces (ICMI '03). ACM, New York, NY, USA, 234-241.</cite>
      <Notes>
        Managed to develop an algorithm, converts notes from tablet to simple presnetation.<br/>
        TAKE NOTE BOOK AND SHOW NOTES<br/>
        <br/><br/><br/><br/>
        With this information, they managed to develop an algorithm which converts notes taken on a tablet into a simple presentation.<br/>
        *TAKE NOTE BOOK AND SHOW NOTES*
      </Notes>
    </Slide>
    <Slide name="gaze-awareness">
      <img src="./img/gaze-awareness.png" />
      <cite>Kar-Han Tan, Dan Gelb, Ramin Samadani, Ian Robinson, Bruce Culbertson, and John Apostolopoulos. 2010. Gaze awareness and interaction support in presentations. In Proceedings of the 18th ACM international conference on Multimedia (MM '10). ACM, New York, NY, USA, 643-646.</cite>
      <Notes>
        Tan and others: different approach<br/>
        Improve interactivity: possible to interact with current slide directly<br/>
        Projecting speaker behind slide, follow gaze + body language
        <br/><br/><br/><br/>
        A very different approach was chosen by Tan and others.<br/>
        They try to concentrate on improving the interactivity of presentations by making it possible for the
        speaker to interact with the current slide while presenting.<br/>
        By projecting the speaker behind the slide, the audience can also follow the presenter's gaze and body language.
      </Notes>
    </Slide>
    <Slide name="paper-based">
      <img src="./img/palette.jpg" />
      <cite>Les Nelson, Satoshi Ichimura, Elin Rønby Pedersen, and Lia Adams. 1999. Palette: a paper interface for giving presentations. In Proceedings of the SIGCHI conference on Human Factors in Computing Systems (CHI '99). ACM, New York, NY, USA, 354-361.</cite>
      <Notes>
        Nelson and others: Palette.<br/>
        Convert PPT and print out on paper with barcode; barcode reader<br/>
        go through them in hand, collect them etc.
      </Notes>
    </Slide>
    <Slide name="paper-based2">
      <img src="./img/paperpoint.jpg" />
      <cite>Beat Signer and Moira C. Norrie. 2007. PaperPoint: a paper-based presentation and interactive paper prototyping tool. In Proceedings of the 1st international conference on Tangible and embedded interaction (TEI '07). ACM, New York, NY, USA, 57-64.</cite>
      <Notes>
        Similar approach employed by Signer and Norrie.<br/>
        Like in interaction lab: Digital pen and printed out slide-cards.<br/>
        Tab on paper with pen to show slide. Slides can easily be annotated!
      </Notes>
    </Slide>
    <Slide name="joe-sabia">
      <iframe width="854" height="480" src="https://www.youtube.com/embed/pkZtRzc9rFQ" frameborder="0" allowfullscreen></iframe>
      <Notes>
        To end this presentation, I'd like to show you this ted talk by Joe Sabia<br/>
        using an alternative approach towards using technology in presentations.
      </Notes>
    </Slide>
    <Slide name="joe-sabia2">
      <iframe width="854" height="480" src="https://www.youtube.com/embed/pkZtRzc9rFQ?autoplay=1" frameborder="0" allowfullscreen></iframe>
    </Slide>
  </UnveilApp>
), document.getElementById('unveil'));
