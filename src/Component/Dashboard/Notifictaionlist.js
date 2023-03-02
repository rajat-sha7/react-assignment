import React, { useState, useEffect } from 'react'

const Notifictaionlist = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("notifications")) || [];


        setData(storedData);


    }, []);

    const notdata = data;











    // const notdata = userdata.notifications

    console.log(notdata, "notification bar")


    return (
        <div className='notification-bar'>
            <h3>Notification List</h3>

            {notdata.map((item, index) => {
                return (

                    <div className='notification-list' key={index} >

                        <div><img src={item.pic} alt="images" /></div>
                        <div className='notmsg'>
                            <h4>{item.message}</h4>
                            <p>{item.time} ago.</p>
                        </div>
                    </div>


                )
            })}







        </div>
    )
}

export default Notifictaionlist
