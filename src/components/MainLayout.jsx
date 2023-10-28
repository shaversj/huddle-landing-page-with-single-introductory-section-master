import React from 'react';

const MainLayout = ({children}) => {
    return (
<main className={"bg-violet sm:bg- bg-mobile-bg bg-no-repeat max-w-screen-sm lg:max-w-screen-lg mx-auto min-h-[800px] max-h-[800px] px-8 lg:px-[73px] lg:bg-desktop-bg"}>
    {children}
</main>
    );
};

export default MainLayout;