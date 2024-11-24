// import React from 'react';
// function Multiarray()
// {
//     let data=[
//         {
//          name:"kk",email:"k@gmail",address:[
//             {po:"jf",state:"go"},
//             {po:"jgg",state:"go"},
//             {po:"jjj",state:"go"}
//          ]
//         },
//         {
//         name:"kkk",email:"k@gmail",address:[
//             {po:"jf",state:"go"},
//             {po:"jgg",state:"go"},
//             {po:"jjj",state:"go"}  
//          ]
//         },
//         {
//          name:"kkkk",email:"k@gmail",address:[
//          {po:"jf",state:"go"},
//          {po:"jgg",state:"go"},
//          {po:"jjj",state:"go"}
//             ]
//         },
//     ]
//     return
//     (
//         <div className='app'>
//         <h1>Hi table</h1>
//         <table>
//             <tbody>
//                 <tr>
//                 <td>name</td>
//                 <td>email</td>
//                 <td>address</td>
//                 </tr>
//             </tbody>
//             {
//                 data.map(()=>
//                     <tr>
//                 <td>{data.name}</td>
//                 <td>{data.email}</td>
//                 <td>{data.address}</td>
//                 </tr>
//                 )
//             }
//         </table>
//         </div>
//     );
// }
// export default Multiarray

import React from 'react';

function Multiarray() {
    const data = [
        {
            name: "kk", email: "k@gmail", address: [
                { po: "jf", state: "go" },
                { po: "jgg", state: "go" },
                { po: "jjj", state: "go" }
            ]
        },
        {
            name: "kkk", email: "k@gmail", address: [
                { po: "jf", state: "go" },
                { po: "jgg", state: "go" },
                { po: "jjj", state: "go" }
            ]
        },
        {
            name: "kkkk", email: "k@gmail", address: [
                { po: "jf", state: "go" },
                { po: "jgg", state: "go" },
                { po: "jjj", state: "go" }
            ]
        }
    ];

    return (
        <div className='app'>
            <h1>Hi table</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>index</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address.length > 0 ? `${item.address[0].po}, ${item.address[0].state}` : 'No Address'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Multiarray;
