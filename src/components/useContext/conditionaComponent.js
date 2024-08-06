import React from 'react';
import { UserContext } from '../../App';

function ConditionalComponent() {
    return (
        <UserContext.Consumer>
            {user => {
                return user === 'authenticated' ? (
                    <div>Welcome, authenticated user!</div>
                ) : (
                    <div>Please log in to view this content.</div>
                );
            }}
        </UserContext.Consumer>
    );
}

export default ConditionalComponent;
