import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withInfo, setDefaults } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import Avatar from '../components/Avatar/Avatar';
import List from '../components/List/List';
import ListItem from '../components/ListItem/ListItem';
import Header from '../components/Header/Header';
import Bubble from '../components/Bubble/Bubble';
import MessageInput from '../components/MessageInput/MessageInput';

import IconButton from '../components/IconButton/IconButton';

// default behavior for component info
setDefaults({
  inline: true,
});

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .add('default', withInfo(`
        Default avatar
    `)(() =>
    [
      <Avatar size="s" />,
      <Avatar size="m" />,
      <Avatar size="l" />,
    ]))
  .add('with count', withInfo(`
        Avatar with count icon
    `)(() =>
    [
      <Avatar size="s" count={number('Count', 1)} />,
      <Avatar size="m" count={number('Count', 1)} />,
      <Avatar size="l" count={number('Count', 1)} />,
    ]));

storiesOf('Lists', module)
  .addDecorator(withKnobs)
  .add('List & ListItem', withInfo(`
        Default button info
    `)(() => (
      <List>
        {
                ['red', 'orange', 'yellow', 'green', 'blue', 'violet'].map(backgroundColor => (
                  <ListItem key={backgroundColor} style={{ backgroundColor }} />
                ))
            }
      </List>
  )));

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('with action buttons', withInfo(`
        Справа и слева кнопки/текст
    `)(() =>
    [
      <Header left="лев.слот" right="пр.слот">Текст хидера</Header>,
    ]))
  .add('w/o action buttons', withInfo(`
        Если действия на Header не нужны
    `)(() =>
    [
      <Header>Текст хидера</Header>,
    ]));

storiesOf('Bubble', module)
  .addDecorator(withKnobs)
  .add('Владелец', withInfo(`
        Сообщение владельца, не прочитано
    `)(() => (
      <Bubble message="My long and interesting message" isOwner />
  )))
  .add('Не владелец', withInfo(`
        Сообщение другого пользователя, не прочитано
    `)(() => (
      <Bubble message="My long and interesting message" isOwner={false} />
  )))
  .add('Владелец, прочитано', withInfo(`
        Сообщение владельца, не прочитано
    `)(() => (
      <Bubble message="My long and interesting message" isOwner isReaded />
  )))
  .add('Не владелец, прочитано', withInfo(`
        Сообщение другого пользователя, не прочитано
    `)(() => (
      <Bubble message="My long and interesting message" isOwner={false} isReaded />
  )))
  .add('Несколько разных сообщений', withInfo(`
        Пример чата
    `)(() => ([
      <Bubble message="My long and interesting message1" isOwner={false} isReaded />,
      <Bubble message="My long and interesting message2" isOwner isReaded />,
      <Bubble message="My long and interesting message3" isOwner={false} isReaded />,
      <Bubble message="My long and interesting message4" isOwner isReaded />,
      <Bubble message="My long and interesting message5" isOwner />,
      <Bubble message="My long and interesting message6" isOwner={false} />,
  ])));

storiesOf('MessageInput', module)
  .addDecorator(withKnobs)
  .add('default', withInfo(`
    Message input
  `)(() =>
    (<div style={{ width: text('Width', '200px'), height: text('Height', '20px') }}>
      <MessageInput sendMessage={msg => alert(msg)} />
    </div>)));
storiesOf('IconButton', module)
  .addDecorator(withKnobs)
  .add('with icon', withInfo('')(() => (
    <IconButton
      disabled={boolean('Disabled', false)}
      onClick={action('clicked')}
      color={text('Icon color', 'red')}
    >{text('Icon glyph', 'favorite')}
    </IconButton>
  )))
  .add('with image', withInfo('Image can be both vector and raster')(() => (
    <IconButton
      disabled={boolean('Disabled', false)}
      onClick={action('clicked')}
    ><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
    </IconButton>
  )));
