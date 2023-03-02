import React , {useState,useEffect} from 'react'

const OrderList = () => {


  const [data,setData]=useState([]);


  useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("orders")) || [];
  
  
      setData(storedData);
  
  
    }, []);

    // const notdata= 









     const orderdata=data

    console.log(orderdata,  "hello brother")


  return (
    <div className='orderList'>
    <h3>Orders List</h3>
    <table>
    <div className='ordertable-heading'>   
        <tr >
            <th>ORDER NO</th>
            <th>STATUS</th>
            <th>OPERATORS</th>
            <th>LOCATION</th>
            <th>DISTANCE</th>
            <th>START DATE</th>
            <th>EST DELIVERY DUE</th>
        </tr>
        </div>
        <tbody>
{orderdata.map((order,index)=>{
    return (
        <div  className='ordertable-lists' key={index}>
        <tr >
        <td>#{order.orderNo}</td>
        <td>{order.status}</td>
        <td>{order.operators}</td>
         <td>{order.location}</td>
         <td>{order.distance} Km</td>
         <td>{order.startDate}</td>
                <td>{order.deliveryDate}</td>
             
               
         
               
                
             
            </tr>
            </div>

    )
})}
           
        </tbody>
    </table>

      
    </div>
  )
}

export default OrderList
