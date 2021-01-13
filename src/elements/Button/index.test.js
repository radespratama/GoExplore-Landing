import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router} from 'react-router-dom'

import Button from './index'

// 5 state Button Disabled, Button Loading, Link External, Link Internal, Button Regular

// Check Button Disabled
test("Should not allowed click button if isDisabled is present", () => {
    const {container} = render (<Button isDisabled></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
});

// Check Function Loading
test("Should render loading/spinner", () => {
    const {container, getByText} = render (<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector('span')).toBeInTheDocument()
});

// Check <a> tag
test("Should render <a> tag", () => {
    const {container, getByText} = render (<Button type="link" isExternal></Button>)

    expect(container.querySelector('a')).toBeInTheDocument()
});

// Check <link> components
test("Should render <link> component", () => {
    const {container, getByText} = render (
    <Router>
        <Button href="" type="link"></Button>
    </Router>)

    expect(container.querySelector('a')).toBeInTheDocument()
});

