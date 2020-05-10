// @ts-ignore
import React from 'react';
// @ts-ignore
import {CollectaProvider, connectClient} from 'collecta';

const core = connectClient({
    engine: "https://core.collecta.com",
    userToken: "...", // You need to extract that from somewhere
})

// App.tsx
const App = () => {
    return <div>
        {/*{...}*/}
    </div>
}

const CustomApp = () => {
    return <CollectaProvider client={core}>
        <App/>
    </CollectaProvider>
}

export default CustomApp;