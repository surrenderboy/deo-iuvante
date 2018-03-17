import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withInfo, setDefaults } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import Avatar from '../components/Avatar/Avatar';
import List from '../components/List/List';
import ListItem from '../components/ListItem/ListItem';

// default behavior for component info
setDefaults({
    inline: true
});

storiesOf('Avatar', module)
    .addDecorator(withKnobs)
    .add('default', withInfo(`
        Default avatar
    `)(() =>
      [
        <Avatar size="s" />,
        <Avatar size="m" />,
        <Avatar size="l" />
      ]
    ))
    .add('with count', withInfo(`
        Avatar with count icon
    `)(() =>
      [
        <Avatar size="s" count={number('Count', 1)}/>,
        <Avatar size="m" count={number('Count', 1)}/>,
        <Avatar size="l" count={number('Count', 1)}/>
      ]
    ))
storiesOf('Lists', module)
    .addDecorator(withKnobs)
    .add('List & ListItem', withInfo(`
        Default button info
    `)(() => (
        <List>
            {
                ['red', 'orange', 'yellow', 'green', 'blue', 'violet'].map(backgroundColor => (
                    <ListItem key={backgroundColor} style={{backgroundColor}} />
                ))
            }
        </List>
    )));
