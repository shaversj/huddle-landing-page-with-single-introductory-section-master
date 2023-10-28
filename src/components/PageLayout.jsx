import React from 'react';

const PageLayout = ({children}) => {
    return (
        <div className={"bg-black min-h-screen flex items-center"}>
            {children}
        </div>
    );
};

export default PageLayout;