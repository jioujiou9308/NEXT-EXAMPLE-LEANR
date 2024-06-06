// import React, { useEffect, useState } from 'react';

// const Lazy = () => {
//     const [isLoaded, setIsLoaded] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsLoaded(true);
//         }, 3000); // 3 seconds delay for demonstration

//         return () => clearTimeout(timer);
//     }, []);

//     if (!isLoaded) {
//         return null; // Don't render anything until loaded
//     }

//     return (
//         <div>
//             <div>LAZY COMPONENT</div>
//             <div>123qwe123</div>
//         </div>
//     );
// };

// export default Lazy;

// Lazy.js
import React from 'react';

const Lazy = () => {
    return (
        <div>
            <div>LAZY COMPONENT</div>
            <div>123qwe123</div>
        </div>
    );
};

export default Lazy;
