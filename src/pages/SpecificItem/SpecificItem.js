import React from 'react';

const SpecificItem = () => {
    return (
        <div>
            <h2>specific item details</h2>
            <h3>Clicking on the update button in items section will take the user to the inventory/:id route. This route will be a private/protected route. Please make sure that the private route redirects to the login page if the user is not logged in. After login, the user will be redirected to the page he/she wanted to go to. Also, after reloading the page of a private route, the user is not redirected to the login page.</h3>
        </div>
    );
};

export default SpecificItem;