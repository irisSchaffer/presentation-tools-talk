import React from 'react';
import ReactDOM from 'react-dom';
import { PrismCode } from "react-prism";

import { UnveilApp, Slide, Notes, KeyControls, UIControls, TouchControls, Presenter } from '../../unveil.js/src';
import { NavigationReceiver, NavigationSender } from '../../unveil-network-sync/src';
import {
  SpeakerPresenter,
  Redirect, Link,
  Voting, Question, Answer,
  VotingController, VotingReceiver, VotingCreator, VotingNavigatableSetter,
  MediaSender, MediaReceiver, MediaAcceptor
} from '../../unveil-interactive/src';

import createSocket from '../../unveil-network-sync/src/helpers/createSocket'
createSocket('http://192.168.1.200:9000')

let modes = {
  default: {
    controls : [
      KeyControls, TouchControls, UIControls,
      NavigationReceiver,
      MediaSender, MediaReceiver,
      VotingNavigatableSetter, VotingReceiver
    ],
    presenter: Presenter
  },
  speaker: {
    controls : [
      KeyControls, TouchControls,
      MediaAcceptor, MediaReceiver,
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
      <h1>Presentation Tools</h1>
      <h2>The good, the bad and the ugly</h2>
      <Notes>
        Research has shown that listener's attention span drops off after approx. 18min, so I already want to apologise for the last 10 boring ones.<br />
        As you've probably read by now, this talk here, is going to be about presentation tools.<br />
        And, honestly, giving presentations about presentations turns out to be fairly stressful, as the expectations are always really high.<br />
        It is something everyone can relate to and everybody has their own expert advice and experience on.<br />
        So as a first step in the preparation for this talk, I wanted to summarise what science tells us about the art of giving compelling presentations.
      </Notes>
    </Slide>
    <Slide name="intro-ingredients">
      <Notes>Susannah Shattuck at Prezi identifies three key ingredients to giving a good presentation: Visuals, Storytelling and Interaction.</Notes>
    </Slide>
    <Slide name="intro-ingredients-visuals">
      <Notes>
        It is estimated that between 80-90% of what we humans perceive, comes in through our eyes. We are visual beings.<br />
        A study conducted by 3M found that images and graphics can be processed by the brain as much as 60k times faster than text.<br />
        Moreover, reading while listening is known to be almost impossible, which is the reason why this presentation will not include a lot of text.<br />
      </Notes>
    </Slide>
    <Slide name="intro-ingredients-storytelling">
      <Notes>
        The next and probably best-known ingredient is storytelling.<br />
        The anthropologist and evolutionary scientist Robin Dunbar has found that as much as 65% of our speaking time in public places is dedicated to telling stories.<br />
        He argues that gossiping and general storytelling replaced grooming as a sign of social affiliation as our ancestors started living in bigger social groups.<br />
      </Notes>
    </Slide>
    <Slide name="intro-ingredients-storytelling-von-heiseler">
      <blockquote>
        [...] both language and brain are adapted to story telling.<br />
        <span className="author">– Till Nikolaus von Heiseler, 2014</span>
      </blockquote>
      <cite>Language evoloved for storytelling in a super-fast evolution. In: R. L. C. Cartmill, Eds. Evolution of Language. London: World Scientific, pp. 114-121.</cite>
      <Notes>
        Von Heiseler even goes as far as saying<br />
        Language is neither adapted simply to the brain, nor the brain directly to language; instead, both language and brain are
        adapted to storytelling<br />
        Which explains its evolutionary importance and why it is such an important element in keeping the audience's attention.
      </Notes>
    </Slide>
    <Slide name="intro-ingredients-interaction">
      <Notes>
        The last point outlined by Shattuck is <emph>interaction</emph>.<br />
        According to the Internet Advertising Bureau twice as many consumers for example found interactive adverts memorable than static ones.<br />
        The same was reported by microsoft research when introducting an instant feedback mechanism to presentations:
        The vast majority of listeners felt more engaged with the presentation.<br />
        This can help winning the audience's attention back and keeping them interested.
      </Notes>
    </Slide>
    <Slide name="intro-ingredients2">
      <Notes>
        Having developed an interactive presentation tool myself, this last pillar is the one I have concentrated on most so far,
        but today I want to introduce you to tools that aim to also help with the other two.<br />
        Stephens et al.'s neuroscientifical studies on speaker-listener interaction have shown a tight neural coupling between
        audience and presenter.<br />
        This means I can only inspire you if I am myself enthusiastic about my research. However, it also means that I can only
        perform well at this task if you are with me.<br />
      </Notes>
    </Slide>
    <Slide name="intro-ip">
      <Notes>
        So please, lend me your ear for the next 20min and I would like to invite you to navigate your laptops' or phones'
        browsers to "..." or scan the QR code to follow the presentation and fully participate in the interactive parts of this talk.<br />
        If you have related articles or questions, please feel free to use the "sharing" functionality of this tool.
      </Notes>
    </Slide>
    <Slide name="presentation-tools">
      <Notes>
        So... let's start talking about presentation tools.<br />
        Which is the first one that comes to mind when talking about presentation tools?<br />
        Exactly. PowerPoint.
      </Notes>
    </Slide>
    <Slide name="powerpoint">
      <h1>PowerPoint</h1>
      <Notes>
        But before talking about Power Point, I would like to go back in time and talk about the history of presentation tools
        and about how power point came into being.
      </Notes>
    </Slide>
  </UnveilApp>
), document.getElementById('unveil'));
