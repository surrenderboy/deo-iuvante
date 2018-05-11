import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withInfo, setDefaults } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import Avatar from '../components/Avatar/Avatar';
import List from '../components/List/List';
import ChatListItem from '../components/ChatsListItem/ChatsListItem';
import Header from '../components/Header/Header';
import Bubble from '../components/Bubble/Bubble';
import Bouncer from '../components/Bouncer/Bouncer';
import Spinner from '../components/Spinner/Spinner';
import MessageForm from '../components/MessageForm/MessageForm';

import Icon from '../components/Icon/Icon';

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
      <List
        ListItem={ChatListItem}
        listItemProps={[
          {
            unreadMessages: number('Количество непрочитанных сообщений в первом чате', 1),
            lastActivity: Date.now(),
            lastMessage: text('Тескт сообщения в первом чате', 'И так сойдёт!'),
            room: {
              name: text('Название первого чата', 'Deo Iuvante'),
              avatarUrl: text('Аватар первого чата', 'https://avatars2.githubusercontent.com/u/2494140?s=460&v=4'),
            },
          },
          {
            unreadMessages: 100500,
            lastActivity: Date.now() - 100000,
            lastMessage: 'Ты же там у меня небось голодаешь снова, внучок!',
            room: {
              name: 'Бабушка',
              avatarUrl: 'http://www.sonarium.ru/wp-content/uploads/2013/09/babushka-318x400.jpg',
            },
          },
          {
            room: {
              name: 'Эмма Уотсон',
              avatarUrl: 'http://www.purehdwallpaper.com/thumbs/emma-watson-angel-smile-t2.jpg',
            },
          },
        ]}
      />
  )));

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('with action buttons', withInfo(`
        Справа и слева кнопки/текст
    `)(() =>
    [
      <Header
        left={
          <span>
            <IconButton
              onClick={action('back')}
              icon={{ color: '#fff', glyph: 'arrow_back' }}
              text={{ caption: 'Назад', color: '#fff' }}
            />
          </span>
        }
        right={
          <IconButton
            onClick={action('back')}
            icon={{ color: '#fff', glyph: 'add' }}
          />
        }
      >Текст хидера
      </Header>,
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
      <Bubble message="My long and interesting message" isOwner isRead />
  )))
  .add('Не владелец, прочитано', withInfo(`
        Сообщение другого пользователя, не прочитано
    `)(() => (
      <Bubble message="My long and interesting message" isOwner={false} isRead />
  )))
  .add('Несколько разных сообщений', withInfo(`
        Пример чата
    `)(() => ([
      <Bubble message="My long and interesting message1" isOwner={false} isRead />,
      <Bubble message="My long and interesting message2" isOwner isRead />,
      <Bubble message="My long and interesting message3" isOwner={false} isRead />,
      <Bubble message="My long and interesting message4" isOwner isRead />,
      <Bubble message="My long and interesting message5" isOwner />,
      <Bubble message="My long and interesting message6" isOwner={false} />,
  ])));

storiesOf('Spinner', module)
  .addDecorator(withKnobs)
  .add('Spinner', withInfo(`
        Вращающийся индикатор загрузки
    `)(() =>
    [
      <Spinner size={text('Размер', 'l')} />,
    ]));

storiesOf('Bouncer', module)
  .addDecorator(withKnobs)
  .add('Bouncer', withInfo(`
        "Прыгающий" индикатор загрузки
    `)(() =>
    [
      <Bouncer />,
    ]));


storiesOf('MessageForm', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('Hit "Enter" to send message')(() => (
      <MessageForm sendMessage={() => {}} />
    )),
  );

storiesOf('IconButton', module)
  .addDecorator(withKnobs)
  .add('with icon', withInfo('')(() => (
    <IconButton
      disabled={boolean('Disabled', false)}
      onClick={action('clicked')}
      icon={{ color: text('Icon color', 'red'), glyph: text('Icon glyph', 'favorite') }}
      text={{ caption: text('Button text', 'Hello World') }}
    />
  )))
  .add('with image', withInfo('Image can be both vector and raster')(() => (
    <IconButton
      disabled={boolean('Disabled', false)}
      onClick={action('clicked')}
      icon={{ src: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' }}
      text={{ caption: text('Button text', 'Hello World') }}
    />
  )));

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('with font icon', withInfo('')(() => (
    <Icon style={{ fontSize: 40 }} color={text('Icon color', 'red')} glyph={text('Icon glyph', 'favorite')} />
  )))
  .add('with image icon', withInfo('')(() => (
    <Icon
      style={{ height: 40 }}
      src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
    />
  )));
