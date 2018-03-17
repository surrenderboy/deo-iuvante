import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withInfo, setDefaults } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import { Button } from '@storybook/react/demo';

// default behavior for component info
setDefaults({
    inline: true
});

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('with text', withInfo(`
        Default button info
    `)(() => (
        <Button onClick={action('clicked')}>{text('Button text', 'Hello world')}</Button>
    )))
    .add('with some emoji', withInfo(`
        Emoji button info
    `)(() => (
        <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
    )));

